import { CustomeError } from "./custom-error";
export declare class BadRequestError extends CustomeError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}
