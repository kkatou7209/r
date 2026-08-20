/**
 * HTTP request methods.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods}
 */
export const HttpMethod = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    OPTIONS: 'OPTIONS',
    HEAD: 'HEAD',
});

/**
 * HTTP request method.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods}
 */
export type HttpMethod = typeof HttpMethod;

export type HttpMethodPhrase = typeof HttpMethod[keyof HttpMethod];