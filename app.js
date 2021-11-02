"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./router/users"));
var router_1 = __importDefault(require("./router"));
var config_1 = require("./config");
var app = (0, express_1.default)();
app.set('view engin', 'ejs');
app.use(express_1.default.static(__dirname + '/public', { index: false }));
app.use(express_1.default.static(__dirname + '/views', { index: false }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routing
app.use('/', router_1.default);
app.use('/users', users_1.default);
// Listen
app.listen(config_1.port);
