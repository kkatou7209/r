export type { DefaultRConfig, RConfig } from '@/config';
export type { RClient } from '@/client';
export type { RApi } from '@/api';
export { HttpHeader, type HeaderName } from '@/specs/header';
export { Redirect, type RedirectOptions } from '@/specs/redirect';
export { HttpMethod } from '@/specs/method';
export { HttpStatus } from '@/specs/status';
export { Encoders, type EncodingOption, AcceptEncoding } from '@/specs/encoding';

import { r } from '@/api';

export { r };