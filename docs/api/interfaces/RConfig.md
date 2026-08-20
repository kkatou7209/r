[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RConfig

# Interface: RConfig

Defined in: [config.ts:19](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L19)

The configuration of a HTTP client.

## Properties

### cache

> `readonly` **cache**: [`RequestCache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

Defined in: [config.ts:26](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L26)

Cache option.

Default is `'deafult'`.

***

### credentials

> `readonly` **credentials**: [`RequestCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

Defined in: [config.ts:33](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L33)

Credentials option.

Deafult is `'same-origin'`.

***

### headers

> `readonly` **headers**: [`Headers`](../type-aliases/Headers.md)

Defined in: [config.ts:40](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L40)

Headers option.

Default is `{}`.

***

### middlewares

> `readonly` **middlewares**: ([`RRequestMiddleware`](RRequestMiddleware.md) \| [`RResponseMiddleware`](RResponseMiddleware.md))[]

Defined in: [config.ts:75](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L75)

Fetch middlewares.

Default is empty.

***

### mode

> `readonly` **mode**: [`RequestMode`](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)

Defined in: [config.ts:47](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L47)

Mode option.

Default is `'same-origin'`.

***

### priority

> `readonly` **priority**: [`RequestPriority`](https://developer.mozilla.org/en-US/docs/Web/API/Request/priority)

Defined in: [config.ts:54](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L54)

Priority option.

Default is `'auto'`.

***

### redirect

> `readonly` **redirect**: [`RequestRedirect`](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)

Defined in: [config.ts:61](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L61)

Redirect option.

Default is `'follow'`.

***

### referrer

> `readonly` **referrer**: [`RequestReferrer`](../type-aliases/RequestReferrer.md)

Defined in: [config.ts:66](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L66)

Referrer option.

***

### referrerPolicy

> `readonly` **referrerPolicy**: [`RequestReferrePolicy`](../type-aliases/RequestReferrePolicy.md)

Defined in: [config.ts:68](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L68)

***

### retriableCodes

> `readonly` **retriableCodes**: `number`[]

Defined in: [config.ts:91](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L91)

Status codes for retring.

Default is `[]`.

***

### retryInterval

> `readonly` **retryInterval**: `number`

Defined in: [config.ts:107](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L107)

Interval milliseconds for next retry.

The interval means between returned response and next retry.

Minumum and default value is `0`.

***

### retryLimit

> `readonly` **retryLimit**: `number`

Defined in: [config.ts:98](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L98)

Maximum retry count.

Minumum and default value is `0`.

***

### retryOn?

> `readonly` `optional` **retryOn?**: [`RRetryPredict`](../type-aliases/RRetryPredict.md)

Defined in: [config.ts:84](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L84)

Delegate checks the response if requets is retriable.

Preceeds `retriableCodes` option.

Default is `undefined`.

***

### timeout

> `readonly` **timeout**: `number` \| `null` \| `undefined`

Defined in: [config.ts:114](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/config.ts#L114)

Request timeout.

Minimum and default value is `null`.
