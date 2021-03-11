"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const auth_1 = require("../auth");
require("dotenv").config();
const app = express_1.default();
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(cors_1.default());
app.use(auth_1.addUser);
app.use(express_1.default.static("images"));
app.use(body_parser_1.default.json({ limit: "10mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "10mb", extended: true }));
exports.default = app;
//# sourceMappingURL=app.js.map