"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Municipality = void 0;
const mongoose_1 = require("mongoose");
const municipalitySchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    province: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Province",
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Municipality = mongoose_1.model("Municipality", municipalitySchema);
//# sourceMappingURL=Municipality.js.map