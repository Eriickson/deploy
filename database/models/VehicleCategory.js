"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCategory = void 0;
const mongoose_1 = require("mongoose");
const vehicleCategorySchema = new mongoose_1.Schema({
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
exports.VehicleCategory = mongoose_1.model("VehicleCategory", vehicleCategorySchema);
//# sourceMappingURL=VehicleCategory.js.map