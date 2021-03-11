"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
const mongoose_1 = require("mongoose");
const fuelSchema = new mongoose_1.Schema({
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
exports.Fuel = mongoose_1.model("Fuel", fuelSchema);
//# sourceMappingURL=Fuel.js.map