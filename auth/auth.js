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
exports.tryLogin = exports.refreshTokens = exports.createTokens = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const lodash_1 = __importDefault(require("lodash"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../database");
const createTokens = ({ user, secret, secret2 }) => __awaiter(void 0, void 0, void 0, function* () {
    const createToken = jsonwebtoken_1.default.sign({ user: lodash_1.default.pick(user, ["id", "isAdmin"]) }, `${process.env.secret}`, {
        expiresIn: "1m",
    });
    const createRefreshToken = jsonwebtoken_1.default.sign({
        user: lodash_1.default.pick(user, "id"),
    }, `${process.env.secret2}`, {
        expiresIn: "7d",
    });
    return Promise.all([createToken, createRefreshToken]);
});
exports.createTokens = createTokens;
const refreshTokens = ({ token, refreshToken, models, secret, secret2 }) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = -1;
    try {
        const { user: { id }, } = jsonwebtoken_1.default.decode(refreshToken);
        userId = id;
    }
    catch (err) {
        return {};
    }
    if (!userId) {
        return {};
    }
    const user = yield database_1.User.findOne({ _id: userId });
    if (!user) {
        return {};
    }
    const refreshSecret = `${process.env.secret2}` + user.password;
    try {
        jsonwebtoken_1.default.verify(refreshToken, refreshSecret);
    }
    catch (err) {
        console.log(err);
        return {};
    }
    const [newToken, newRefreshToken] = yield exports.createTokens({
        user,
        secret: `${process.env.secret}`,
        secret2: refreshSecret,
    });
    console.log(newToken, newRefreshToken);
    return {
        newToken,
        newRefreshToken,
        user,
    };
});
exports.refreshTokens = refreshTokens;
const tryLogin = ({ email, password, models, secret, secret2 }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield database_1.User.findOne({ email });
    if (!user) {
        // user with provided email not found
        throw new Error("Invalid login");
    }
    const valid = yield bcryptjs_1.default.compare(password, user.password);
    if (!valid) {
        // bad password
        throw new Error("Invalid login");
    }
    const [token, refreshToken] = yield exports.createTokens({ user, secret, secret2: secret2 + user.password });
    return {
        token,
        refreshToken,
    };
});
exports.tryLogin = tryLogin;
//# sourceMappingURL=auth.js.map