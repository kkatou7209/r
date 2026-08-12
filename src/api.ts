import { RClient } from '@/client';
import { defaultConfig, type RConfig, type DefaultRConfig } from '@/config';

export interface RApi {

    /**
     * Creates new HTTP client instance with optional configuration.
     * 
     * The default configuration is defined as {@link DefaultRConfig} type.
     * 
     * @param config Client configuration.
     */
    readonly create: (
        config?: Partial<RConfig>,
        fetcher?: typeof globalThis.fetch,
    ) => RClient;
}

/**
 * Creates client instance with `create` function and request with any method.
 * 
 * ```ts
 * import { r , type RResponse } from '@mitte/r';
 * 
 * const client = r.create();
 * 
 * const response: RResponse = await client
 *      .request('https://example.com/api/blog')
 *      .get();
 * ```
 * 
 * You can also create a instance with default configurations.
 * 
 * ```ts
 * import { r , type RResponse } from '@mitte/r';
 * 
 * const client = r.create({
 *      cache: 'cors',
 *      credentials: 'include',
 * });
 * ```
 * 
 * Request with any method.
 * 
 * ```ts
 * client.request('...').get();
 * client.request('...').post();
 * client.request('...').put();
 * client.request('...').patch();
 * client.request('...').delete();
 * client.request('...').options();
 * client.request('...').trace();
 * client.request('...').head();
 * ```
 */
export const r: RApi = Object.freeze({

    create: (
        config?: Partial<RConfig>,
        fetcher?: typeof globalThis.fetch
    ) => {

        const conf = config
            ? { ...defaultConfig, ...config }
            : defaultConfig;

        return new RClient(conf, fetcher);
    }
});