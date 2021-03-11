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
exports.getTypeModel = exports.getIncludeds = exports.getModels = exports.getBrands = exports.getVehicleCategories = exports.getVersions = exports.getTransmissions = exports.getTractions = exports.getConditions = exports.getColors = exports.getFuels = exports.getFeatures = exports.getAccessories = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../database");
function getAccessories() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Accessory.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getAccessories = getAccessories;
function getFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Feature.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getFeatures = getFeatures;
function getFuels() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Fuel.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getFuels = getFuels;
function getColors() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Color.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getColors = getColors;
function getConditions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Condition.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getConditions = getConditions;
function getTractions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Traction.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getTractions = getTractions;
function getTransmissions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Transmission.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getTransmissions = getTransmissions;
function getVersions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Version.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getVersions = getVersions;
function getVehicleCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.VehicleCategory.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getVehicleCategories = getVehicleCategories;
function getBrands() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Brand.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getBrands = getBrands;
function getModels() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Model.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getModels = getModels;
function getIncludeds() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.Included.aggregate([
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return response;
    });
}
exports.getIncludeds = getIncludeds;
function getTypeModel(idModel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.TypeModel.aggregate([
            {
                $match: {
                    model: mongoose_1.Types.ObjectId(idModel),
                },
            },
            {
                $sort: {
                    label: 1,
                },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        console.log(response);
        return response;
    });
}
exports.getTypeModel = getTypeModel;
//# sourceMappingURL=getListDatabase.js.map