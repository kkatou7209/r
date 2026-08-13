# `R`

`R` is a fetch wrapper library that simplifies common HTTP requests.

## Installation

**npm**

```bash
npm install @mitte/r
```

## Usage

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
import { r } from '@mitte/r';

const client = r.create({
    cache: 'cors',
    credentials: 'include',
});
```

Request with any method.

```ts
client
    .request('...')
    .get();

client
    .request('...')
    .post();

client
    .request('...')
    .put();

client
    .request('...')
    .patch();

client
    .request('...')
    .delete();

client
    .request('...')
    .options();

client
    .request('...')
    .head();
```