export type RRequestMiddlewareHandler = (request: Request) => Request;

/**
 * Middleware invoked before request executed.
 */
export class RRequestMiddleware {

    private readonly handler: RRequestMiddlewareHandler;

    constructor(handler: RRequestMiddlewareHandler) {
        this.handler = handler;
    }

    public handle = (request: Request): Request => {
        return this.handler(request);
    }
}