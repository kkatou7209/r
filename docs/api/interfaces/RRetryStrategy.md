[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RRetryStrategy

# Interface: RRetryStrategy

Defined in: retry/strategy.ts:8

Strategy of retring.

## Methods

### retriableCodes()

> `readonly` **retriableCodes**(...`codes`): `void`

Defined in: retry/strategy.ts:61

Sets status codes on which request assumed to be retriable.

#### Parameters

##### codes

...`number`[]

#### Returns

`void`

***

### retryOn()

> `readonly` **retryOn**(`predictor`): `void`

Defined in: retry/strategy.ts:68

Sets retry predictor.

#### Parameters

##### predictor

[`RRetryPredict`](../type-aliases/RRetryPredict.md)

#### Returns

`void`

***

### trial()

> `readonly` **trial**(`request`): `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: retry/strategy.ts:44

#### Parameters

##### request

() => [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) \| `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

#### Returns

`Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>
