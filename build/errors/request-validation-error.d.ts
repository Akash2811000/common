import { ValidationError } from "express-validator";
import { CustomeError } from "./custom-error";
export declare class RequestValidationError extends CustomeError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        message: any;
        field: string;
    }[];
}
