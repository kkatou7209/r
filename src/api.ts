import { RClient } from '@/client';
import { RClientBuilder } from '@/clientBuilder';
import { type RConfig, type DefaultRConfig } from '@/config';
import { RRequestMiddleware, RRequestMiddlewareHandler } from '@/middlewares/request';
import { RResponseMiddleware, RResponseMiddlewareHandler } from '@/middlewares/response';
import { CacheOption, RedirectOption, CredentialsOption } from '@/specs/fetch';
import { HttpHeader } from '@/specs/header';
import { RDefaults } from '@/default';

/**
 * Root of API.
 */
export interface RApi {

    /**
     * `cache` options of `fetch`.
     */
    readonly CacheOption: CacheOption;

    /**
     * `credentials` options of `fetch`.
     */
    readonly CredentialsOption: CredentialsOption;

    /**
     * `redirect` options of `fetch`.
     */
    readonly RedirectOption: RedirectOption;

    /**
     * HTTP header names.
     */
    readonly HttpHeader: HttpHeader;

    /**
     * Libary default values.
     */
    readonly Defaults: typeof RDefaults;

    /**
     * Creates new HTTP client instance with optional configuration.
     * 
     * The default configuration is defined as {@link DefaultRConfig} type.
     * 
     * ```ts
     * import { r } from '@mitte/r';
     * 
     * const client = r.create({
     *      cache: r.CacheOption.NoCache,
     * });
     * ```
     * 
     * @param config Client configuration.
     * @param fetcher Fetch function.
     */
    readonly create: (
        config?: Partial<RConfig>,
        fetcher?: typeof globalThis.fetch,
    ) => RClient;

    /**
     * Creates new HTTP client instance from builder.
     * 
     * Sets config options with methods and call `build()` to
     * create client.
     * 
     * ```ts
     * import { r } from '@mitte/r';
     * 
     * const client = r.builder()
     *      .cache('same-origin')
     *      .credentials('include')
     *      .header(r.HttpHeader.ContentType, 'application/json')
     *      .middlewares(
     *          r.before(request => {
     *              ...
     *          }),
     *          r.after(response => {
     *              ...
     *          }),
     *      )
     *      .build();
     * ```
     */
    readonly builder: () => RClientBuilder;

    /**
     * Creates a new middleware to handle request.
     * 
     * @param handler Callback to handle request.
     */
    readonly before: (handler: RRequestMiddlewareHandler) => RRequestMiddleware;

    /**
     * Creates a new middleware to handle response.
     * 
     * @param handler Callback to handle response.
     */
    readonly after: (handler: RResponseMiddlewareHandler) => RResponseMiddleware;
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
 * client.request('...').head();
 * ```
 */
export const r: RApi = Object.freeze({

    CacheOption,
    RedirectOption,
    CredentialsOption,
    HttpHeader,
    Defaults: RDefaults,

    create: (
        config?: Partial<RConfig>,
        fetcher?: typeof globalThis.fetch
    ) => {

        const conf = config
            ? { ...RDefaults.Config, ...config }
            : RDefaults.Config;

        return new RClient(conf, fetcher);
    },

    builder: () => RClient.builder(),

    before: (handler: RRequestMiddlewareHandler): RRequestMiddleware => {
        return new RRequestMiddleware(handler);
    },

    after: (handler: RResponseMiddlewareHandler): RResponseMiddleware => {
        return new RResponseMiddleware(handler);
    }
});