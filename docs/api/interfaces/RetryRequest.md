[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RetryRequest

# Interface: RetryRequest

Defined in: [src/retry/request.ts:10](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/request.ts#L10)

Temporary request handler for retry logics.

This class shall be used not to shared conditions between
requests.

## Methods

### trial()

> `readonly` **trial**(`request`): `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Defined in: [src/retry/request.ts:34](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/retry/request.ts#L34)

#### Parameters

##### request

() => [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) \| `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

#### Returns

`Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>
