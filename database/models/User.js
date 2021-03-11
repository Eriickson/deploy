"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    nationality: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Municipality",
    },
    sex: {
        type: String,
        required: true,
    },
    direction: {
        province: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Province",
        },
        municipality: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Municipality",
        },
        sector: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Sector",
        },
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    profilePicture: {
        filename: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: Math.ceil(Date.now() / 1000).toString(),
        },
    },
    contacts: {
        telephoneNumbers: [
            {
                title: String,
                value: String,
            },
        ],
        emails: [
            {
                title: String,
                value: {
                    type: String,
                    required: true,
                    lowercase: true,
                    trim: true,
                },
            },
        ],
    },
    savedPosts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Publication",
        },
    ],
    agencies: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Agency",
        },
    ],
    useType: {
        type: String,
        require: true,
        enum: ["AGENCY", "PERSONAL"],
        default: "PERSONAL",
    },
    inabilitedAt: [
        {
            msg: {
                type: String,
                required: true,
            },
            inabilitedAt: String,
            endsIn: String,
            enabled: String,
        },
    ],
    isDisabled: {
        required: true,
        type: Boolean,
        default: false,
    },
    removedAt: {
        msg: String,
        timestamp: String,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.User = mongoose_1.model("User", UserSchema);
//# sourceMappingURL=User.js.map