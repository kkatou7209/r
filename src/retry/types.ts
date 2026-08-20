/**
 * Prediction of retring.
 */
export type RRetryPredict = (condition: RRetryCondition) => boolean | Promise<boolean>;

export interface RRetryCondition {
    response: Response;
    retryCount: number;
}