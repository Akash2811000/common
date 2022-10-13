import { CustomeError } from "./custom-error";
export class DatabaseConnectionError extends CustomeError{
    statusCode = 500;
    reson = 'error connecting to database'
    constructor(){
        super('err connecting to db from db err class');
        Object.setPrototypeOf(this,DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.reson
        }]
    }
}