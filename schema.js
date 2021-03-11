"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const graphql_tools_1 = require("graphql-tools");
class Schema {
    constructor() {
        this.loadFiles();
        this.merge();
    }
    loadFiles() {
        const typesDefsPath = path_1.default.join(__dirname, "./graphql");
        const resolversPath = path_1.default.join(__dirname, "./graphql");
        this.typesDefsArray = load_files_1.loadFilesSync(typesDefsPath, {
            extensions: ["graphql", "gql"],
        });
        this.resolversArray = load_files_1.loadFilesSync(resolversPath, {
            extensions: ["ts", "js"],
        });
    }
    merge() {
        this.typeDefs = merge_1.mergeTypeDefs(this.typesDefsArray);
        this.resolvers = merge_1.mergeResolvers(this.resolversArray);
    }
    createSchema() {
        return graphql_tools_1.makeExecutableSchema({
            typeDefs: this.typeDefs,
            resolvers: this.resolvers,
        });
    }
}
exports.default = Schema;
//# sourceMappingURL=schema.js.map