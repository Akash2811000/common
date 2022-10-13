import { CustomeError } from "./custom-error";
export declare class DatabaseConnectionError extends CustomeError {
    statusCode: number;
    reson: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
