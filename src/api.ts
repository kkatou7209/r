import { RClient } from '@/client';
import { type RConfig } from '@/config';
import { RRequestMiddleware, type RRequestMiddlewareHandler } from '@/middlewares/request';
import { RResponseMiddleware, type RResponseMiddlewareHandler } from '@/middlewares/response';
import { CacheOption, RedirectOption, CredentialsOption, ReferrerOption, ReferrerPolicyOption, PriorityOption, ModeOption } from '@/specs/fetch';
import { HttpHeader } from '@/specs/header';
import { RDefaults, type RDefaultConfig } from '@/default';
import { RResponse } from '@/response';
import { HttpMethod } from '@/specs/method';
import { HttpStatus } from '@/specs/status';
import { AcceptEncodingOption, Encoders } from './specs/encoding';

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
export class r {

    /**
     * `cache` options of `fetch`.
     */
    public static readonly CacheOption: CacheOption = CacheOption;

    /**
     * `credentials` options of `fetch`.
     */
    public static readonly Redirect: RedirectOption = RedirectOption;

    /**
     * `redirect` options of `fetch`.
     */
    public static readonly Credentials: CredentialsOption = CredentialsOption;

    public static readonly Referrer: ReferrerOption = ReferrerOption;

    public static readonly ReferrerPolicy: ReferrerPolicyOption = ReferrerPolicyOption;

    public static readonly Priority: PriorityOption = PriorityOption;

    public static readonly Mode: ModeOption = ModeOption;

    /**
     * HTTP header names.
     */
    public static readonly HttpHeader: HttpHeader = HttpHeader;

    /**
     * HTTP meyhod names.
     */
    public static readonly HttpMethod: typeof HttpMethod = HttpMethod;

    /**
     * HTTP status codes.
     */
    public static readonly HttpStatus: HttpStatus = HttpStatus;
    
    /**
     * Default options of this library.
     */
    public static readonly Defaults: RDefaults = RDefaults;

    /**
     * Utilities for creating `Accept-Encoding` values.
     * 
     * Gets header values.
     * 
     * ```ts
     * import { r } from '@mitte/r';
     * 
     * const value = r.Encode.gzip();
     * 
     * console.log(value); // => "gzip"
     * ```
     * 
     * Header value with quality.
     * 
     * ```ts
     * import { r } from '@mitte/r';
     * 
     * const value = r.Encode.zstd({ quality: 0.5 });
     * 
     * console.log(value); // => "zstd;q=0.5"
     * ```
     * 
     * If you want multiple form of `Accept-Encoding` value, use `Encoders.join`.
     * 
     * ```
     * import { r } from '@mitte/r';
     * 
     * const value = r.Encode.join(
     *      r.Encoder.gzip(),
     *      r.Encoder.deflate({ quality: 0.7 }),
     *      r.Encoder.zstd({ quality: 1.6 }),
     *      r.Encoder.dcb({ quality: -1 }),
     * );
     * 
     * console.log(value) // => "gzip, deflate;q=0.7, zstd;q=1.0, dcb;q=0.0"
     * ```
     */
    public static readonly Encode: Encoders = Encoders;

    /**
     * Encoder names of `Accept-Encoding`.
     */
    public static readonly Encoder: AcceptEncodingOption = AcceptEncodingOption;

    /**
     * Creates new HTTP client instance with optional configuration.
     * 
     * The default configuration is defined as {@link RDefaultConfig} type.
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
    public static readonly create = (
        config?: Partial<RConfig>,
        fetcher?: typeof globalThis.fetch
    ) => {

        const conf = config
            ? { ...RDefaults.Config, ...config }
            : RDefaults.Config;

        return new RClient(conf, fetcher);
    }

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
    public static readonly builder = () => RClient.builder();

    /**
     * Creates a new middleware to handle request.
     * 
     * @param handler Callback to handle request.
     */
    public static readonly before = (handler: RRequestMiddlewareHandler): RRequestMiddleware => {
        return new RRequestMiddleware(handler);
    }

    /**
     * Creates a new middleware to handle response.
     * 
     * @param handler Callback to handle response.
     */
    public static readonly after = (handler: RResponseMiddlewareHandler): RResponseMiddleware => {
        return new RResponseMiddleware(handler);
    }

    /**
     * Requests GET with default options.
     */
    public static readonly get = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.GET,
        });

        return new RResponse(response);
    }

    /**
     * Requests POST with default options.
     */
    public static readonly post = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.POST,
        });

        return new RResponse(response);
    }

    /**
     * Requests PUT with default options.
     */
    public static readonly put = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.PUT,
        });

        return new RResponse(response);
    }

    /**
     * Requests PATCH with default options.
     */
    public static readonly patch = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.PATCH,
        });

        return new RResponse(response);
    }

    /**
     * Requests DELETE with default options.
     */
    public static readonly delete = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.DELETE,
        });

        return new RResponse(response);
    }

    /**
     * Requests OPTIONS with default options.
     */
    public static readonly options = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.OPTIONS,
        });

        return new RResponse(response);
    }

    /**
     * Requests HEAD with default options.
     */
    public static readonly head = async (input: URL | RequestInfo, init?: RequestInit): Promise<RResponse> => {

        const response = await fetch(input, {
            ...init,
            method: HttpMethod.HEAD,
        });

        return new RResponse(response);
    }
};