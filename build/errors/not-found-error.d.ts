import { CustomeError } from "./custom-error";
export declare class NotFoundError extends CustomeError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
