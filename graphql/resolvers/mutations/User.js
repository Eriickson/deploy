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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../../utils");
const database_1 = require("../../../database");
exports.default = {
    Mutation: {
        registerUser(_, { user }, { headers }) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                const salt = yield bcryptjs_1.default.genSalt(12);
                const { croppedArea, file } = user.profilePicture;
                const profilePicture = yield utils_1.uploadProfilePicture(file.promise, croppedArea);
                try {
                    const payload = jsonwebtoken_1.default.verify(((_a = headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "", `${process.env.TOKEN_VERIFY_ACCOUNT}`);
                    const newUser = new database_1.User({
                        name: user.name,
                        lastname: user.lastname,
                        birthday: user.birthday,
                        nationality: user.nationality,
                        sex: user.sex,
                        direction: {
                            province: user.direction.province,
                            municipality: user.direction.municipality,
                            sector: user.direction.sector,
                        },
                        username: user.username,
                        email: payload.email || "",
                        password: yield bcryptjs_1.default.hash(user.password, salt),
                        profilePicture,
                    });
                    yield newUser.save();
                    const payloadNewToken = {
                        email: payload.email,
                        _id: newUser._id,
                    };
                    const token = jsonwebtoken_1.default.sign(payloadNewToken, `${process.env.TOKEN_VERIFY_ACCOUNT}`, {
                        expiresIn: "8h",
                    });
                    return token;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
    },
};
//# sourceMappingURL=User.js.map