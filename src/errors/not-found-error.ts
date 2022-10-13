import { CustomeError } from "./custom-error";

export class NotFoundError extends CustomeError {
    statusCode = 404;
    constructor() {
        super('routes not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: 'not found' }];
    }
}

