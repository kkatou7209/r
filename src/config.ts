import { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from './middlewares/request';
import { RResponseMiddleware } from './middlewares/response';

export type Headers = {
    [K in HeaderName]?: string;
} & {
    [key: string]: string;
}

/**
 * The configuration of a HTTP client.
 */
export interface RConfig {
    
    /**
     * Cache option.
     */
    readonly cache: RequestCache;

    /**
     * Credentials option.
     */
    readonly credentials: RequestCredentials;

    /**
     * Headers option.
     */
    readonly headers: Headers;

    /**
     * Mode option.
     */
    readonly mode: RequestMode;

    /**
     * Priority option.
     */
    readonly priority: RequestPriority;

    /**
     * Redirect option.
     */
    readonly redirect: RequestRedirect;

    /**
     * Fetch middlewares.
     */
    readonly middlewares: (RRequestMiddleware | RResponseMiddleware)[];
}

/**
 * Default configuration definition.
 */
export type DefaultRConfig = typeof defaultConfig;

export const defaultConfig: Readonly<RConfig> = Object.freeze({
    cache: 'default',
    credentials: 'same-origin',
    headers: {},
    mode: 'same-origin',
    priority: 'auto',
    redirect: 'follow',
    middlewares: [],
});