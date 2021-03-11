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
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../../auth");
exports.default = {
    Mutation: {
        login(_, { email, password }, { models, secret, secret2 }) {
            return __awaiter(this, void 0, void 0, function* () {
                const { refreshToken, token } = yield auth_1.tryLogin({ email, password, models, secret, secret2 });
                return {
                    refreshToken,
                    token,
                };
            });
        },
        refreshTokens(_, { token, refreshToken }, { models, secret, secret2 }) {
            return __awaiter(this, void 0, void 0, function* () {
                const { newToken, newRefreshToken } = yield auth_1.refreshTokens({ token, refreshToken, models, secret, secret2 });
                const response = {
                    token: newToken,
                    refreshToken: newRefreshToken,
                };
                return response;
            });
        },
    },
};
//# sourceMappingURL=Auth.js.map