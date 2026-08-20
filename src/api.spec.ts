import { describe, expect, it } from 'vitest';
import { r } from '@/api';
import { RDefaults } from '@/default';

describe('API tests', async () => {

    it('should set default values when create client', async () => {

        const client = r.create();

        const config = client['_config'];

        expect(config.cache).toBe(RDefaults.Config.cache);
        expect(config.credentials).toBe(RDefaults.Config.credentials);
        expect(config.mode).toBe(RDefaults.Config.mode);
        expect(config.headers).toEqual(RDefaults.Config.headers);
        expect(config.priority).toEqual(RDefaults.Config.priority);
        expect(config.redirect).toEqual(RDefaults.Config.redirect);
    });
});