"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traction = void 0;
const mongoose_1 = require("mongoose");
const tractionSchema = new mongoose_1.Schema({
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
exports.Traction = mongoose_1.model("Traction", tractionSchema);
//# sourceMappingURL=Traction.js.map