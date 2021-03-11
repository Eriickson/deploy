"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transmission = void 0;
const mongoose_1 = require("mongoose");
const transmissionSchema = new mongoose_1.Schema({
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
exports.Transmission = mongoose_1.model("Transmission", transmissionSchema);
//# sourceMappingURL=Transmission.js.map