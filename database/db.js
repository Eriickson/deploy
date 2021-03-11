"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
function startMongoose() {
    mongoose_1.default
        .connect(`${process.env.URI_MONGODB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
        .then(() => {
        console.log("Conectada");
    })
        .catch(err => {
        console.log("Error al conectar: ", err);
    });
}
exports.startMongoose = startMongoose;
//# sourceMappingURL=db.js.map