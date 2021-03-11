"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
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
exports.Condition = mongoose_1.model("Condition", featureSchema);
//# sourceMappingURL=Condition.js.map