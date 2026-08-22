[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RRetryStrategy

# Interface: RRetryStrategy

Defined in: [src/retry/strategy.ts:8](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/strategy.ts#L8)

Strategy of retring.

## Methods

### retriableCodes()

> `readonly` **retriableCodes**(...`codes`): `void`

Defined in: [src/retry/strategy.ts:61](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/strategy.ts#L61)

Sets status codes on which request assumed to be retriable.

#### Parameters

##### codes

...`number`[]

#### Returns

`void`

***

### retryOn()

> `readonly` **retryOn**(`predictor`): `void`

Defined in: [src/retry/strategy.ts:68](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/strategy.ts#L68)

Sets retry predictor.

#### Parameters

##### predictor

[`RRetryPredict`](../type-aliases/RRetryPredict.md)

#### Returns

`void`

***

### trial()

> `readonly` **trial**(`request`): `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: [src/retry/strategy.ts:44](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/strategy.ts#L44)

#### Parameters

##### request

() => [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) \| `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

#### Returns

`Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>
