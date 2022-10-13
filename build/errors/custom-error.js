"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomeError = void 0;
class CustomeError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomeError.prototype);
    }
}
exports.CustomeError = CustomeError;
