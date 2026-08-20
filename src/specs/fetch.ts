/**
 * Fetch options of `cache`.
 */
export const CacheOption = Object.freeze({
    Default: 'default',
    ForceCache: 'force-cache',
    NoCache: 'no-cache',
    NoStore: 'no-store',
    OnlyIfCached: 'only-if-cached',
    Reload: 'reload',
}) satisfies Readonly<Record<string, RequestCache>>;

export type CacheOption = typeof CacheOption;

/**
 * Fetch options of `credentials`.
 */
export const CredentialsOption = Object.freeze({
    Include: 'include',
    Omit: 'omit',
    SameOrigin: 'same-origin',
}) satisfies Readonly<Record<string, RequestCredentials>>;

export type CredentialsOption = typeof CredentialsOption;

/**
 * Fetch options of `mode`.
 */
export const ModeOption = Object.freeze({
    SameOrigin: 'same-origin',
    Cors: 'cors',
    NoCors: 'no-cors',
    Navigate: 'navigate',
}) satisfies Readonly<Record<string, RequestMode>>;

export type ModeOption = typeof ModeOption;

/**
 * Fetch options of `priority`.
 */
export const PriorityOption = Object.freeze({
    Auto: 'auto',
    High: 'high',
    Low: 'low',
}) satisfies Readonly<Record<string, RequestPriority>>;

export type PriorityOption = typeof PriorityOption;

/**
 * Fetch options of `redirect`
 */
export const RedirectOption = Object.freeze({
    Follow: 'follow',
    Error: 'error',
    Manual: 'manual',
}) satisfies Readonly<Record<string, RequestRedirect>>;

export type RedirectOption = typeof RedirectOption;

export type RequestReferrer = 'about:client' | (string & {});

/**
 * Fetch options of `referrer`.
 */
export const ReferrerOption = Object.freeze({
    AboutClient: 'about:client',
}) satisfies Readonly<Record<string, RequestReferrer>>;

export type ReferrerOption = typeof ReferrerOption;

/**
 * `referrerPolicy` options. 
 */
export type RequestReferrePolicy =
    'no-referrer' |
    'no-referrer-when-downgrade' |
    'origin' |
    'origin-when-cross-origin' |
    'same-origin' |
    'strict-origin' |
    'strict-origin-when-cross-origin' |
    'unsafe-url';

/**
 * Fetch options of `referrerPolicy`.
 */
export const ReferrerPolicyOption = Object.freeze({
    NoReferrer: 'no-referrer',
    NoReferrerWhenDowngrade: 'no-referrer-when-downgrade',
    Origin: 'origin',
    OriginWhenCrossOrigin: 'origin-when-cross-origin',
    SameOrigin: 'same-origin',
    StrictOrigin: 'strict-origin',
    StrictOriginWhenCrossOrigin: 'strict-origin-when-cross-origin',
    UnsafeUrl: 'unsafe-url',
}) satisfies Readonly<Record<string, RequestReferrePolicy>>;

export type ReferrerPolicyOption = typeof ReferrerPolicyOption;