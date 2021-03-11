"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nationality = void 0;
const mongoose_1 = require("mongoose");
const nationalitySchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Nationality = mongoose_1.model("Nationality", nationalitySchema);
//# sourceMappingURL=Nationality.js.map