[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RRequestInit

# Interface: RRequestInit

Defined in: [src/request.ts:14](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L14)

## Properties

### body?

> `optional` **body?**: `BodyInit` \| `null`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2554

A BodyInit object or null to set request's body.

***

### cache?

> `optional` **cache?**: [`RequestCache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2556

A string indicating how the request will interact with the browser's cache to set request's cache.

***

### credentials?

> `optional` **credentials?**: [`RequestCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2558

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

***

### headers

> **headers**: HeadersInit \| undefined & `Record`\<`string`, `string`\>

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2560

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

***

### integrity?

> `optional` **integrity?**: `string`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2562

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

***

### keepalive?

> `optional` **keepalive?**: `boolean`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2564

A boolean to set request's keepalive.

***

### method?

> `optional` **method?**: `string`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2566

A string to set request's method.

***

### mode?

> `optional` **mode?**: [`RequestMode`](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2568

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

***

### priority?

> `optional` **priority?**: [`RequestPriority`](https://developer.mozilla.org/en-US/docs/Web/API/Request/priority)

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2569

***

### redirect?

> `optional` **redirect?**: [`RequestRedirect`](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2571

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

***

### referrer?

> `optional` **referrer?**: `string`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2573

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

***

### referrerPolicy?

> `optional` **referrerPolicy?**: `ReferrerPolicy`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2575

A referrer policy to set request's referrerPolicy.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) \| `null`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2577

An AbortSignal to set request's signal.

***

### window?

> `optional` **window?**: `null`

Defined in: tooling/node\_modules/typescript/lib/lib.dom.d.ts:2579

Can only be null. Used to disassociate request from any Window.
