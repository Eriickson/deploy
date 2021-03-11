"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFile = void 0;
const fs_1 = __importDefault(require("fs"));
function moveFile({ oldPath, newPath, callback }) {
    fs_1.default.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === "EXDEV") {
                copy();
            }
            else {
                if (callback)
                    callback(err);
            }
            return 0;
        }
    });
    function copy() {
        const readStream = fs_1.default.createReadStream(oldPath);
        const writeStream = fs_1.default.createWriteStream(newPath);
        if (callback) {
            readStream.on("error", callback);
            writeStream.on("error", callback);
        }
        readStream.on("close", function () {
            if (callback)
                fs_1.default.unlink(oldPath, callback);
        });
        readStream.pipe(writeStream);
    }
}
exports.moveFile = moveFile;
//# sourceMappingURL=moveFile.js.map