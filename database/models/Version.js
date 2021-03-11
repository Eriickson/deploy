"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const mongoose_1 = require("mongoose");
const versionSchema = new mongoose_1.Schema({
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
exports.Version = mongoose_1.model("Version", versionSchema);
//# sourceMappingURL=Version.js.map