import { describe, expect, it } from 'vitest';
import { RRequest } from '@/request';
import { defaultConfig } from '@/config';
import { HttpMethod } from '@/specs/method';

describe('RRequest tests', async () => {

    it('should execute request with valid methods', async () => {

        let method: string | undefined = undefined;

        const request = new RRequest(
            'https://r.test.com',
            { ...defaultConfig },
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

        await request.trace();
        expect(method, HttpMethod.TRACE);

        await request.head();
        expect(method, HttpMethod.HEAD);

        await request.options();
        expect(method, HttpMethod.OPTIONS);
    });

    it('should set valid request options', async () => {

        const request = new RRequest(
            'https://r.test.com',
            { ...defaultConfig }
        );

        request
            .cache('force-cache')
            .credentials('omit')
            .keepalive()
            .redirect('error')
            .mode('navigate')
            .priority('low');

        const config = request['init'];

        expect(config.cache).toBe('force-cache');
        expect(config.credentials).toBe('omit');
        expect(config.keepalive).toBe(true);
        expect(config.redirect).toBe('error');
        expect(config.mode).toBe('navigate');
        expect(config.priority).toBe('low');
    });

    it('should create valid form data', async () => {

        let formData: FormData = undefined as unknown as FormData;

        const request = new RRequest(
            'https://r.test.com',
            { ...defaultConfig },
            async (_, init) => {
                formData = init?.body as FormData;
                return new Response();
            }
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

        await request.get();

        expect(formData.get('key1')).toBe('1');
        expect(formData.get('key2')).toBe('2');
        expect(formData.get('key3')).toBe('data');
        expect(formData.get('key4')).toBe('() => {}');
        expect(formData.get('key5')).toBe('[object Object]');
        expect(formData.get('key6')).toBe('');
        expect(formData.get('key7')).toEqual(new File([], 'test'));
    });
});