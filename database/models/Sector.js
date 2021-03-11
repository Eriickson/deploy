"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
const mongoose_1 = require("mongoose");
const sectorSchema = new mongoose_1.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    },
    municipality: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Municipality",
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.Sector = mongoose_1.model("Sector", sectorSchema);
//# sourceMappingURL=Sector.js.map