"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const mongoose_1 = require("mongoose");
const modelSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Brands",
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Model = mongoose_1.model("Model", modelSchema);
//# sourceMappingURL=Model.js.map