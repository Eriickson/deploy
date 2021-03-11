"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const models_1 = require("../../../database/models");
exports.default = {
    Query: {
        getCountries(_) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield models_1.Country.aggregate([
                        {
                            $project: {
                                value: "$_id",
                                label: "$label",
                            },
                        },
                        { $sort: { label: 1 } },
                    ]);
                    return response;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        getProvinces(_, { value }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield models_1.Province.aggregate([
                        {
                            $match: {
                                $and: [
                                    value
                                        ? {
                                            _id: mongoose_1.Types.ObjectId(value),
                                        }
                                        : {},
                                ],
                            },
                        },
                        {
                            $project: {
                                value: "$_id",
                                label: "$label",
                            },
                        },
                        { $sort: { label: 1 } },
                    ]);
                    return response;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        getMunicipalities(_, { provinceId }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield models_1.Municipality.aggregate([
                        {
                            $match: {
                                province: mongoose_1.Types.ObjectId(provinceId),
                            },
                        },
                        {
                            $project: {
                                value: "$_id",
                                label: "$label",
                            },
                        },
                        { $sort: { label: 1 } },
                    ]);
                    return response;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        getSectors(_, { municipalityId }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield models_1.Sector.aggregate([
                        {
                            $match: {
                                municipality: mongoose_1.Types.ObjectId(municipalityId),
                            },
                        },
                        {
                            $project: {
                                value: "$_id",
                                label: "$label",
                            },
                        },
                        { $sort: { label: 1 } },
                    ]);
                    return response;
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
    },
};
//# sourceMappingURL=Ubication.js.map