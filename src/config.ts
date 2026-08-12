import { HeaderName } from '@/specs/header';

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
}

/**
 * Default configuration definition.
 */
export type DefaultRConfig = typeof defaultConfig;

export const defaultConfig = {
    cache: 'default',
    credentials: 'same-origin',
    headers: {},
    mode: 'same-origin',
    priority: 'auto',
    redirect: 'follow',
} as const satisfies RConfig;