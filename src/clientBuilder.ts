import type { Mutable } from '@/types';
import type { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import type { RRetryPredict } from '@/retry/types';
import { RDefaults } from '@/default';
import { type Headers, type RConfig } from '@/config';
import { RClient } from '@/client';
import type { RequestReferrePolicy, RequestReferrer } from '@/specs/fetch';

/**
 * Builder of HTTTP client.
 */
export class RClientBuilder {

    private readonly _config: Mutable<RConfig> = { ...RDefaults.Config };

    private fetcher: typeof globalThis.fetch = fetch;

    /**
     * Sets `cache` option.
     */
    public readonly cache = (cache: RequestCache): RClientBuilder => {
        this._config.cache = cache;
        return this;
    }

    /**
     * Sets `credentials` option.
     */
    public readonly credentials = (credentials: RequestCredentials): RClientBuilder => {
        this._config.credentials = credentials;
        return this;
    }

    /**
     * Sets `mode` option.
     */
    public readonly mode = (mode: RequestMode): RClientBuilder => {
        this._config.mode = mode;
        return this;
    }

    /**
     * Sets `priority` option.
     */
    public readonly priority = (priority: RequestPriority): RClientBuilder => {
        this._config.priority = priority;
        return this;
    }

    /**
     * Sets `priority` option.
     */
    public readonly redirect = (redirect: RequestRedirect): RClientBuilder => {
        this._config.redirect = redirect;
        return this;
    }

    /**
     * Sets `referrer` option.
     */
    public readonly referrer = (referrer: RequestReferrer): RClientBuilder => {
        this._config.referrer = referrer;
        return this;
    }

    /**
     * Sets `referrerPolicy` option.
     */
    public readonly referrerPolicy = (policy: RequestReferrePolicy): RClientBuilder => {
        this._config.referrerPolicy = policy;
        return this;
    }

    /**
     * Sets `headers` option.
     */
    public readonly header = (name: HeaderName | (string & {}), value: string): RClientBuilder => {
        this._config.headers[name] = value;
        return this;
    }

    /**
     * Sets `headers` option.
     */
    public readonly headers = (headers: Headers): RClientBuilder => {
        this._config.headers = { ...this._config.headers, ...headers };
        return this;
    }

    /**
     * Sets `retriableCodes` option that configures status codes
     * which request will retry on.
     */
    public readonly retriableCodes = (statusCodes: number[]): RClientBuilder => {
        this._config.retriableCodes = statusCodes;
        return this;
    }

    /**
     * Sets `retryOn` option that configures delegate checks if the response is considered as
     * retriable.
     * 
     * Preceeds `retriableCodes` option.
     */
    public readonly retryOn = (predict: RRetryPredict): RClientBuilder => {
        this._config.retryOn = predict;
        return this;
    }

    /**
     * Sets `retryLimit` option that configure maximum retry count of request.
     * 
     * Minumum value is `0`.
     */
    public readonly retryLimit = (limit: number): RClientBuilder => {
        this._config.retryLimit = limit;
        return this;
    }

    /**
     * Sets `retryInterval` option that configure interval milliseconds
     * to the next retry.
     * 
     * Minumum value is `0`.
     */
    public readonly retryInterval = (interval: number): RClientBuilder => {
        this._config.retryInterval = interval;
        return this;
    }

    /**
     * Sets `middleware` option.
     * 
     * Pre-defined middlewares will be ignored.
     */
    public readonly middlewares = (
        ...middlewares: (RRequestMiddleware | RResponseMiddleware)[]
    ): RClientBuilder => {
        this._config.middlewares = [...middlewares]
        return this;
    }

    /**
     * Sets fetch function.
     */
    public readonly fetchBy = (fetcher: typeof globalThis.fetch): RClientBuilder => {
        this.fetcher = fetcher;
        return this;
    }

    /**
     * Creates new `RClient` with configured options.
     */
    public readonly build = () => {

        return new RClient(this._config, this.fetcher);
    }
}