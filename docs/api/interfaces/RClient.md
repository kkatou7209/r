[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RClient

# Interface: RClient

Defined in: [client.ts:8](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/client.ts#L8)

HTTP client.

## Methods

### extend()

> `readonly` **extend**(`config`): `RClient`

Defined in: [client.ts:28](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/client.ts#L28)

Inherits config and creates new client.

#### Parameters

##### config

`Partial`\<[`RConfig`](RConfig.md)\>

#### Returns

`RClient`

***

### request()

> `readonly` **request**(`uri`): [`RRequest`](RRequest.md)

Defined in: [client.ts:22](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/client.ts#L22)

Prepare request to specified endpoint.

#### Parameters

##### uri

`string` \| `URL`

#### Returns

[`RRequest`](RRequest.md)
