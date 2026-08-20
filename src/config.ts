import type { HeaderName } from '@/specs/header';
import { RRequestMiddleware } from '@/middlewares/request';
import { RResponseMiddleware } from '@/middlewares/response';
import type { RRetryPredict } from '@/retryStrategy';
import { RDefaults } from '@/default';
import type { RequestReferrePolicy, RequestReferrer } from '@/specs/fetch';

/**
 * HTTP headers
 */
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
     * 
     * Default is `'deafult'`.
     */
    readonly cache: RequestCache;

    /**
     * Credentials option.
     * 
     * Deafult is `'same-origin'`.
     */
    readonly credentials: RequestCredentials;

    /**
     * Headers option.
     * 
     * Default is `{}`.
     */
    readonly headers: Headers;

    /**
     * Mode option.
     * 
     * Default is `'same-origin'`.
     */
    readonly mode: RequestMode;

    /**
     * Priority option.
     * 
     * Default is `'auto'`.
     */
    readonly priority: RequestPriority;

    /**
     * Redirect option.
     * 
     * Default is `'follow'`.
     */
    readonly redirect: RequestRedirect;

    /**
     * Referrer option.
     */
    readonly referrer: RequestReferrer;

    readonly referrerPolicy: RequestReferrePolicy;

    /**
     * Fetch middlewares.
     * 
     * Default is empty.
     */
    readonly middlewares: (RRequestMiddleware | RResponseMiddleware)[];

    /**
     * Delegate checks the response if requets is retriable.
     * 
     * Preceeds `retriableCodes` option.
     * 
     * Default is `undefined`.
     */
    readonly retryOn?: RRetryPredict;

    /**
     * Status codes for retring.
     * 
     * Default is `[]`.
     */
    readonly retriableCodes: number[];

    /**
     * Maximum retry count.
     * 
     * Minumum and default value is `0`.
     */
    readonly retryLimit: number;

    /**
     * Interval milliseconds for next retry.
     * 
     * The interval means between returned response and next retry.
     * 
     * Minumum and default value is `0`.
     */
    readonly retryInterval: number;

    /**
     * Request timeout.
     * 
     * Minimum and default value is `null`.
     */
    readonly timeout: number | undefined | null;
}

/**
 * Default configuration definition.
 */
export type DefaultRConfig = typeof RDefaults.Config;