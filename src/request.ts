import type { RConfig } from '@/config';
import { RResponse } from '@/response';
import { HttpMethod, type HttpMethodPhrase } from '@/specs/method';
import type { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import { RRetryStrategy } from '@/retry/strategy';
import type { RRetryPredict } from '@/retry/types';
import type { Mutable } from '@/types';

export type RRequestInit = RequestInit & { headers: Record<string, string>; };

export type RRequestConfig = RConfig & {
    readonly keepalive: boolean;
}

/**
 * Handles HTTP requests.
 */
export class RRequest {

    private readonly _fetcher: typeof globalThis.fetch;

    private _config: Mutable<RRequestConfig>;
    
    private readonly _endpoint: URL;

    private _searchParams: URLSearchParams;

    private _body: BodyInit | null = null;

    private _middlewares: (RRequestMiddleware | RResponseMiddleware)[];

    private _retry: RRetryStrategy;

    private _timeout: number | null;

    private _signals: AbortSignal[] = [];

    public get fetcher(): typeof globalThis.fetch {
        return this._fetcher;
    }

    public get config(): RRequestConfig {
        return {
            ...this._config,
        };
    }
    
    public get endpoint(): URL {
        return new URL(this._endpoint);
    }

    public get searchParams(): URLSearchParams {
        return new URLSearchParams(this._searchParams);
    }

    public get bodyData(): BodyInit | null {
        return this._body;
    }

    public get middleware(): (RRequestMiddleware | RResponseMiddleware)[] {
        return [...this._middlewares];
    }

    public get timeout(): number | null {
        return this._timeout;
    }

    constructor(
        uri: string | URL,
        config: RConfig,
        fetcher?: typeof globalThis.fetch
    ) {
        this._config = {
            ...config,
            keepalive: false,
        };

        const _uri = new URL(uri);

        this._endpoint = new URL(`${_uri.protocol}//${_uri.hostname}${_uri.pathname}`);

        this._searchParams = _uri.searchParams;

        this._middlewares = config.middlewares;
        
        this._retry = new RRetryStrategy({
            retriableCodes: config.retriableCodes,
            predictor: config.retryOn,
        });

        this._timeout = config.timeout ?? null;
        
        this._fetcher = fetcher ?? fetch;
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
     * Exceutes HEAD request.
     */
    public readonly head = (): Promise<RResponse> =>
        this.send(HttpMethod.HEAD);

    /**
     * Sets URL parameters.
     */
    public readonly params = (params: Record<string, any>): RRequest => {
        
        for (const key in params) {
            this._searchParams.append(key, params[key]);
        }

        return this;
    }

    /**
     * Sets body data.
     */
    public readonly body = (body: BodyInit): RRequest => {
        this._body = body;
        return this;
    }

    /**
     * Sets body data converting JavaScript value into JSON string.
     */
    public readonly json = (value: any): RRequest => {
        this._body = JSON.stringify(value);
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

        this._body = form;

        return this;
    }

    /**
     * Sets `keepalive` option to {@link RequestInit}.
     */
    public readonly keepalive = (): RRequest => {
        this._config.keepalive = true;
        return this;
    }

    /**
     * Sets `cache` option to {@link RequestInit}.
     */
    public readonly cache = (cache: RequestCache): RRequest => {
        this._config.cache = cache;
        return this;
    }

    /**
     * Sets `credentials` option to {@link RequestInit}.
     */
    public readonly credentials = (credentials: RequestCredentials): RRequest => {
        this._config.credentials = credentials;
        return this;
    }

    /**
     * Sets `mode` option to {@link RequestInit}.
     */
    public readonly mode = (mode: RequestMode): RRequest => {
        this._config.mode = mode;
        return this;
    }

    /**
     * Sets `priority` option to {@link RequestInit}.
     */
    public readonly priority = (priority: RequestPriority): RRequest => {
        this._config.priority = priority;
        return this;
    }

    /**
     * Sets `priority` option to {@link RequestInit}.
     */
    public readonly redirect = (redirect: RequestRedirect): RRequest => {
        this._config.redirect = redirect;
        return this;
    }

    /**
     * Sets `headers` option to {@link RequestInit}.
     */
    public readonly header = (name: HeaderName | string, value: string): RRequest => {
        this._config.headers[name] = value;
        return this;
    }

    /**
     * Sets `headers` option to {@link RequestInit}.
     */
    public readonly headers = (headers: Record<string, string>): RRequest => {
        
        this._config.headers = {
            ...this._config.headers,
            ...headers
        };

        return this;
    }

    /**
     * Clears all headers of {@link RequestInit}.
     */
    public readonly clearHeaders = (): RRequest => {
        this._config.headers = {};
        return this;
    }

    /**
     * Sets `signal` option to {@link RequestInit}.
     */
    public readonly addSignal = (signal: AbortSignal): RRequest => {
        this._signals.push(signal);
        return this;
    }

    /**
     * Sets status codes on which request assumed to be retriable.
     */
    public readonly retriableCodes = (statusCodes: number[]): RRequest => {
        this._retry.retriableCodes(...statusCodes);
        return this;
    }

    /**
     * Sets `retryOn` option.
     * 
     * This option sets predictor for checking if the response is considered as
     * retriable.
     */
    public readonly retryOn = (predict: RRetryPredict): RRequest => {
        this._retry.retryOn(predict);
        return this;
    }

    private readonly send = async (
        method: HttpMethodPhrase,
    ): Promise<RResponse> => {

        const aborter = new AbortController();

        for (const signal of this._signals) {
            
            if (signal.aborted === false) {
    
                signal.addEventListener('abort', () => {
                    aborter.abort(signal.reason);
                });
            }
        }

        if (typeof this._timeout == 'number' && this._timeout >= 0) {

            const timeout = AbortSignal.timeout(this._timeout);

            timeout.addEventListener('abort', () => {
                aborter.abort(timeout.reason);
            });
        }

        const uri = this._searchParams
            ? `${this._endpoint}?${this._searchParams}`
            : this._endpoint;

        let request = new Request(
            new URL(uri),
            {
                ...this._init(),
                method,
                signal: aborter.signal,
            }
        );

        for (const middleware of this._middlewares) {
            if (middleware instanceof RRequestMiddleware) {
                request = middleware.handle(request);
            }
        }

        let response = await this._retry.trial(async () => await this._fetcher(request, request));

        for (const middleware of this._middlewares) {
            if (middleware instanceof RResponseMiddleware) {
                response = middleware.handle(response);
            }
        }

        const rresponse = new RResponse(response);

        return rresponse;
    }

    private readonly _init = (): RRequestInit => {

        return {
            cache: this._config.cache,
            credentials: this._config.credentials,
            headers: { ...this._config.headers },
            mode: this._config.mode,
            priority: this._config.priority,
            redirect: this._config.redirect,
            keepalive: this._config.keepalive,
            body: this._body,
        }
    }
}