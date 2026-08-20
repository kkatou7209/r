[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RRequest

# Interface: RRequest

Defined in: [request.ts:20](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L20)

Handles HTTP requests.

## Accessors

### bodyData

#### Get Signature

> **get** **bodyData**(): `BodyInit` \| `null`

Defined in: [request.ts:58](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L58)

##### Returns

`BodyInit` \| `null`

***

### config

#### Get Signature

> **get** **config**(): [`RRequestConfig`](../type-aliases/RRequestConfig.md)

Defined in: [request.ts:44](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L44)

##### Returns

[`RRequestConfig`](../type-aliases/RRequestConfig.md)

***

### endpoint

#### Get Signature

> **get** **endpoint**(): `URL`

Defined in: [request.ts:50](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L50)

##### Returns

`URL`

***

### fetcher

#### Get Signature

> **get** **fetcher**(): (`input`, `init?`) => `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: [request.ts:40](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L40)

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

Defined in: [request.ts:62](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L62)

##### Returns

([`RRequestMiddleware`](RRequestMiddleware.md) \| [`RResponseMiddleware`](RResponseMiddleware.md))[]

***

### searchParams

#### Get Signature

> **get** **searchParams**(): `URLSearchParams`

Defined in: [request.ts:54](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L54)

##### Returns

`URLSearchParams`

***

### timeout

#### Get Signature

> **get** **timeout**(): `number` \| `null`

Defined in: [request.ts:66](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L66)

##### Returns

`number` \| `null`

## Methods

### addSignal()

> `readonly` **addSignal**(`signal`): `RRequest`

Defined in: [request.ts:267](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L267)

Sets `signal` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### signal

[`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

#### Returns

`RRequest`

***

### body()

> `readonly` **body**(`body`): `RRequest`

Defined in: [request.ts:155](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L155)

Sets body data.

#### Parameters

##### body

`BodyInit`

#### Returns

`RRequest`

***

### cache()

> `readonly` **cache**(`cache`): `RRequest`

Defined in: [request.ts:198](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L198)

Sets `cache` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### cache

[`RequestCache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

#### Returns

`RRequest`

***

### clearHeaders()

> `readonly` **clearHeaders**(): `RRequest`

Defined in: [request.ts:259](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L259)

Clears all headers of [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Returns

`RRequest`

***

### credentials()

> `readonly` **credentials**(`credentials`): `RRequest`

Defined in: [request.ts:206](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L206)

Sets `credentials` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### credentials

[`RequestCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)

#### Returns

`RRequest`

***

### delete()

> `readonly` **delete**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:125](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L125)

Exceutes DELETE request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### formData()

> `readonly` **formData**(`value`): `RRequest`

Defined in: [request.ts:171](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L171)

Sets body data converting JavaScript object into `FormData`.

#### Parameters

##### value

`Record`\<`string`, `any`\>

#### Returns

`RRequest`

***

### get()

> `readonly` **get**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:101](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L101)

Executes GET request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### head()

> `readonly` **head**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:137](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L137)

Exceutes HEAD request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### header()

> `readonly` **header**(`name`, `value`): `RRequest`

Defined in: [request.ts:238](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L238)

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

Defined in: [request.ts:246](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L246)

Sets `headers` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### headers

`Record`\<`string`, `string`\>

#### Returns

`RRequest`

***

### json()

> `readonly` **json**(`value`): `RRequest`

Defined in: [request.ts:163](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L163)

Sets body data converting JavaScript value into JSON string.

#### Parameters

##### value

`any`

#### Returns

`RRequest`

***

### keepalive()

> `readonly` **keepalive**(): `RRequest`

Defined in: [request.ts:190](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L190)

Sets `keepalive` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Returns

`RRequest`

***

### mode()

> `readonly` **mode**(`mode`): `RRequest`

Defined in: [request.ts:214](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L214)

Sets `mode` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### mode

[`RequestMode`](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)

#### Returns

`RRequest`

***

### options()

> `readonly` **options**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:131](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L131)

Exceutes OPTIONS request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### params()

> `readonly` **params**(`params`): `RRequest`

Defined in: [request.ts:143](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L143)

Sets URL parameters.

#### Parameters

##### params

`Record`\<`string`, `any`\>

#### Returns

`RRequest`

***

### patch()

> `readonly` **patch**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:119](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L119)

Exceutes PATCH request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### post()

> `readonly` **post**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:107](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L107)

Executes POST request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### priority()

> `readonly` **priority**(`priority`): `RRequest`

Defined in: [request.ts:222](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L222)

Sets `priority` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### priority

[`RequestPriority`](https://developer.mozilla.org/en-US/docs/Web/API/Request/priority)

#### Returns

`RRequest`

***

### put()

> `readonly` **put**(): `Promise`\<[`RResponse`](RResponse.md)\>

Defined in: [request.ts:113](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L113)

Excutes PUT request.

#### Returns

`Promise`\<[`RResponse`](RResponse.md)\>

***

### redirect()

> `readonly` **redirect**(`redirect`): `RRequest`

Defined in: [request.ts:230](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L230)

Sets `priority` option to [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).

#### Parameters

##### redirect

[`RequestRedirect`](https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect)

#### Returns

`RRequest`

***

### retriableCodes()

> `readonly` **retriableCodes**(`statusCodes`): `RRequest`

Defined in: [request.ts:275](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L275)

Sets status codes on which request assumed to be retriable.

#### Parameters

##### statusCodes

`number`[]

#### Returns

`RRequest`

***

### retryOn()

> `readonly` **retryOn**(`predict`): `RRequest`

Defined in: [request.ts:286](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/request.ts#L286)

Sets `retryOn` option.

This option sets predictor for checking if the response is considered as
retriable.

#### Parameters

##### predict

[`RRetryPredict`](../type-aliases/RRetryPredict.md)

#### Returns

`RRequest`
