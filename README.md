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

// basic usage
const response: RResponse = await client
    .request('https://example.com/api/blog')
    .get();
```

Pass options to paramter object to configure client.

```ts
import { r } from '@mitte/r';

const client = r.create({
    cache: 'cors',
    credentials: 'include',
});
```

The **Builder Pattern** is also available.

The two configurations bellow are create a client with same configuration.

> For the sake of simplicity, the `headers` option supports only `Record<string, string>` while official one supports multiple types.

```ts
import { r } from '@mitte/r';

const client = t.create({
    cache: 'cors',
    credentials: 'include',
    mode: 'cors',
    priority: 'high',
    redirect: 'manual',
    headers: {
        'Content-Type': 'application/json',
    }
});

const client = r.builder()
    .cache('cors')
    .credentials('include')
    .mode('cors')
    .priority('high')
    .redirect('manual')
    .headers({
        'Content-Type': 'application/json',
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