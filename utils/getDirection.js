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
exports.getSectors = exports.getMunicipalities = exports.getProvinces = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../database");
function getProvinces() {
    return __awaiter(this, void 0, void 0, function* () {
        const province = yield database_1.Province.aggregate([
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return province;
    });
}
exports.getProvinces = getProvinces;
function getMunicipalities(idProvince) {
    return __awaiter(this, void 0, void 0, function* () {
        const municipalities = yield database_1.Municipality.aggregate([
            {
                $match: { province: mongoose_1.Types.ObjectId(idProvince) },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return municipalities;
    });
}
exports.getMunicipalities = getMunicipalities;
function getSectors(idMunicipalities) {
    return __awaiter(this, void 0, void 0, function* () {
        const sectors = yield database_1.Sector.aggregate([
            {
                $match: { municipality: mongoose_1.Types.ObjectId(idMunicipalities) },
            },
            {
                $addFields: {
                    value: "$_id",
                },
            },
        ]);
        return sectors;
    });
}
exports.getSectors = getSectors;
//# sourceMappingURL=getDirection.js.map