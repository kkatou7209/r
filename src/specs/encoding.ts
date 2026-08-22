/**
 * `Accept-Encoding` header values.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Encoding}
 */
export const AcceptEncodingOption = Object.freeze({
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
 * @interface
 */
export type AcceptEncodingOption = typeof AcceptEncodingOption;

/**
 * `Accept-Encoding` header values.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Accept-Encoding}
 */
export type AcceptEncoding = typeof AcceptEncodingOption[keyof typeof AcceptEncodingOption];

/**
 * Options of `Accept-Encoding` encoders.
 * 
 * @interface
 */
export type EncodingOption = {
    quality: number;
};

/**
 * Accept-Encoding utility.
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
        return this.encoding(
            AcceptEncodingOption.Any,
            options?.quality
        );
    }

    /**
     * Gets Deflate encoding header value.
     */
    public static readonly gzip = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.Gzip,
            options?.quality
        );
    }

    /**
     * Gets Deflate encoding header value.
     */
    public static readonly deflate = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.Deflate,
            options?.quality
        );
    }

    /**
     * Gets ZStandard encoding header value.
     */
    public static readonly zstd = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.ZStandard,
            options?.quality
        );
    }

    /**
     * Gets Brotli encoding header value.
     */
    public static readonly br = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.Brotli,
            options?.quality
        );
    }

    /**
     * Gets Dictionary-Compressed Brotli encoding header value.
     */
    public static readonly dcb = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.DCB,
            options?.quality
        );
    }

    /**
     * Gets Dictionary-Compressed ZStandard encoding header value.
     */
    public static readonly dcz = (options?: EncodingOption) => {
        return this.encoding(
            AcceptEncodingOption.DCZ,
            options?.quality
        );
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