[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RRequest

# Interface: RRequest

Defined in: [src/request.ts:26](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L26)

Handles HTTP requests.

## Accessors

### bodyData

#### Get Signature

> **get** **bodyData**(): `BodyInit` \| `null`

Defined in: [src/request.ts:64](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L64)

##### Returns

`BodyInit` \| `null`

***

### config

#### Get Signature

> **get** **config**(): [`RRequestConfig`](RRequestConfig.md)

Defined in: [src/request.ts:50](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L50)

##### Returns

[`RRequestConfig`](RRequestConfig.md)

***

### endpoint

#### Get Signature

> **get** **endpoint**(): `URL`

Defined in: [src/request.ts:56](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L56)

##### Returns

`URL`

***

### fetcher

#### Get Signature

> **get** **fetcher**(): (`input`, `init?`) => `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: [src/request.ts:46](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L46)

##### Returns

> (`input`, `init?`): `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

###### input

`URL` \| `RequestInfo`

###### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

###### Returns

`Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

***

### middleware

#### Get Signature

> **get** **middleware**(): ([`RRequestMiddleware`](RRequestMiddleware.md) \| [`RResponseMiddleware`](RResponseMiddleware.md))[]

Defined in: [src/request.ts:68](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L68)

##### Returns

([`RRequestMiddleware`](RRequestMiddleware.md) \| [`RResponseMiddleware`](RResponseMiddleware.md))[]

***

### searchParams

#### Get Signature

> **get** **searchParams**(): `URLSearchParams`

Defined in: [src/request.ts:60](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L60)

##### Returns

`URLSearchParams`

***

### timeout

#### Get Signature

> **get** **timeout**(): `number` \| `null`

Defined in: [src/request.ts:72](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L72)

##### Returns

`number` \| `null`

## Methods

### addSignal()

> `readonly` **addSignal**(`signal`): `RRequest`

Defined in: [src/request.ts:273](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L273)

Sets `signal` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### signal

[`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

#### Returns

`RRequest`

***

### body()

> `readonly` **body**(`body`): `RRequest`

Defined in: [src/request.ts:161](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L161)

Sets body data.

#### Parameters

##### body

`BodyInit`

#### Returns

`RRequest`

***

### cache()

> `readonly` **cache**(`cache`): `RRequest`

Defined in: [src/request.ts:204](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L204)

Sets `cache` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### cache

[`RequestCache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

#### Returns

`RRequest`

***

### clearHeaders()

> `readonly` **clearHeaders**(): `RRequest`

Defined in: [src/request.ts:265](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L265)

Clears all headers of [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Returns

`RRequest`

***

### credentials()

> `readonly` **credentials**(`credentials`): `RRequest`

Defined in: [src/request.ts:212](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L212)

Sets `credentials` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### credentials

[`RequestCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

#### Returns

`RRequest`

***

### delete()

> `readonly` **delete**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:131](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L131)

Exceutes DELETE request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### formData()

> `readonly` **formData**(`value`): `RRequest`

Defined in: [src/request.ts:177](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L177)

Sets body data converting JavaScript object into `FormData`.

#### Parameters

##### value

`Record`\<`string`, `any`\>

#### Returns

`RRequest`

***

### get()

> `readonly` **get**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:107](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L107)

Executes GET request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### head()

> `readonly` **head**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:143](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L143)

Exceutes HEAD request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### header()

> `readonly` **header**(`name`, `value`): `RRequest`

Defined in: [src/request.ts:244](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L244)

Sets `headers` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`RRequest`

***

### headers()

> `readonly` **headers**(`headers`): `RRequest`

Defined in: [src/request.ts:252](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L252)

Sets `headers` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`RRequest`

***

### json()

> `readonly` **json**(`value`): `RRequest`

Defined in: [src/request.ts:169](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L169)

Sets body data converting JavaScript value into JSON string.

#### Parameters

##### value

`any`

#### Returns

`RRequest`

***

### keepalive()

> `readonly` **keepalive**(): `RRequest`

Defined in: [src/request.ts:196](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L196)

Sets `keepalive` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Returns

`RRequest`

***

### mode()

> `readonly` **mode**(`mode`): `RRequest`

Defined in: [src/request.ts:220](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L220)

Sets `mode` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### mode

[`RequestMode`](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)

#### Returns

`RRequest`

***

### options()

> `readonly` **options**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:137](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L137)

Exceutes OPTIONS request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### params()

> `readonly` **params**(`params`): `RRequest`

Defined in: [src/request.ts:149](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L149)

Sets URL parameters.

#### Parameters

##### params

`Record`\<`string`, `any`\>

#### Returns

`RRequest`

***

### patch()

> `readonly` **patch**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:125](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L125)

Exceutes PATCH request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### post()

> `readonly` **post**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:113](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L113)

Executes POST request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### priority()

> `readonly` **priority**(`priority`): `RRequest`

Defined in: [src/request.ts:228](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L228)

Sets `priority` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### priority

[`RequestPriority`](https://developer.mozilla.org/en-US/docs/Web/API/Request/priority)

#### Returns

`RRequest`

***

### put()

> `readonly` **put**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [src/request.ts:119](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L119)

Excutes PUT request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### redirect()

> `readonly` **redirect**(`redirect`): `RRequest`

Defined in: [src/request.ts:236](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L236)

Sets `priority` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### redirect

[`RequestRedirect`](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)

#### Returns

`RRequest`

***

### retriableCodes()

> `readonly` **retriableCodes**(`statusCodes`): `RRequest`

Defined in: [src/request.ts:281](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L281)

Sets status codes on which request assumed to be retriable.

#### Parameters

##### statusCodes

`number`[]

#### Returns

`RRequest`

***

### retryOn()

> `readonly` **retryOn**(`predict`): `RRequest`

Defined in: [src/request.ts:292](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/request.ts#L292)

Sets `retryOn` option.

This option sets predictor for checking if the response is considered as
retriable.

#### Parameters

##### predict

[`RRetryPredict`](../type-aliases/RRetryPredict.md)

#### Returns

`RRequest`
