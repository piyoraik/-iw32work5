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
const userDB_1 = require("../service/userDB");
const indexRouter = (0, express_1.Router)();
indexRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userDB_1.fetchAll)();
    res.render('index.ejs', {
        users: users.rows,
    });
}));
indexRouter.post('/', function (req, res) {
    res.render('index.ejs', {});
});
indexRouter.get('/page1', function (req, res) {
    res.render('page1.ejs');
});
indexRouter.get('/page2/:user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchUser = (yield (0, userDB_1.fetchOne)(req.params.user));
    console.log(fetchUser);
    const user = fetchUser.response === 200 ? fetchUser.rows[0].username : 'unknown';
    res.render('page2.ejs', {
        user,
    });
}));
module.exports = indexRouter;
