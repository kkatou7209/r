// @ts-nocheck
import { describe, expect, it } from 'vitest';
import { RRetryStrategy } from '@/retry/strategy';

describe('RRetryStrategy tests', async () => {

    it('should retry by specified count', async () => {

        const retry = new RRetryStrategy({
            retriableCodes: [400],
            retryLimit: 10,
            retryIntervalMs: 0,
        });

        let requestCount = 0;

        await retry.trial(async () => {

            requestCount++;

            return new Response(null, { status: 400, });
        });

        // total request count = first request (1) + retry (10)
        expect(requestCount).toBe(11);
    }, );

    it('should retry after specified interval', async () => {

        const interval = 500;

        const marginForwared = interval - 10;
        const marginBackward = interval + 10;

        const retry = new RRetryStrategy({
            retriableCodes: [400],
            retryLimit: 5,
            retryIntervalMs: interval,
        });

        const timestamps: number[] = [];

        await retry.trial(async () => {

            timestamps.push(performance.now());

            return new Response(null, { status: 400, });
        });

        expect(timestamps[1] - timestamps[0]).toBeGreaterThanOrEqual(marginForwared);
        expect(timestamps[1] - timestamps[0]).toBeLessThan(marginBackward);

        expect(timestamps[2] - timestamps[1]).toBeGreaterThanOrEqual(marginForwared);
        expect(timestamps[2] - timestamps[1]).toBeLessThan(marginBackward);

        expect(timestamps[3] - timestamps[2]).toBeGreaterThanOrEqual(marginForwared);
        expect(timestamps[3] - timestamps[2]).toBeLessThan(marginBackward);

        expect(timestamps[4] - timestamps[3]).toBeGreaterThanOrEqual(marginForwared);
        expect(timestamps[4] - timestamps[3]).toBeLessThan(marginBackward);

        expect(timestamps[5] - timestamps[4]).toBeGreaterThanOrEqual(marginForwared);
        expect(timestamps[5] - timestamps[4]).toBeLessThan(marginBackward);
    });
}, 7000);