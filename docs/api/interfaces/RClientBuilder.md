[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RClientBuilder

# Interface: RClientBuilder

Defined in: [src/clientBuilder.ts:14](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L14)

Builder of HTTTP client.

## Methods

### build()

> `readonly` **build**(): [`RClient`](RClient.md)

Defined in: [src/clientBuilder.ts:156](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L156)

Creates new `RClient` with configured options.

#### Returns

[`RClient`](RClient.md)

***

### cache()

> `readonly` **cache**(`cache`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:23](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L23)

Sets `cache` option.

#### Parameters

##### cache

[`RequestCache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

#### Returns

`RClientBuilder`

***

### credentials()

> `readonly` **credentials**(`credentials`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:31](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L31)

Sets `credentials` option.

#### Parameters

##### credentials

[`RequestCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

#### Returns

`RClientBuilder`

***

### fetchBy()

> `readonly` **fetchBy**(`fetcher`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:148](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L148)

Sets fetch function.

#### Parameters

##### fetcher

(`input`, `init?`) => `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

#### Returns

`RClientBuilder`

***

### header()

> `readonly` **header**(`name`, `value`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:79](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L79)

Sets `headers` option.

#### Parameters

##### name

[`HeaderName`](../type-aliases/HeaderName.md) \| `string` & `object`

##### value

`string`

#### Returns

`RClientBuilder`

***

### headers()

> `readonly` **headers**(`headers`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:87](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L87)

Sets `headers` option.

#### Parameters

##### headers

[`Headers`](../type-aliases/Headers.md)

#### Returns

`RClientBuilder`

***

### middlewares()

> `readonly` **middlewares**(...`middlewares`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:138](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L138)

Sets `middleware` option.

Pre-defined middlewares will be ignored.

#### Parameters

##### middlewares

...([`RRequestMiddleware`](RRequestMiddleware.md) \| [`RResponseMiddleware`](RResponseMiddleware.md))[]

#### Returns

`RClientBuilder`

***

### mode()

> `readonly` **mode**(`mode`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:39](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L39)

Sets `mode` option.

#### Parameters

##### mode

[`RequestMode`](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)

#### Returns

`RClientBuilder`

***

### priority()

> `readonly` **priority**(`priority`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:47](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L47)

Sets `priority` option.

#### Parameters

##### priority

[`RequestPriority`](https://developer.mozilla.org/en-US/docs/Web/API/Request/priority)

#### Returns

`RClientBuilder`

***

### redirect()

> `readonly` **redirect**(`redirect`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:55](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L55)

Sets `priority` option.

#### Parameters

##### redirect

[`RequestRedirect`](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)

#### Returns

`RClientBuilder`

***

### referrer()

> `readonly` **referrer**(`referrer`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:63](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L63)

Sets `referrer` option.

#### Parameters

##### referrer

[`RequestReferrer`](../type-aliases/RequestReferrer.md)

#### Returns

`RClientBuilder`

***

### referrerPolicy()

> `readonly` **referrerPolicy**(`policy`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:71](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L71)

Sets `referrerPolicy` option.

#### Parameters

##### policy

[`RequestReferrePolicy`](../type-aliases/RequestReferrePolicy.md)

#### Returns

`RClientBuilder`

***

### retriableCodes()

> `readonly` **retriableCodes**(`statusCodes`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:96](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L96)

Sets `retriableCodes` option that configures status codes
which request will retry on.

#### Parameters

##### statusCodes

`number`[]

#### Returns

`RClientBuilder`

***

### retryInterval()

> `readonly` **retryInterval**(`interval`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:128](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L128)

Sets `retryInterval` option that configure interval milliseconds
to the next retry.

Minumum value is `0`.

#### Parameters

##### interval

`number`

#### Returns

`RClientBuilder`

***

### retryLimit()

> `readonly` **retryLimit**(`limit`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:117](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L117)

Sets `retryLimit` option that configure maximum retry count of request.

Minumum value is `0`.

#### Parameters

##### limit

`number`

#### Returns

`RClientBuilder`

***

### retryOn()

> `readonly` **retryOn**(`predict`): `RClientBuilder`

Defined in: [src/clientBuilder.ts:107](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/clientBuilder.ts#L107)

Sets `retryOn` option that configures delegate checks if the response is considered as
retriable.

Preceeds `retriableCodes` option.

#### Parameters

##### predict

[`RRetryPredict`](../type-aliases/RRetryPredict.md)

#### Returns

`RClientBuilder`
