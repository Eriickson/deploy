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
exports.storeFile = void 0;
const fs_1 = require("fs");
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const storeUpload = ({ stream }) => __awaiter(void 0, void 0, void 0, function* () {
    const id = uuid_1.v4();
    const name = `${id}.jpg`;
    const dir = path_1.default.join(process.cwd(), "./images/uploads/", name);
    // (createWriteStream) writes our file to the images directory
    return new Promise((resolve, reject) => stream
        .pipe(fs_1.createWriteStream(dir))
        .on("finish", () => resolve({ id, dir, filename: name }))
        .on("error", reject));
});
function storeFile(upload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { createReadStream } = upload;
        const stream = createReadStream();
        const file = yield storeUpload({ stream });
        return file;
    });
}
exports.storeFile = storeFile;
//# sourceMappingURL=storeFiles.js.map