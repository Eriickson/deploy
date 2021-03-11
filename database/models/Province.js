"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const mongoose_1 = require("mongoose");
const provinceSchema = new mongoose_1.Schema({
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
exports.Province = mongoose_1.model("Province", provinceSchema);
//# sourceMappingURL=Province.js.map