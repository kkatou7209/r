import { describe, expect, it } from 'vitest';
import { RClient } from '@/client';
import { defaultConfig } from '@/config';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';

describe('RClient tests', async () => {

    it('should request with custom fetch.', async () => {

        const client = new RClient(defaultConfig, async (_, __) => {

            return new Response(null, {
                status: 200,
                statusText: 'CUSTOMIZED'
            });
        });

        const response = await client
            .request('https://r.test.com')
            .get();

        expect(response.statusText).toBe('CUSTOMIZED');
    });

    it('should extend existing client without modifying', async () => {

        const client = new RClient({
            cache: 'default',
            credentials: 'same-origin',
            headers: {},
            mode: 'same-origin',
            priority: 'auto',
            redirect: 'follow',
            middlewares: [],
        });

        const middlewares = [
            new RRequestMiddleware((req) => req),
            new RResponseMiddleware((res) => res),
        ];

        const extended = client.extend({
            cache: 'force-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'navigate',
            priority: 'high',
            redirect: 'error',
            middlewares,
        });

        const originalConfig = client['config'];

        const extendedConfig = extended['config'];

        expect(originalConfig.cache).toBe('default');
        expect(originalConfig.credentials).toBe('same-origin');
        expect(originalConfig.headers).toEqual({});
        expect(originalConfig.mode).toBe('same-origin');
        expect(originalConfig.priority).toBe('auto');
        expect(originalConfig.redirect).toBe('follow');
        expect(originalConfig.middlewares).toEqual([]);

        expect(extendedConfig.cache).toBe('force-cache');
        expect(extendedConfig.credentials).toBe('include');
        expect(extendedConfig.headers).toEqual({
            'Content-Type': 'application/json',
        });
        expect(extendedConfig.mode).toBe('navigate');
        expect(extendedConfig.priority).toBe('high');
        expect(extendedConfig.redirect).toBe('error');
        expect(extendedConfig.middlewares).toEqual(middlewares);
    });

    it('should create valid instance with builder', async () => {

        const fetcher: typeof globalThis.fetch = async (_, __) => new Response();

        const middlewares = [
            new RRequestMiddleware((req) => req),
            new RResponseMiddleware((res) => res),
        ];

        const client = RClient.builder()
            .cache('force-cache')
            .credentials('omit')
            .headers({
                'Content-Type': 'application/json',
            })
            .header('ETag', '10000')
            .redirect('error')
            .mode('no-cors')
            .priority('low')
            .middlewares(...middlewares)
            .fetchBy(fetcher)
            .build();

        const config = client['config'];

        expect(config.cache).toBe('force-cache');
        expect(config.credentials).toBe('omit');
        expect(config.redirect).toBe('error');
        expect(config.mode).toBe('no-cors');
        expect(config.priority).toBe('low');
        expect(config.headers['ETag']).toBe('10000');
        expect(config.headers['Content-Type']).toBe('application/json');
        expect(config.middlewares).toEqual(middlewares);
        expect(client['fetcher']).toBe(fetcher);
    });
});