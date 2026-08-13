import { defaultConfig, type Headers, type RConfig } from '@/config';
import { RRequest } from '@/request';
import type { Mutable } from '@/types';
import { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';

/**
 * HTTP client.
 */
export class RClient {

    private readonly config: RConfig;

    private readonly fetcher: typeof globalThis.fetch;

    constructor(config: RConfig, fetcher?: typeof globalThis.fetch) {
        this.config = config;
        this.fetcher = fetcher ?? fetch;
    }

    /**
     * Prepare request to specified endpoint.
     */
    public readonly request = (uri: string): RRequest =>
        new RRequest(uri, this.config, this.fetcher);

    /**
     * Inherits config and creates new client.
     */
    public readonly extend = (config: Partial<RConfig>): RClient => {

        return new RClient({
            ...this.config,
            headers: { ...this.config.headers },
            middlewares: [ ...this.config.middlewares ],
            ...config,
        });
    }

    static builder = () => new RClientBuilder;
}

/**
 * Builder of HTTTP client.
 */
export class RClientBuilder {

    private readonly config: Mutable<RConfig> = { ...defaultConfig };

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
     * Sets `middleware` option.
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