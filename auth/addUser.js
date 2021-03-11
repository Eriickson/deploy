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
exports.addUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("./auth");
const secret = "aslkdjlkaj10830912039jlkoaiuwerasdjflkasd";
const secret2 = "ajsdklfjaskljgklasjoiquw01982310nlksas;sdlkfj";
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = req.headers["x-token"];
    if (token) {
        try {
            const { user } = jsonwebtoken_1.default.verify(token, "");
            req.user = user;
        }
        catch (err) {
            console.log("Entrando");
            const refreshToken = ((_a = req.headers["x-refresh-token"]) === null || _a === void 0 ? void 0 : _a.toString()) || "";
            const newTokens = yield auth_1.refreshTokens({ token, refreshToken, models: "", secret, secret2 });
            if (newTokens.newToken && newTokens.newRefreshToken) {
                res.set("Access-Control-Expose-Headers", "x-token, x-refresh-token");
                res.set("x-token", newTokens.newToken);
                res.set("x-refresh-token", newTokens.newRefreshToken);
            }
            req.user = newTokens.user;
        }
    }
    next();
});
exports.addUser = addUser;
//# sourceMappingURL=addUser.js.map