"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const mongoose_1 = require("mongoose");
const colorSchema = new mongoose_1.Schema({
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
exports.Color = mongoose_1.model("Color", colorSchema);
//# sourceMappingURL=Color.js.map