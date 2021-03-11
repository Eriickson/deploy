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
const database_1 = require("../../../database");
const utils_1 = require("../../../utils");
exports.default = {
    Query: {
        getUserProfile(_, { idUser }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const userFound = yield database_1.User.aggregate([
                        {
                            $match: {
                                _id: mongoose_1.Types.ObjectId(idUser),
                            },
                        },
                        {
                            $lookup: {
                                from: "provinces",
                                localField: "direction.province",
                                foreignField: "_id",
                                as: "direction.province",
                            },
                        },
                        {
                            $lookup: {
                                from: "municipalities",
                                localField: "direction.municipality",
                                foreignField: "_id",
                                as: "direction.municipality",
                            },
                        },
                        {
                            $lookup: {
                                from: "sectors",
                                localField: "direction.sector",
                                foreignField: "_id",
                                as: "direction.sector",
                            },
                        },
                        // { $unwind: "$direction.nationality" },
                        { $unwind: "$direction.province" },
                        { $unwind: "$direction.municipality" },
                        { $unwind: "$direction.sector" },
                        {
                            $project: {
                                id: 1,
                                profilePicture: 1,
                                name: 1,
                                lastname: 1,
                                username: 1,
                                email: 1,
                                direction: 1,
                                nationality: 1,
                                birthday: 1,
                                sex: 1,
                            },
                        },
                        {
                            $addFields: {
                                id: "$id",
                                profilePicture: {
                                    $concat: [
                                        `${process.env.HOSTING_FILES}`,
                                        "/build",
                                        "$profilePicture.url",
                                        "/resolution/",
                                        "$profilePicture.filename",
                                    ],
                                },
                                "direction.province.value": "$direction.province._id",
                                "direction.municipality.value": "$direction.municipality._id",
                                "direction.sector.value": "$direction.sector._id",
                            },
                        },
                    ]);
                    const provinces = yield utils_1.getProvinces();
                    const municipalities = yield utils_1.getMunicipalities(userFound[0].direction.province._id);
                    const sectors = yield utils_1.getSectors(userFound[0].direction.municipality._id);
                    return {
                        user: userFound[0],
                        provinces,
                        municipalities,
                        sectors,
                    };
                }
                catch (err) {
                    console.log(err);
                }
            });
        },
    },
};
/* , */
//# sourceMappingURL=User.js.map