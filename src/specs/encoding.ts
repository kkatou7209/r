/**
 * `Accept-Encoding` header values.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Encoding}
 */
export const AcceptEncoding = Object.freeze({
    Gzip: 'gzip',
    Compress: 'compress',
    Deflate: 'deflate',
    Brotli: 'br',
    Br: 'br',
    ZStandard: 'zstd',
    Zstd: 'zstd',
    Identity: 'identity',
    LZW: 'compress',
    LZ77: 'gzip',
    DictionaryCompressedBrotli: 'dcb',
    DCB: 'dcb',
    DictionaryCompressedZStandard: 'dcz',
    DCZ: 'dcz',
    Any: '*',
    Wildcard: '*',
});

/**
 * `Accept-Encoding` header values.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Encoding}
 */
export type AcceptEncoding = typeof AcceptEncoding[keyof typeof AcceptEncoding];

/**
 * Options of `Accept-Encoding` encoders.
 */
export type EncodingOption = {
    quality: number;
};

/**
 * Utilities for creating `Accept-Encoding` values.
 * 
 * Gets header values.
 * 
 * ```ts
 * const value = Encoding.gzip();
 * 
 * console.log(value); // => "gzip"
 * ```
 * 
 * ```ts
 * const value = Encoding.zstd({ quality: 0.5 });
 * 
 * console.log(value); // => "zstd;q=0.5"
 * ```
 * 
 * If you want multiple form of `Accept-Encoding` value, use `Encoders.join`.
 * 
 * ```
 * const value = Encoders.join(
 *      Encoders.gzip(),
 *      Encoders.deflate({ quality: 0.7 }),
 *      Encoders.zstd({ quality: 1.6 }),
 *      Encoders.dcb({ quality: -1 }),
 * );
 * 
 * console.log(value) // => "gzip, deflate;q=0.7, zstd;q=1.0, dcb;q=0.0"
 * ```
 */
export class Encoders {
    
    /**
     * Gets `Accept-Encoding` value joining multiple encoder values.
     */
    public static readonly join = (...encodings: string[]): string => {
        return encodings.join(', ');
    }

    /**
     * Gets wildcard value.
     */
    public static readonly any = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.Any, options?.quality)
    }

    /**
     * Gets Deflate encoding header value.
     */
    public static readonly gzip = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.Gzip, options?.quality)
    }

    /**
     * Gets Deflate encoding header value.
     */
    public static readonly deflate = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.Deflate, options?.quality)
    }

    /**
     * Gets ZStandard encoding header value.
     */
    public static readonly zstd = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.ZStandard, options?.quality)
    }

    /**
     * Gets Brotli encoding header value.
     */
    public static readonly br = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.Brotli, options?.quality)
    }

    /**
     * Gets Dictionary-Compressed Brotli encoding header value.
     */
    public static readonly dcb = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.DCB, options?.quality)
    }

    /**
     * Gets Dictionary-Compressed ZStandard encoding header value.
     */
    public static readonly dcz = (options?: EncodingOption) => {
        return this.encoding(AcceptEncoding.DCZ, options?.quality)
    }

    private static readonly encoding = (
        encoding: AcceptEncoding,
        quality?: number
    ): string => {

        return typeof quality === 'number' && !Number.isNaN(quality) && Number.isFinite(quality)
            ? `${encoding};q=${Math.min(1, Math.max(0, quality)).toFixed(1)}`
            : encoding;
    }
};