"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
const mongoose_1 = require("mongoose");
const featureSchema = new mongoose_1.Schema({
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
exports.Feature = mongoose_1.model("Feature", featureSchema);
//# sourceMappingURL=Feature.js.map