export type RedirectOptions = Readonly<Record<string, RequestRedirect>>;

/**
 * Redirect options of `RequestInit`.
 */
export const Redirect: RedirectOptions = Object.freeze({
    Follow: 'follow',
    Error: 'error',
    Manual: 'manual',
});