import { RConfig } from '@/config';
import { RResponse } from '@/response';
import { HttpMethod } from '@/specs/method';
import { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from './middlewares/request';
import { RResponseMiddleware } from './middlewares/response';

export type RRequestInit = RequestInit & { headers: Record<string, string>; };

/**
 * Handles HTTP requests.
 */
export class RRequest {

    private readonly fetcher: typeof globalThis.fetch;

    private readonly uri: string;

    private searchParams: URLSearchParams | null = null;

    private init: RRequestInit;

    private middlewares: (RRequestMiddleware | RResponseMiddleware)[];

    constructor(
        uri: string,
        config: RConfig,
        fetcher?: typeof globalThis.fetch
    ) {
        this.uri = uri;
        this.init = {
            cache: config.cache,
            credentials: config.credentials,
            headers: { ...config.headers },
            mode: config.mode,
            priority: config.priority,
            redirect: config.redirect,
        };
        this.middlewares = config.middlewares;
        this.fetcher = fetcher ?? fetch;
    }

    /**
     * Executes GET request.
     */
    public readonly get = async (): Promise<RResponse> =>
        this.send(HttpMethod.GET);

    /**
     * Executes POST request.
     */
    public readonly post = async (): Promise<RResponse> =>
        this.send(HttpMethod.POST);

    /**
     * Excutes PUT request.
     */
    public readonly put = (): Promise<RResponse> =>
        this.send(HttpMethod.PUT);

    /**
     * Exceutes PATCH request.
     */
    public readonly patch = (): Promise<RResponse> =>
        this.send(HttpMethod.PATCH);

    /**
     * Exceutes DELETE request.
     */
    public readonly delete = (): Promise<RResponse> =>
        this.send(HttpMethod.DELETE);

    /**
     * Exceutes OPTIONS request.
     */
    public readonly options = (): Promise<RResponse> =>
        this.send(HttpMethod.OPTIONS);

    /**
     * Exceutes TRACE request.
     */
    public readonly trace = (): Promise<RResponse> =>
        this.send(HttpMethod.TRACE);

    /**
     * Exceutes HEAD request.
     */
    public readonly head = (): Promise<RResponse> =>
        this.send(HttpMethod.HEAD);

    /**
     * Sets URL parameters.
     */
    public readonly params = (params: Record<string, any>): RRequest => {
        
        const searchParams = new URLSearchParams;

        for (const key in params) {
            searchParams.append(key, params[key]);
        }

        if (searchParams.size > 0) {
            this.searchParams = searchParams;
        }

        return this;
    }

    /**
     * Sets body data.
     */
    public readonly body = (body: BodyInit): RRequest => {
        this.init.body = body;
        return this;
    }

    /**
     * Sets body data converting JavaScript value into JSON string.
     */
    public readonly json = (value: any): RRequest => {
        this.init.body = JSON.stringify(value);
        return this;
    }

    /**
     * Sets body data converting JavaScript object into `FormData`.
     */
    public readonly formData = (value: Record<string, any>): RRequest => {

        const form = new FormData();

        for (const key in value) {

            const val = value[key];

            form.append(key, val);
        }

        this.init.body = form;

        return this;
    }

    /**
     * Sets `keepalive` option to {@link RequestInit}.
     */
    public readonly keepalive = (): RRequest => {
        this.init.keepalive = true;
        return this;
    }

    /**
     * Sets `cache` option to {@link RequestInit}.
     */
    public readonly cache = (cache: RequestCache): RRequest => {
        this.init.cache = cache;
        return this;
    }

    /**
     * Sets `credentials` option to {@link RequestInit}.
     */
    public readonly credentials = (credentials: RequestCredentials): RRequest => {
        this.init.credentials = credentials;
        return this;
    }

    /**
     * Sets `mode` option to {@link RequestInit}.
     */
    public readonly mode = (mode: RequestMode): RRequest => {
        this.init.mode = mode;
        return this;
    }

    /**
     * Sets `priority` option to {@link RequestInit}.
     */
    public readonly priority = (priority: RequestPriority): RRequest => {
        this.init.priority = priority;
        return this;
    }

    /**
     * Sets `priority` option to {@link RequestInit}.
     */
    public readonly redirect = (redirect: RequestRedirect): RRequest => {
        this.init.redirect = redirect;
        return this;
    }

    /**
     * Sets `headers` option to {@link RequestInit}.
     */
    public readonly header = (name: HeaderName | string, value: string): RRequest => {
        this.init.headers[name] = value;
        return this;
    }

    /**
     * Sets `headers` option to {@link RequestInit}.
     */
    public readonly headers = (headers: Record<string, string>): RRequest => {
        this.init.headers = { ...this.init.headers, ...headers };
        return this;
    }

    /**
     * Clears all headers of {@link RequestInit}.
     */
    public readonly clearHeaders = (): RRequest => {
        this.init.headers = {};
        return this;
    }

    private readonly send = async (
        method: HttpMethod,
    ): Promise<RResponse> => {

        const uri = this.searchParams
            ? `${this.uri}?${this.searchParams}`
            : this.uri;

        let request = new Request(
            new URL(uri),
            { ...this.init, method, }
        );

        for (const middleware of this.middlewares) {
            if (middleware instanceof RRequestMiddleware) {
                request = middleware.handle(request);
            }
        }

        let response = await this.fetcher(request);

        for (const middleware of this.middlewares) {
            if (middleware instanceof RResponseMiddleware) {
                response = middleware.handle(response);
            }
        }

        return new RResponse(response);
    }
}