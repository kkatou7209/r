[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / r

# Class: r

Defined in: [api.ts:48](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L48)

Creates client instance with `create` function and request with any method.

```ts
import { r , type RResponse } from '@mitte/r';

const client = r.create();

const response: RResponse = await client
     .request('https://example.com/api/blog')
     .get();
```

You can also create a instance with default configurations.

```ts
import { r , type RResponse } from '@mitte/r';

const client = r.create({
     cache: 'cors',
     credentials: 'include',
});
```

Request with any method.

```ts
client.request('...').get();
client.request('...').post();
client.request('...').put();
client.request('...').patch();
client.request('...').delete();
client.request('...').options();
client.request('...').head();
```

## Constructors

### Constructor

> **new r**(): `r`

#### Returns

`r`

## Properties

### CacheOption

> `readonly` `static` **CacheOption**: [`CacheOption`](../type-aliases/CacheOption.md)

Defined in: [api.ts:53](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L53)

`cache` options of `fetch`.

***

### CredentialsOption

> `readonly` `static` **CredentialsOption**: [`CredentialsOption`](../type-aliases/CredentialsOption.md)

Defined in: [api.ts:63](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L63)

`redirect` options of `fetch`.

***

### Defaults

> `readonly` `static` **Defaults**: [`RDefaults`](../type-aliases/RDefaults.md) = `RDefaults`

Defined in: [api.ts:83](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L83)

Default options of this library.

***

### HttpHeader

> `readonly` `static` **HttpHeader**: [`HttpHeader`](../type-aliases/HttpHeader.md)

Defined in: [api.ts:68](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L68)

HTTP header names.

***

### HttpMethod

> `readonly` `static` **HttpMethod**: `Readonly`\<\{ `DELETE`: `"DELETE"`; `GET`: `"GET"`; `HEAD`: `"HEAD"`; `OPTIONS`: `"OPTIONS"`; `PATCH`: `"PATCH"`; `POST`: `"POST"`; `PUT`: `"PUT"`; \}\>

Defined in: [api.ts:73](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L73)

HTTP meyhod names.

***

### HttpStatus

> `readonly` `static` **HttpStatus**: [`HttpStatus`](../type-aliases/HttpStatus.md)

Defined in: [api.ts:78](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L78)

HTTP status codes.

***

### RedirectOption

> `readonly` `static` **RedirectOption**: [`RedirectOption`](../type-aliases/RedirectOption.md)

Defined in: [api.ts:58](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L58)

`credentials` options of `fetch`.

## Methods

### after()

> `readonly` `static` **after**(`handler`): [`RResponseMiddleware`](../interfaces/RResponseMiddleware.md)

Defined in: [api.ts:153](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L153)

Creates a new middleware to handle response.

#### Parameters

##### handler

[`RResponseMiddlewareHandler`](../type-aliases/RResponseMiddlewareHandler.md)

Callback to handle response.

#### Returns

[`RResponseMiddleware`](../interfaces/RResponseMiddleware.md)

***

### before()

> `readonly` `static` **before**(`handler`): [`RRequestMiddleware`](../interfaces/RRequestMiddleware.md)

Defined in: [api.ts:144](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L144)

Creates a new middleware to handle request.

#### Parameters

##### handler

[`RRequestMiddlewareHandler`](../type-aliases/RRequestMiddlewareHandler.md)

Callback to handle request.

#### Returns

[`RRequestMiddleware`](../interfaces/RRequestMiddleware.md)

***

### builder()

> `readonly` `static` **builder**(): [`RClientBuilder`](../interfaces/RClientBuilder.md)

Defined in: [api.ts:137](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L137)

Creates new HTTP client instance from builder.

Sets config options with methods and call `build()` to
create client.

```ts
import { r } from '@mitte/r';

const client = r.builder()
     .cache('same-origin')
     .credentials('include')
     .header(r.HttpHeader.ContentType, 'application/json')
     .middlewares(
         r.before(request => {
             ...
         }),
         r.after(response => {
             ...
         }),
     )
     .build();
```

#### Returns

[`RClientBuilder`](../interfaces/RClientBuilder.md)

***

### create()

> `readonly` `static` **create**(`config?`, `fetcher?`): [`RClient`](../interfaces/RClient.md)

Defined in: [api.ts:101](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L101)

Creates new HTTP client instance with optional configuration.

The default configuration is defined as [RDefaultConfig](../type-aliases/RDefaultConfig.md) type.

```ts
import { r } from '@mitte/r';

const client = r.create({
     cache: r.CacheOption.NoCache,
});
```

#### Parameters

##### config?

`Partial`\<[`RConfig`](../interfaces/RConfig.md)\>

Client configuration.

##### fetcher?

(`input`, `init?`) => `Promise`\<[`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)\>

Fetch function.

#### Returns

[`RClient`](../interfaces/RClient.md)

***

### delete()

> `readonly` `static` **delete**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:212](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L212)

Requests DELETE with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### get()

> `readonly` `static` **get**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:160](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L160)

Requests GET with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### head()

> `readonly` `static` **head**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:238](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L238)

Requests HEAD with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### options()

> `readonly` `static` **options**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:225](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L225)

Requests OPTIONS with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### patch()

> `readonly` `static` **patch**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:199](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L199)

Requests PATCH with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### post()

> `readonly` `static` **post**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:173](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L173)

Requests POST with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

***

### put()

> `readonly` `static` **put**(`input`, `init?`): `Promise`\<[`RResponse`](../interfaces/RResponse.md)\>

Defined in: [api.ts:186](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/api.ts#L186)

Requests PUT with default options.

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

[`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)

#### Returns

`Promise`\<[`RResponse`](../interfaces/RResponse.md)\>
