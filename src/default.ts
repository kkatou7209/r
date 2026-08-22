import type { RConfig } from '@/config';

/**
 * Default of `RConfig`.
 */
const RDefaultConfig = Object.freeze({
    cache: 'default',
    credentials: 'same-origin',
    headers: {},
    mode: 'same-origin',
    priority: 'auto',
    redirect: 'follow',
    referrer: 'about:client',
    referrerPolicy: 'strict-origin-when-cross-origin',
    middlewares: [],
    retryLimit: 0,
    retriableCodes: [],
    retryInterval: 0,
    timeout: null,
}) satisfies Readonly<RConfig>;

/**
 * @interface
 */
export type RDefaultConfig = typeof RDefaultConfig;

/**
 * Default values of the library.
 */
export const RDefaults = Object.freeze({
    RetryLimit: 3,
    MinRetryLimit: 0,
    RetryIntervalMs: 500,
    MinRetryInterval: 0,
    Config: RDefaultConfig,
});

/**
 * @interface
 */
export type RDefaults = typeof RDefaults;