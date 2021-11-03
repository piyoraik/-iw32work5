"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostValidation = void 0;
const express_validator_1 = require("express-validator");
const userPostValidation = () => {
    return [
        (0, express_validator_1.param)('id').not().isEmpty(),
        (0, express_validator_1.param)('username').not().isEmpty(),
        (0, express_validator_1.param)('email').not().isEmpty(),
        (0, express_validator_1.param)('password').not().isEmpty(),
    ];
};
exports.userPostValidation = userPostValidation;
