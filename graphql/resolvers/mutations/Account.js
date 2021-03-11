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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../../../database");
exports.default = {
    Mutation: {
        registerAccount: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const accountFound = yield database_1.Account.findOne({ email: args.email });
                if (accountFound) {
                    if (accountFound.confirmed) {
                        throw Error("Esta cuenta ya está registrada");
                    }
                    else {
                        yield accountFound.updateOne({ code: 999999 });
                        return {
                            title: "Confirmación enviada",
                            message: "Se ha enviado un código a su correo.",
                            typeAlert: "SUCCESS",
                            labelBtnPri: "Ingresar Código",
                        };
                    }
                }
                const newAccount = new database_1.Account({ email: args.email, code: 999999 });
                yield newAccount.save();
                return {
                    title: "Confirmación enviada",
                    message: "Se ha enviado un código a su correo.",
                    typeAlert: "SUCCESS",
                    labelBtnPri: "Ingresar Código",
                };
            }
            catch (err) {
                throw new Error(err);
            }
        }),
        verifyAccount: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, code } = args;
            try {
                // Buscamos la cuenta
                const response = yield database_1.Account.findOne({ email });
                // Verificamos que la cuenta exista
                if (!response)
                    return new Error("Esta cuenta no existe");
                // Verificamos que la cuenta no esté activada
                if (response.confirmed)
                    return new Error("Esta cuenta ya está registrada");
                // Verificamos que el code sea correcto
                if (response.code !== code)
                    return new Error("El código que ha ingresado es inválido");
                const payload = {
                    email,
                    code,
                };
                return jsonwebtoken_1.default.sign(payload, `${process.env.TOKEN_VERIFY_ACCOUNT}`, {
                    expiresIn: "24h",
                });
            }
            catch (err) {
                console.log(err);
            }
        }),
    },
};
//# sourceMappingURL=Account.js.map