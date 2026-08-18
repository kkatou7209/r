import type { Mutable } from '@/types';
import { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import { RRetryPredict } from '@/retryStrategy';
import { RDefaults } from '@/default';
import { type Headers, type RConfig } from '@/config';
import { RClient } from '@/client';

/**
 * Builder of HTTTP client.
 */
export class RClientBuilder {

    private readonly config: Mutable<RConfig> = { ...RDefaults.Config };

    private fetcher: typeof globalThis.fetch = fetch;

    /**
     * Sets `cache` option.
     */
    public readonly cache = (cache: RequestCache): RClientBuilder => {
        this.config.cache = cache;
        return this;
    }

    /**
     * Sets `credentials` option.
     */
    public readonly credentials = (credentials: RequestCredentials): RClientBuilder => {
        this.config.credentials = credentials;
        return this;
    }

    /**
     * Sets `mode` option.
     */
    public readonly mode = (mode: RequestMode): RClientBuilder => {
        this.config.mode = mode;
        return this;
    }

    /**
     * Sets `priority` option.
     */
    public readonly priority = (priority: RequestPriority): RClientBuilder => {
        this.config.priority = priority;
        return this;
    }

    /**
     * Sets `priority` option.
     */
    public readonly redirect = (redirect: RequestRedirect): RClientBuilder => {
        this.config.redirect = redirect;
        return this;
    }

    /**
     * Sets `headers` option.
     */
    public readonly header = (name: HeaderName | (string & {}), value: string): RClientBuilder => {
        this.config.headers[name] = value;
        return this;
    }

    /**
     * Sets `headers` option.
     */
    public readonly headers = (headers: Headers): RClientBuilder => {
        this.config.headers = { ...this.config.headers, ...headers };
        return this;
    }

    /**
     * Sets `retriableCodes` option that configures status codes
     * which request will retry on.
     */
    public readonly retriableCodes = (statusCodes: number[]): RClientBuilder => {
        this.config.retriableCodes = statusCodes;
        return this;
    }

    /**
     * Sets `retryOn` option that configures delegate checks if the response is considered as
     * retriable.
     * 
     * Preceeds `retriableCodes` option.
     */
    public readonly retryOn = (predict: RRetryPredict): RClientBuilder => {
        this.config.retryOn = predict;
        return this;
    }

    /**
     * Sets `retryLimit` option that configure maximum retry count of request.
     * 
     * Minumum value is `0`.
     */
    public readonly retryLimit = (limit: number): RClientBuilder => {
        this.config.retryLimit = limit;
        return this;
    }

    /**
     * Sets `retryInterval` option that configure interval milliseconds
     * to the next retry.
     * 
     * Minumum value is `0`.
     */
    public readonly retryInterval = (interval: number): RClientBuilder => {
        this.config.retryInterval = interval;
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
        this.config.middlewares = [...middlewares]
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

        return new RClient(this.config, this.fetcher);
    }
}