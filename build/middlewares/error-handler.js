"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomeError) {
        // const formattedErrors = err.errors.map(error => {
        //     return { messa  ge: error.msg, field: error.param };
        // });
        //console.log(err)
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.error(err);
    res.status(400).send({
        errors: [{ message: 'something went wrong' }]
    });
};
exports.errorHandler = errorHandler;
