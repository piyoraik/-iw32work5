"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const UserValidation_1 = require("../middleware/UserValidation");
const userDB_1 = require("../service/userDB");
const userRouter = (0, express_1.Router)();
/* /users */
userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbQuery = yield (0, userDB_1.fetchAll)();
    res.send(dbQuery);
}));
userRouter.post('/', (0, UserValidation_1.userPostValidation)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id, username, email, password } = req.body.params;
    const dbQuery = yield (0, userDB_1.postUser)({
        id,
        username,
        email,
        password,
    });
    res.send(dbQuery);
}));
/* /users/:id */
userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params.id;
    const dbQuery = yield (0, userDB_1.fetchOne)(params);
    res.send(dbQuery);
}));
userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username, email, password } = req.body.params;
    const dbQuery = yield (0, userDB_1.updateUser)({
        id,
        username,
        email,
        password,
    });
    res.send(dbQuery);
}));
userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dbQuery = yield (0, userDB_1.deleteUser)(id);
    res.send(dbQuery);
}));
module.exports = userRouter;
