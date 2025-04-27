"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const router_1 = require("@/router");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, '../../views'));
app.get('/', (req, res) => {
    res.render('start');
});
app.get('/form', (req, res) => {
    res.render('form');
});
app.use('/api', router_1.router);
exports.default = app;
