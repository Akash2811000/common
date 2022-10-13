import { CustomeError } from "./custom-error";

export class NotAuthorizedError extends CustomeError {
    statusCode = 401;
    constructor(){
        super('not authorsed');
        Object.setPrototypeOf(this,NotAuthorizedError.prototype);
    }
    serializeErrors(){
        return [{message : 'not authorsed.......'}]
    }
}