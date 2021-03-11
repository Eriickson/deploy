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
const utils_1 = require("../../../utils");
exports.default = {
    Query: {
        getAccesories() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getAccessories();
                return response;
            });
        },
        getFeatures() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getFeatures();
                return response;
            });
        },
        getFuels() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getFuels();
                return response;
            });
        },
        getColors() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getColors();
                return response;
            });
        },
        getConditions() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getConditions();
                return response;
            });
        },
        getTractions() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getTractions();
                return response;
            });
        },
        getTransmissions() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getTransmissions();
                return response;
            });
        },
        getVersions() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getVersions();
                return response;
            });
        },
        getVehicleCategories() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getVehicleCategories();
                return response;
            });
        },
        getBrands() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getBrands();
                return response;
            });
        },
        getModels() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getModels();
                return response;
            });
        },
        getIncludeds() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getIncludeds();
                return response;
            });
        },
        getTypeModel(_, { idModel }) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield utils_1.getTypeModel(idModel);
                return response;
            });
        },
    },
};
//# sourceMappingURL=Data.js.map