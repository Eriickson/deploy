"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Included = void 0;
const mongoose_1 = require("mongoose");
const includedSchema = new mongoose_1.Schema({
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
exports.Included = mongoose_1.model("Included", includedSchema);
//# sourceMappingURL=Included.js.map