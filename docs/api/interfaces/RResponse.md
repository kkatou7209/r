[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / RResponse

# Interface: RResponse

Defined in: [src/response.ts:6](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L6)

Wrapper of `Response`.

## Accessors

### body

#### Get Signature

> **get** **body**(): `ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\> \| `null`

Defined in: [src/response.ts:68](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L68)

Gets body data.

##### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBuffer`\>\> \| `null`

***

### bodyUsed

#### Get Signature

> **get** **bodyUsed**(): `boolean`

Defined in: [src/response.ts:75](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L75)

Checks whether body data are consumed.

##### Returns

`boolean`

***

### ok

#### Get Signature

> **get** **ok**(): `boolean`

Defined in: [src/response.ts:25](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L25)

Checks whether the status code is in the
range of 200-299.

##### Returns

`boolean`

***

### original

#### Get Signature

> **get** **original**(): [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

Defined in: [src/response.ts:13](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L13)

Gets original response.

##### Returns

[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

***

### redirected

#### Get Signature

> **get** **redirected**(): `boolean`

Defined in: [src/response.ts:47](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L47)

Checks whether or not the response is result of a
redirect.

##### Returns

`boolean`

***

### status

#### Get Signature

> **get** **status**(): `number`

Defined in: [src/response.ts:32](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L32)

Gets the status code.

##### Returns

`number`

***

### statusText

#### Get Signature

> **get** **statusText**(): `string`

Defined in: [src/response.ts:39](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L39)

Gets the status message.

##### Returns

`string`

***

### type

#### Get Signature

> **get** **type**(): `ResponseType`

Defined in: [src/response.ts:54](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L54)

Gets the type of responses.

##### Returns

`ResponseType`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/response.ts:61](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L61)

Gets requested URL.

##### Returns

`string`

## Methods

### arrayBuffer()

> `readonly` **arrayBuffer**(): `Promise`\<`ArrayBuffer`\>

Defined in: [src/response.ts:82](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L82)

Gets body data as `ArrayBuffer`.

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### blob()

> `readonly` **blob**(): `Promise`\<`Blob`\>

Defined in: [src/response.ts:88](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L88)

Gets body data as `Blob`.

#### Returns

`Promise`\<`Blob`\>

***

### bytes()

> `readonly` **bytes**(): `Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

Defined in: [src/response.ts:94](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L94)

Gets body data as `Uint8Array`.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBuffer`\>\>

***

### formData()

> `readonly` **formData**(): `Promise`\<`FormData`\>

Defined in: [src/response.ts:100](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L100)

Gets body data as `FormData`.

#### Returns

`Promise`\<`FormData`\>

***

### json()

> `readonly` **json**\<`T`\>(): `Promise`\<`T`\>

Defined in: [src/response.ts:112](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L112)

Gets response body parsing from JSON.

#### Type Parameters

##### T

`T`

#### Returns

`Promise`\<`T`\>

***

### statusIs()

> `readonly` **statusIs**(`status`): `boolean`

Defined in: [src/response.ts:126](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L126)

Checks if status is specified value.

```ts
const response: RResponse = ...;

if (response.statusIs(200)) {
     ...
}
```

#### Parameters

##### status

[`HttpStatusCode`](../type-aliases/HttpStatusCode.md) \| `number` & `object`

#### Returns

`boolean`

***

### text()

> `readonly` **text**(): `Promise`\<`string`\>

Defined in: [src/response.ts:106](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/response.ts#L106)

Gets body data as encoded `string`.

#### Returns

`Promise`\<`string`\>
