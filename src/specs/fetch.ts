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
 * Fetch options of `redirect`
 */
export const RedirectOption = Object.freeze({
    Follow: 'follow',
    Error: 'error',
    Manual: 'manual',
}) satisfies Readonly<Record<string, RequestRedirect>>;

export type RedirectOption = typeof RedirectOption;

