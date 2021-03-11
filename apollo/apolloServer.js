"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloServer = exports.app = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const graphql_upload_1 = require("graphql-upload");
const app_1 = __importDefault(require("../config/app"));
exports.app = app_1.default;
// Importamos el schema
const schema_1 = __importDefault(require("../schema"));
app_1.default.use(graphql_upload_1.graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }));
// Creamos el servidor de apollo
const apolloServer = new apollo_server_express_1.ApolloServer({
    uploads: false,
    schema: new schema_1.default().createSchema(),
    introspection: true,
    playground: true,
    context: ({ req }) => {
        return {
            headers: req.headers,
        };
    },
});
exports.apolloServer = apolloServer;
//# sourceMappingURL=apolloServer.js.map