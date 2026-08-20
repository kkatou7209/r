import { RClient } from '@/client';
import { RClientBuilder } from '@/clientBuilder';
import { type RConfig, type DefaultRConfig } from '@/config';
import { RRequestMiddleware, type RRequestMiddlewareHandler } from '@/middlewares/request';
import { RResponseMiddleware, type RResponseMiddlewareHandler } from '@/middlewares/response';
import { CacheOption, RedirectOption, CredentialsOption } from '@/specs/fetch';
import { HttpHeader } from '@/specs/header';
import { RDefaults } from '@/default';
import { RResponse } from '@/response';
import { HttpMethod } from '@/specs/method';
import { HttpStatus } from '@/specs/status';

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


    readonly HttpStatus: HttpStatus;

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

    /**
     * Requests GET with default options.
     */
    readonly get: (info: URL | RequestInfo) => Promise<RResponse>;

    /**
     * Requests POST with default options.
     */
    readonly post: (info: URL | RequestInfo) => Promise<RResponse>;

    /**
     * Requests PUT with default options.
     */
    readonly put: (info: URL | RequestInfo) => Promise<RResponse>;
    
    /**
     * Requests PATCH with default options.
     */
    readonly patch: (info: URL | RequestInfo) => Promise<RResponse>;
    
    /**
     * Requests DELETE with default options.
     */
    readonly delete: (info: URL | RequestInfo) => Promise<RResponse>;
    
    /**
     * Requests OPTIONS with default options.
     */
    readonly options: (info: URL | RequestInfo) => Promise<RResponse>;
    
    /**
     * Requests HEAD with default options.
     */
    readonly head: (info: URL | RequestInfo) => Promise<RResponse>;
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
    HttpMethod,
    HttpStatus,
    
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
    },

    get: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.GET,
        });

        return new RResponse(response);
    },

    post: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.POST,
        });

        return new RResponse(response);
    },

    put: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.PUT,
        });

        return new RResponse(response);
    },

    patch: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.PATCH,
        });

        return new RResponse(response);
    },

    delete: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.DELETE,
        });

        return new RResponse(response);
    },

    options: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.OPTIONS,
        });

        return new RResponse(response);
    },

    head: async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.HEAD,
        });

        return new RResponse(response);
    },
});