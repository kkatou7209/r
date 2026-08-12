import { RConfig } from '@/config';
import { RRequest } from './request';

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
            ...config,
        });
    }
}