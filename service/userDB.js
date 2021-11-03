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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.fetchOne = exports.fetchAll = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../config/config");
const TABLE = 't01_users';
const fetchAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(config_1.dbsetting);
        const sql = `SELECT * FROM ${TABLE}`;
        const [rows] = yield connection.execute(sql);
        return {
            response: 200,
            rows,
        };
    }
    catch (err) {
        return {
            response: 400,
            message: 'Error!',
        };
    }
});
exports.fetchAll = fetchAll;
const fetchOne = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(config_1.dbsetting);
        const sql = `SELECT * FROM ${TABLE} WHERE id = ? LIMIT 1`;
        const [rows] = yield connection.execute(sql, [params]);
        if (Object.keys(rows).length === 0)
            throw 'データが見つかりませんでした。';
        console.log(rows);
        return {
            response: 200,
            rows,
        };
    }
    catch (err) {
        return {
            response: 400,
            message: 'Error!',
        };
    }
});
exports.fetchOne = fetchOne;
const postUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(config_1.dbsetting);
        const sql = `INSERT INTO ${TABLE} (id, username, email, password) VALUES (?, ?, ?, ?)`;
        const [rows] = yield connection.execute(sql, [
            req.id,
            req.username,
            req.email,
            req.password,
        ]);
        return {
            response: 200,
            message: 'Success!!',
        };
    }
    catch (err) {
        return {
            response: 400,
            message: 'Error!',
        };
    }
});
exports.postUser = postUser;
const updateUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(config_1.dbsetting);
        const sql = `UPDATE ${TABLE} SET username = ?, email = ?, password = ? WHERE id = ?`;
        const [rows] = yield connection.execute(sql, [
            req.username,
            req.email,
            req.password,
            req.id,
        ]);
        return {
            response: 200,
            message: 'Success!!',
        };
    }
    catch (err) {
        console.log(err);
        return {
            response: 400,
            message: 'Error!',
        };
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield promise_1.default.createConnection(config_1.dbsetting);
        const sql = `DELETE FROM ${TABLE} WHERE id = ?`;
        const [rows] = yield connection.execute(sql, [id]);
        return {
            response: 200,
            message: 'Success!!',
        };
    }
    catch (err) {
        return {
            response: 400,
            message: 'Error!',
        };
    }
});
exports.deleteUser = deleteUser;
