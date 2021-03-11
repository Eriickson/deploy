"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const accountSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Debe ingresar su dirección de correo electrónico"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    code: {
        type: String,
        required: true,
    },
    sent: {
        type: String,
        required: true,
        default: `${parseInt(`${Date.now() / 1000}`)}`,
    },
    confirmed: String,
}, { versionKey: false, timestamps: true });
accountSchema.plugin(mongoose_unique_validator_1.default, {
    message: "Lo sentimos pero el {PATH} {VALUE} ya está registrado.",
});
exports.Account = mongoose_1.model("Account", accountSchema);
//# sourceMappingURL=Account.js.map