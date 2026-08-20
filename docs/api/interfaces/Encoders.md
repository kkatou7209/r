[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / Encoders

# Interface: Encoders

Defined in: [specs/encoding.ts:69](https://github.com/kkatou7209/r/blob/c1bba4adf216edf2ea7a1f4d15fcd5723eae51e6/src/specs/encoding.ts#L69)

Utilities for creating `Accept-Encoding` values.

Gets header values.

```ts
const value = Encoding.gzip();

console.log(value); // => "gzip"
```

```ts
const value = Encoding.zstd({ quality: 0.5 });

console.log(value); // => "zstd;q=0.5"
```

If you want multiple form of `Accept-Encoding` value, use `Encoders.join`.

```
const value = Encoders.join(
     Encoders.gzip(),
     Encoders.deflate({ quality: 0.7 }),
     Encoders.zstd({ quality: 1.6 }),
     Encoders.dcb({ quality: -1 }),
);

console.log(value) // => "gzip, deflate;q=0.7, zstd;q=1.0, dcb;q=0.0"
```
