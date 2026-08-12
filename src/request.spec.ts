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
});