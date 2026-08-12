import { describe, expect, it } from 'vitest';
import { Encoders } from './encoding';

describe('Encoder tests', async () => {

    it('should get valid encoding value', async () => {

        expect(Encoders.any()).toBe('*');
        expect(Encoders.gzip({ quality: 0.6 })).toBe('gzip;q=0.6');
        expect(Encoders.deflate({ quality: -0.6 })).toBe('deflate;q=0.0');
        expect(Encoders.zstd({ quality: 1.9 })).toBe('zstd;q=1.0');
        expect(Encoders.br({ quality: 0 })).toBe('br;q=0.0');
        expect(Encoders.dcb({ quality: Number.NaN })).toBe('dcb');
        expect(Encoders.dcz({ quality: Number.NEGATIVE_INFINITY })).toBe('dcz');

        const joined = Encoders.join(
            Encoders.gzip(),
            Encoders.deflate({ quality: 0.5 }),
            Encoders.zstd({ quality: 1 }),
        );

        expect(joined).toBe('gzip, deflate;q=0.5, zstd;q=1.0');
    });
});