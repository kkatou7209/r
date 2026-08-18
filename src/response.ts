import { HttpStatus } from '@/specs/status';

/**
 * Wrapper of `Response`. 
 */
export class RResponse {

    private readonly response: Response;

    public get inner(): Response {
        return this.response;
    }

    constructor(response: Response) {
        this.response = response;
    }

    /**
     * Checks whether the status code is in the
     * range of 200-299.
     */
    public get ok(): boolean {
        return this.response.ok;
    }

    /**
     * Gets the status code.
     */
    public get status(): number {
        return this.response.status;
    }

    /**
     * Gets the status message.
     */
    public get statusText(): string {
        return this.response.statusText;
    }

    /**
     * Checks whether or not the response is result of a
     * redirect.
     */
    public get redirected(): boolean {
        return this.response.redirected;
    }

    /**
     * Gets the type of responses.
     */
    public get type(): ResponseType {
        return this.response.type;
    }

    /**
     * Gets requested URL.
     */
    public get url(): string {
        return this.response.url;
    }

    /**
     * Gets body data.
     */
    public get body(): ReadableStream<Uint8Array<ArrayBuffer>> | null {
        return this.response.body;
    }

    /**
     * Checks whether body data are consumed.
     */
    public get bodyUsed(): boolean {
        return this.response.bodyUsed;
    }

    /**
     * Gets body data as `ArrayBuffer`.
     */
    public readonly arrayBuffer = (): Promise<ArrayBuffer> =>
        this.response.arrayBuffer();

    /**
     * Gets body data as `Blob`.
     */
    public readonly blob = (): Promise<Blob> =>
        this.response.blob();

    /**
     * Gets body data as `Uint8Array`.
     */
    public readonly bytes = (): Promise<Uint8Array<ArrayBuffer>> =>
        this.response.bytes();

    /**
     * Gets body data as `FormData`.
     */
    public readonly formData = (): Promise<FormData> =>
        this.response.formData();

    /**
     * Gets body data as encoded `string`.
     */
    public readonly text = (): Promise<string> =>
        this.response.text();

    /**
     * Gets response body parsing from JSON.
     */
    public readonly json = async <T>(): Promise<T> =>
        this.response.json() as Promise<T>;

    /**
     * Checks if status is specified value.
     * 
     * ```ts
     * const response: RResponse = ...;
     * 
     * if (response.statusIs(200)) {
     *      ...
     * }
     * ```
     */
    public readonly statusIs = (status: HttpStatus | (number & {})) =>
        this.status === status;
}