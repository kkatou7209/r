import { describe, expect, it } from 'vitest';
import { RClient } from '@/client';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import { RDefaults } from '@/default';

describe('RClient tests', async () => {

    it('should request with custom fetch.', async () => {

        const client = new RClient(RDefaults.Config, async (_, __) => {

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
            referrer: 'about:client',
            referrerPolicy: 'strict-origin-when-cross-origin',
            middlewares: [],
            retriableCodes: [],
            retryLimit: 0,
            retryInterval: 0,
            timeout: 5000,
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
            referrer: 'https://r.test.com',
            referrerPolicy: 'no-referrer',
            middlewares,
            retriableCodes: [400],
            retryLimit: 4,
            retryInterval: 1000,
            retryOn: (_) => false,
            timeout: 10000,
        });

        const originalConfig = client['_config'];

        const extendedConfig = extended['_config'];

        expect(originalConfig.cache).toBe('default');
        expect(originalConfig.credentials).toBe('same-origin');
        expect(originalConfig.headers).toEqual({});
        expect(originalConfig.mode).toBe('same-origin');
        expect(originalConfig.priority).toBe('auto');
        expect(originalConfig.redirect).toBe('follow');
        expect(originalConfig.referrer).toBe('about:client');
        expect(originalConfig.referrerPolicy).toBe('strict-origin-when-cross-origin');
        expect(originalConfig.middlewares).toEqual([]);
        expect(originalConfig.retriableCodes).toEqual([]);
        expect(originalConfig.retryLimit).toBe(0);
        expect(originalConfig.retryInterval).toBe(0);
        expect(originalConfig.retryOn).toBe(undefined);
        expect(originalConfig.timeout).toBe(5000);

        expect(extendedConfig.cache).toBe('force-cache');
        expect(extendedConfig.credentials).toBe('include');
        expect(extendedConfig.headers).toEqual({
            'Content-Type': 'application/json',
        });
        expect(extendedConfig.mode).toBe('navigate');
        expect(extendedConfig.priority).toBe('high');
        expect(extendedConfig.redirect).toBe('error');
        expect(extendedConfig.referrer).toBe('https://r.test.com');
        expect(extendedConfig.referrerPolicy).toBe('no-referrer');
        expect(extendedConfig.middlewares).toEqual(middlewares);
        expect(extendedConfig.retriableCodes).toEqual([400]);
        expect(extendedConfig.retryLimit).toBe(4);
        expect(extendedConfig.retryInterval).toBe(1000);
        expect(extendedConfig.retryOn).not.toBe(undefined);
        expect(extendedConfig.timeout).toBe(10000);
    });
});