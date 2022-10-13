import { ValidationError } from "express-validator";
import { CustomeError } from "./custom-error";
export class RequestValidationError extends CustomeError{
    statusCode = 400;
    constructor(public errors: ValidationError[]){
        super('invalid req parameter');
        //only because we are extending a built in class
        Object.setPrototypeOf(this,RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map(error => {
            return { message: error.msg, field: error.param };
        });
    }
}

