"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseConnectionError extends custom_error_1.CustomeError {
    constructor() {
        super('err connecting to db from db err class');
        this.statusCode = 500;
        this.reson = 'error connecting to database';
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{
                message: this.reson
            }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
