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
exports.cropImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const input = "./images/uploads";
const output = "./images/crop";
function cropImage(filename, cropArea) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Recortando");
        try {
            yield sharp_1.default(path_1.default.join(input, filename))
                .extract({
                width: cropArea.width,
                height: cropArea.height,
                left: cropArea.x,
                top: cropArea.y,
            })
                .toFile(path_1.default.join(output, filename));
        }
        catch (err) {
            console.log("Ha ocurrido un error", err);
        }
    });
}
exports.cropImage = cropImage;
//# sourceMappingURL=cropImage.js.map