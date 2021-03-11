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
exports.compressImage = exports.optimisePNGImage = exports.optimiseJPEGImages = exports.createWebp = void 0;
const imagemin_1 = __importDefault(require("imagemin"));
const imagemin_webp_1 = __importDefault(require("imagemin-webp"));
const imagemin_pngquant_1 = __importDefault(require("imagemin-pngquant"));
const imagemin_mozjpeg_1 = __importDefault(require("imagemin-mozjpeg"));
function createWebp(input, output, quality) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(input);
        yield imagemin_1.default([input], {
            destination: output,
            plugins: [
                imagemin_webp_1.default({
                    quality,
                }),
            ],
        });
    });
}
exports.createWebp = createWebp;
function convertImageToWebp(filename, quality) {
    return __awaiter(this, void 0, void 0, function* () {
        yield imagemin_1.default([`./images/crop/${filename}`], {
            destination: "./images/compressed/",
            plugins: [
                imagemin_webp_1.default({
                    quality,
                }),
            ],
        });
    });
}
function optimiseJPEGImages(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        imagemin_1.default([`./images/crop/${filename}`], {
            destination: "./images/compressed/",
            plugins: [imagemin_mozjpeg_1.default({ quality: 9 })],
        });
    });
}
exports.optimiseJPEGImages = optimiseJPEGImages;
function optimisePNGImage(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        imagemin_1.default([`./images/cropped/${filename}`], {
            destination: "./images/compressed/",
            plugins: [imagemin_pngquant_1.default({ quality: [65, 80] })],
        });
    });
}
exports.optimisePNGImage = optimisePNGImage;
function compressImage(input) {
    return __awaiter(this, void 0, void 0, function* () {
        convertImageToWebp(input, 75);
    });
}
exports.compressImage = compressImage;
// x25, x250, full
// x25-webp, x250-webp, full-webp
//# sourceMappingURL=compressImage.js.map