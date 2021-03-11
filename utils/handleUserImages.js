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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProfilePicture = void 0;
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
const profilePictureSize = [
    {
        width: 50,
        folder: "x50",
        webp: true,
    },
    {
        width: 250,
        folder: "x250",
        webp: true,
    },
];
function uploadProfilePicture(file, croppedArea) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileCreated = yield file;
        try {
            // Almacenamos la imagen
            const { filename } = yield config_1.storeFile(fileCreated);
            // Recortamos la imagen
            yield config_1.cropImage(filename, croppedArea);
            // Comprimimos todas las imágenes
            yield Promise.all([
                profilePictureSize.map(({ width, folder }) => __awaiter(this, void 0, void 0, function* () {
                    const input = path_1.default.join("./images/crop", filename);
                    const output = path_1.default.join("./images/build/user/profile", folder, filename);
                    yield config_1.optimiseJPEGImages(filename);
                    yield config_1.resizeImage(input, width, output);
                    yield config_1.createWebp(`./images/build/user/profile/${folder}/${filename}`, `./images/build/user/profile/${folder}`);
                })),
            ]);
            return {
                filename,
                url: "/user/profile",
            };
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    });
}
exports.uploadProfilePicture = uploadProfilePicture;
//# sourceMappingURL=handleUserImages.js.map