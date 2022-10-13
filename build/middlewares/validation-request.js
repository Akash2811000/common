"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valiDationRequest = void 0;
const express_validator_1 = require("express-validator");
const request_validation_error_1 = require("../errors/request-validation-error");
const valiDationRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new request_validation_error_1.RequestValidationError(errors.array());
    }
    next();
};
exports.valiDationRequest = valiDationRequest;
