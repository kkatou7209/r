import { describe, expect, it } from 'vitest';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import { RClientBuilder } from '@/clientBuilder';

describe('RClientBuilder test', async () => {

   it('should create valid instance with builder', async () => {

        const fetcher: typeof globalThis.fetch = async (_, __) => new Response();

        const middlewares = [
            new RRequestMiddleware((req) => req),
            new RResponseMiddleware((res) => res),
        ];

        const client = new RClientBuilder()
            .cache('force-cache')
            .credentials('omit')
            .headers({
                'Content-Type': 'application/json',
            })
            .header('ETag', '10000')
            .redirect('error')
            .mode('no-cors')
            .priority('low')
            .referrer('https://r.test.com')
            .referrerPolicy('no-referrer-when-downgrade')
            .middlewares(...middlewares)
            .fetchBy(fetcher)
            .build();

        const config = client['_config'];

        expect(config.cache).toBe('force-cache');
        expect(config.credentials).toBe('omit');
        expect(config.redirect).toBe('error');
        expect(config.mode).toBe('no-cors');
        expect(config.priority).toBe('low');
        expect(config.referrer).toBe('https://r.test.com');
        expect(config.referrerPolicy).toBe('no-referrer-when-downgrade');
        expect(config.headers['ETag']).toBe('10000');
        expect(config.headers['Content-Type']).toBe('application/json');
        expect(config.middlewares).toEqual(middlewares);
        expect(client['fetcher']).toBe(fetcher);
    }); 
});