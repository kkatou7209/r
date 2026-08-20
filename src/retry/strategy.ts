import { RDefaults } from '@/default';
import type { RRetryPredict } from '@/retry/types';
import { RetryRequest } from '@/retry/request';

/**
 * Strategy of retring.
 */
export class RRetryStrategy {

    private codes: Set<number> = new Set;
    
    private predictor: RRetryPredict | null;
    
    private retryLimit: number;

    private retryIntervalMs: number;

    constructor({
        retriableCodes,
        predictor,
        retryLimit,
        retryIntervalMs,
    }: {
        retriableCodes?: number[] | undefined | null,
        predictor?: RRetryPredict | undefined | null,
        retryLimit?: number | undefined | null,
        retryIntervalMs?: number | undefined | null,
    } = {}) {
        if (retriableCodes) {
            this.codes = new Set(retriableCodes);
        }
        
        this.predictor = predictor ?? null;

        this.retryLimit = retryLimit
            ? Math.max(retryLimit, RDefaults.MinRetryLimit)
            : RDefaults.RetryLimit;
        
        this.retryIntervalMs = retryIntervalMs
            ? Math.max(retryIntervalMs, RDefaults.MinRetryInterval)
            : RDefaults.RetryIntervalMs;
    }

    readonly trial = async (request: () => Promise<Response> | Response): Promise<Response> => {

        const retryRequest = new RetryRequest(
            [...this.codes],
            this.predictor,
            this.retryLimit,
            this.retryIntervalMs
        );

        const response = await retryRequest.trial(request);

        return response;
    }

    /**
     * Sets status codes on which request assumed to be retriable.
     */
    readonly retriableCodes = (...codes: number[]): void => {
        this.codes = new Set(codes);
    }

    /**
     * Sets retry predictor.
     */
    readonly retryOn = (predictor: RRetryPredict): void => {
        this.predictor = predictor;
    }
}