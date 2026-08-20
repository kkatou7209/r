[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RetryRequest

# Interface: RetryRequest

Defined in: retry/request.ts:10

Temporary request handler for retry logics.

This class shall be used not to shared conditions between
requests.

## Methods

### trial()

> `readonly` **trial**(`request`): `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: retry/request.ts:34

#### Parameters

##### request

() => [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) \| `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

#### Returns

`Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>
