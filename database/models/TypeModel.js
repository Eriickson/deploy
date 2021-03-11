"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeModel = void 0;
const mongoose_1 = require("mongoose");
const typeModelSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Models",
    },
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Brands",
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.TypeModel = mongoose_1.model("TypeModel", typeModelSchema);
//# sourceMappingURL=TypeModel.js.map