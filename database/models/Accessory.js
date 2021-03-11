"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessory = void 0;
const mongoose_1 = require("mongoose");
const accessorySchema = new mongoose_1.Schema({
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
exports.Accessory = mongoose_1.model("Accessory", accessorySchema);
//# sourceMappingURL=Accessory.js.map