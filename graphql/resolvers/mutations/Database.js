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
const models_1 = require("../../../database/models");
exports.default = {
    Mutation: {
        addAccessories(_, { newAccessories }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newAccessories.map((accesory) => __awaiter(this, void 0, void 0, function* () {
                        const newAccesory = new models_1.Accessory({
                            label: accesory.label,
                        });
                        return yield newAccesory.save();
                    })));
                    return "Accesorios agregados";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addFuels(_, { newFuels }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newFuels.map((fuel) => __awaiter(this, void 0, void 0, function* () {
                        const newFuel = new models_1.Fuel({
                            label: fuel.label,
                        });
                        return yield newFuel.save();
                    })));
                    return "Accesorios agregados";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addFeatures(_, { newFeatures }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newFeatures.map((feature) => __awaiter(this, void 0, void 0, function* () {
                        const newFuel = new models_1.Feature({
                            label: feature.label,
                        });
                        return yield newFuel.save();
                    })));
                    return "Características agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addColors(_, { newColors }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newColors.map((color) => __awaiter(this, void 0, void 0, function* () {
                        const newFuel = new models_1.Color({
                            label: color.label,
                        });
                        return yield newFuel.save();
                    })));
                    return "Características agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addConditions(_, { newConditions }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newConditions.map((color) => __awaiter(this, void 0, void 0, function* () {
                        const newFuel = new models_1.Condition({
                            label: color.label,
                        });
                        return yield newFuel.save();
                    })));
                    return "Condiciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addTractions(_, { newTractions }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newTractions.map((color) => __awaiter(this, void 0, void 0, function* () {
                        const newTractions = new models_1.Traction({
                            label: color.label,
                        });
                        return yield newTractions.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addTransmissions(_, { newTransmissions }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newTransmissions.map((color) => __awaiter(this, void 0, void 0, function* () {
                        const newTransmissions = new models_1.Transmission({
                            label: color.label,
                        });
                        return yield newTransmissions.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addVehicleCategories(_, { newVehicleCategories }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newVehicleCategories.map((vehicleCategory) => __awaiter(this, void 0, void 0, function* () {
                        const newVehicleCategories = new models_1.VehicleCategory({
                            label: vehicleCategory.label,
                        });
                        return yield newVehicleCategories.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addBrands(_, { newBrands }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newBrands.map((vehicleCategory) => __awaiter(this, void 0, void 0, function* () {
                        const newBrands = new models_1.Brand({
                            label: vehicleCategory.label,
                        });
                        return yield newBrands.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addModels(_, { newModels }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newModels.map((model) => __awaiter(this, void 0, void 0, function* () {
                        const newModels = new models_1.Model({
                            label: model.label,
                            brand: model.brand,
                        });
                        return yield newModels.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addProvinces(_, { newProvinces }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newProvinces.map((province) => __awaiter(this, void 0, void 0, function* () {
                        const newProvinces = new models_1.Province({
                            label: province.label,
                        });
                        return yield newProvinces.save();
                    })));
                    return "Traciones agregadas";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addSectors(_, { newSectors }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newSectors.map((sector) => __awaiter(this, void 0, void 0, function* () {
                        const newSector = new models_1.Sector({
                            label: sector.label,
                            municipality: sector.municipality,
                        });
                        return yield newSector.save();
                    })));
                    return "Sectores agregados";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addIncluded(_, { newIncluded }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newIncluded.map((included) => __awaiter(this, void 0, void 0, function* () {
                        const newIncluded = new models_1.Included({
                            label: included.label,
                        });
                        return yield newIncluded.save();
                    })));
                    return "Añadidos agregados";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
        addTypeModel(_, { newTypeModel }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Promise.all(newTypeModel.map((included) => __awaiter(this, void 0, void 0, function* () {
                        const newTypeModel = new models_1.TypeModel({
                            label: included.label,
                            model: included.model,
                            brand: included.brand,
                        });
                        return yield newTypeModel.save();
                    })));
                    return "Tipos de modelos agregados";
                }
                catch (err) {
                    throw new Error(err);
                }
            });
        },
    },
};
//# sourceMappingURL=Database.js.map