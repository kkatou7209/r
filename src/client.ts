import { type RConfig } from '@/config';
import { RRequest } from '@/request';
import { RClientBuilder } from '@/clientBuilder';

/**
 * HTTP client.
 */
export class RClient {

    private readonly _config: RConfig;

    private readonly fetcher: typeof globalThis.fetch;

    constructor(config: RConfig, fetcher?: typeof globalThis.fetch) {
        this._config = config;
        this.fetcher = fetcher ?? fetch;
    }

    /**
     * Prepare request to specified endpoint.
     */
    public readonly request = (uri: string | URL): RRequest =>
        new RRequest(uri, this._config, this.fetcher);

    /**
     * Inherits config and creates new client.
     */
    public readonly extend = (config: Partial<RConfig>): RClient => {

        return new RClient({
            ...this._config,
            headers: { ...this._config.headers },
            middlewares: [ ...this._config.middlewares ],
            ...config,
        });
    }

    static builder = () => new RClientBuilder;
}