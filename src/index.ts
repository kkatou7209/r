export type { DefaultRConfig, RConfig } from '@/config';
export type { RClient } from '@/client';
export type { RApi } from '@/api';
export { HttpHeader, type HeaderName } from '@/specs/header';
export { HttpMethod } from '@/specs/method';
export { HttpStatus } from '@/specs/status';
export { Encoders, type EncodingOption, AcceptEncoding } from '@/specs/encoding';
export {
    CacheOption,
    CredentialsOption,
    RedirectOption,
} from '@/specs/fetch';

import { r } from '@/api';

export { r };