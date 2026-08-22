[**@mitte/r**](../README.md)

***

[@mitte/r](../globals.md) / Encoders

# Interface: Encoders

Defined in: [src/specs/encoding.ts:73](https://github.com/kkatou7209/r/blob/02c8297c6cdcf6efa9828072b519ebde0b663441/src/specs/encoding.ts#L73)

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
