import type { RConfig } from '@/config';

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

export type RDefaultConfig = typeof RDefaultConfig;

export const RDefaults = Object.freeze({
    RetryLimit: 3,
    MinRetryLimit: 0,
    RetryIntervalMs: 500,
    MinRetryInterval: 0,
    Config: RDefaultConfig,
});

export type RDefaults = typeof RDefaults;