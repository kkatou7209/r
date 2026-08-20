import { RDefaults } from '@/default';
import type { RRetryCondition, RRetryPredict } from '@/retry/types';

/**
 * Temporary request handler for retry logics.
 * 
 * This class shall be used not to shared conditions between
 * requests.
 */
export class RetryRequest {

    private codes: Set<number> = new Set;
    
    private predictor: RRetryPredict | null;
    
    private retryLimit: number;

    private retryIntervalMs: number;

    private retryCount: number = 0;

    constructor(
        retriableCodes: number[],
        predictor: RRetryPredict | null,
        retryLimit: number,
        retryIntervalMs: number,
    ) {
        this.codes = new Set(retriableCodes);
        this.predictor = predictor;
        this.retryLimit = retryLimit;
        this.retryIntervalMs = retryIntervalMs;
    }

    readonly trial = async (request: () => Promise<Response> | Response): Promise<Response> => {

        const response = await request();

        // next retry will exceed limit
        if (this.retryLimit <= this.retryCount) {
            return response;
        }

        // meke predictor to decide whether retry or not
        if (this.predictor) {

            const condition: RRetryCondition = {
                response,
                retryCount: this.retryCount,
            }

            const allowedToRetry = await this.predictor(condition);

            if (!allowedToRetry) {
                return response;
            }
        }

        // no retriable codes matched
        if (!this.codes.has(response.status)) {
            return response;
        }

        this.retryCount++;

        return new Promise(resolve => {

            const id = setTimeout(
                () => {
                    clearTimeout(id);
                    resolve(this.trial(request));
                },
                Math.max(this.retryIntervalMs, RDefaults.MinRetryInterval),
            );
        });
    }
}