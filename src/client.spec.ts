import { describe, expect, it } from 'vitest';
import { RClient } from '@/client';
import { defaultConfig } from '@/config';

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
        });

        const extended = client.extend({
            cache: 'force-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'navigate',
            priority: 'high',
            redirect: 'error',
        });

        const originalConfig = client['config'];

        const extendedConfig = extended['config'];

        expect(originalConfig.cache).toBe('default');
        expect(originalConfig.credentials).toBe('same-origin');
        expect(originalConfig.headers).toEqual({});
        expect(originalConfig.mode).toBe('same-origin');
        expect(originalConfig.priority).toBe('auto');
        expect(originalConfig.redirect).toBe('follow');

        expect(extendedConfig.cache).toBe('force-cache');
        expect(extendedConfig.credentials).toBe('include');
        expect(extendedConfig.headers).toEqual({
            'Content-Type': 'application/json',
        });
        expect(extendedConfig.mode).toBe('navigate');
        expect(extendedConfig.priority).toBe('high');
        expect(extendedConfig.redirect).toBe('error');
    });

    it('should keep existing options in config when client is extended', async () => {

        const client = new RClient({
            cache: 'no-store',
            credentials: 'omit',
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Accept-Language': 'da, en-gb;q=0.8, en;q=0.7',
            },
            mode: 'no-cors',
            priority: 'low',
            redirect: 'manual',
        });

        const config = client['config'];

        expect(config.cache).toBe('no-store');
        expect(config.credentials).toBe('omit');
        expect(config.headers).toEqual({
            'Accept': 'application/json; charset=utf-8',
            'Accept-Language': 'da, en-gb;q=0.8, en;q=0.7',
        });
        expect(config.mode).toBe('no-cors');
        expect(config.priority).toBe('low');
        expect(config.redirect).toBe('manual');
    });
});