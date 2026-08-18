import { RConfig } from '@/config';

export const RDefaults = Object.freeze({
    RetryLimit: 3,
    MinRetryLimit: 0,
    RetryIntervalMs: 500,
    MinRetryInterval: 0,
    Config: Object.freeze({
        cache: 'default',
        credentials: 'same-origin',
        headers: {},
        mode: 'same-origin',
        priority: 'auto',
        redirect: 'follow',
        middlewares: [],
        retryLimit: 0,
        retriableCodes: [],
        retryInterval: 0,
        timeout: null,
    }) satisfies Readonly<RConfig>
});