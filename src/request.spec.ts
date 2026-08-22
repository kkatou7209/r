import { describe, expect, it } from 'vitest';
import { RRequest } from '@/request';
import { HttpMethod } from '@/specs/method';
import { RResponseMiddleware } from './middlewares/response';
import { RRequestMiddleware } from './middlewares/request';
import { RDefaults } from './default';

describe('RRequest tests', async () => {

    it('should parse URL', async () => {

        const request = new RRequest(
            'https://r.test.com/api/blog/post?keyword=food&page=2',
            { ...RDefaults.Config }
        );

        expect(`${request.endpoint}`).toBe('https://r.test.com/api/blog/post');
        expect(`${request.searchParams}`).toBe('keyword=food&page=2');
    });

    it('should execute request with valid methods', async () => {

        let method: string | undefined = undefined;

        const request = new RRequest(
            'https://r.test.com',
            { ...RDefaults.Config },
            async (_, init) => {
                method = init?.method;
                return new Response();
            }
        );

        await request.get();
        expect(method, HttpMethod.GET);
        
        await request.post();
        expect(method, HttpMethod.POST);

        await request.patch();
        expect(method, HttpMethod.PATCH);

        await request.put();
        expect(method, HttpMethod.PUT);

        await request.delete();
        expect(method, HttpMethod.DELETE);

        await request.head();
        expect(method, HttpMethod.HEAD);

        await request.options();
        expect(method, HttpMethod.OPTIONS);
    });

    it('should set valid request options', async () => {

        const request = new RRequest(
            'https://r.test.com',
            { ...RDefaults.Config }
        );

        request
            .cache('force-cache')
            .credentials('omit')
            .keepalive()
            .redirect('error')
            .mode('navigate')
            .priority('low');

        const config = request.config;

        expect(config.cache).toBe('force-cache');
        expect(config.credentials).toBe('omit');
        expect(config.keepalive).toBe(true);
        expect(config.redirect).toBe('error');
        expect(config.mode).toBe('navigate');
        expect(config.priority).toBe('low');
    });

    it('should create valid form data', async () => {

        const request = new RRequest(
            'https://r.test.com',
            { ...RDefaults.Config },
        );

        request.formData({
            key1: 1,
            key2: 2,
            key3: 'data',
            key4: () => {},
            key5: {},
            key6: [],
            key7: new File([], 'test'),
        });

        const formData = request.bodyData as FormData;

        expect(formData.get('key1')).toBe('1');
        expect(formData.get('key2')).toBe('2');
        expect(formData.get('key3')).toBe('data');
        expect(formData.get('key4')).toBe('() => {}');
        expect(formData.get('key5')).toBe('[object Object]');
        expect(formData.get('key6')).toBe('');
        expect(formData.get('key7')).toEqual(new File([], 'test'));
    });

    it('should set URL parameters', async () => {

        const request = new RRequest(
            'https://r.test.com',
            { ...RDefaults.Config },
        );

        request.params({
            key1: 1,
            key2: 2,
            key3: 'data',
            key4: () => {},
            key5: {},
            key6: [],
            key7: new File([], 'test'),
        });

        const params = request.searchParams;

        expect(params.get('key1')).toBe('1');
        expect(params.get('key2')).toBe('2');
        expect(params.get('key3')).toBe('data');
        expect(params.get('key4')).toBe('() => {}');
        expect(params.get('key5')).toBe('[object Object]');
        expect(params.get('key6')).toBe('');
        expect(params.get('key7')).toEqual('[object File]');
    });

    it('should execute middlewares', async () => {

        let race = 0;
        let requestMiddewareCount = 0;
        let responseMiddewareCount = 0;
        let lastExecutedResponseMiddleware = 0;
        let lastExecutedRequestMiddleware = 0;

        const request = new RRequest(
            'https://r.test.com',
            {
                ...RDefaults.Config,
                middlewares: [
                    new RResponseMiddleware(res => {
                        if (race === 0) {
                            race = 2;
                        }
                        responseMiddewareCount++;
                        lastExecutedResponseMiddleware = 1;
                        return res;
                    }),
                    new RRequestMiddleware(req => {
                        if (race === 0) {
                            race = 1;
                        }
                        requestMiddewareCount++;
                        lastExecutedRequestMiddleware = 1;
                        return req;
                    }),
                    new RResponseMiddleware(res => {
                        if (race === 0) {
                            race = 2;
                        }
                        responseMiddewareCount++;
                        lastExecutedResponseMiddleware = 2;
                        return res;
                    }),
                    new RRequestMiddleware(req => {
                        if (race === 0) {
                            race = 1;
                        }
                        requestMiddewareCount++;
                        lastExecutedRequestMiddleware = 2;
                        return req;
                    }),
                    new RRequestMiddleware(req => {
                        if (race === 0) {
                            race = 1;
                        }
                        requestMiddewareCount++;
                        lastExecutedRequestMiddleware = 3;
                        return req;
                    }),
                    new RResponseMiddleware(res => {
                        if (race === 0) {
                            race = 2;
                        }
                        responseMiddewareCount++;
                        lastExecutedResponseMiddleware = 3;
                        return res;
                    }),
                ]
            },
            async (_, __) => {
                return new Response();
            }
        );

        await request.get();

        expect(race).toBe(1);
        expect(requestMiddewareCount).toBe(3);
        expect(responseMiddewareCount).toBe(3);
        expect(lastExecutedRequestMiddleware).toBe(3);
        expect(lastExecutedResponseMiddleware).toBe(3);
    });

    it('should abort if any signals aborted', async () => {

        const controller1 = new AbortController();
        const controller2 = new AbortController();
        const controller3 = new AbortController();

        const request = new RRequest(
            'https://r.test.com',
            { ...RDefaults.Config },
        );

        request
            .addSignal(controller1.signal)
            .addSignal(controller2.signal)
            .addSignal(controller3.signal);
    });

    it('should abort on timeout', async () => {

        const request = new RRequest(
            'https://r.test.com',
            {
                ...RDefaults.Config,
                timeout: 0,
            },
            (_, init) => {
                return new Promise((_, reject) => {
                    init?.signal?.addEventListener('abort', () => {
                        reject(init.signal?.reason);
                    });
                });
            }
        );

        try {
            await request.get();
        } catch (error) {
            expect((error as DOMException).name).toBe('TimeoutError');
        }
    });
});