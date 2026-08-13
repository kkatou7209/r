export type RResponseMiddlewareHandler = (response: Response) => Response;

/**
 * Middleware invoked before response returned.
 */
export class RResponseMiddleware {

    private readonly handler: RResponseMiddlewareHandler;
    
    constructor(handler: RResponseMiddlewareHandler) {
        this.handler = handler;
    }

    public handle = (response: Response): Response => {
        return this.handler(response);
    }
}