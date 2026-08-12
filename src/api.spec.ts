import { describe, expect, it } from 'vitest';
import { r } from '@/api';
import { defaultConfig } from '@/config';

describe('API tests', async () => {

    it('should set default values when create client', async () => {

        const client = r.create();

        const config = client['config'];

        expect(config.cache).toBe(defaultConfig.cache);
        expect(config.credentials).toBe(defaultConfig.credentials);
        expect(config.mode).toBe(defaultConfig.mode);
        expect(config.headers).toEqual(defaultConfig.headers);
        expect(config.priority).toEqual(defaultConfig.priority);
        expect(config.redirect).toEqual(defaultConfig.redirect);
    });
});