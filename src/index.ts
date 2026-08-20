export type {
    RClient,
} from '@/client';
export type {
    RClientBuilder,
} from '@/clientBuilder';
export type {
    Headers,
    RConfig,
} from '@/config';
export {
    RDefaults,
    type RDefaultConfig,
} from '@/default';
export type {
    RRequestMiddleware,
    RRequestMiddlewareHandler,
} from '@/middlewares/request';
export type {
    RResponseMiddleware,
    RResponseMiddlewareHandler,
} from '@/middlewares/response';
export type {
    RRequest,
    RRequestConfig,
    RRequestInit,
} from '@/request';
export type {
    RResponse,
} from '@/response';
export type {
    RRetryStrategy,
} from '@/retry/strategy';
export type {
    RetryRequest,
} from '@/retry/request';
export type {
    RRetryCondition,
    RRetryPredict
} from '@/retry/types';
export type {
    AcceptEncoding,
    Encoders,
    EncodingOption,
} from '@/specs/encoding';
export type {
    CacheOption,
    CredentialsOption,
    ModeOption,
    PriorityOption,
    RedirectOption,
    ReferrerOption,
    ReferrerPolicyOption,
    RequestReferrePolicy,
    RequestReferrer,
} from '@/specs/fetch';
export type {
    HeaderName,
    HttpHeader,
} from '@/specs/header';
export type {
    HttpMethod,
} from '@/specs/method';
export type {
    HttpStatus,
    HttpStatusCode,
} from '@/specs/status';
export { r } from '@/api';