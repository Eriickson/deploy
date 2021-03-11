"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const apolloServer_1 = require("./apollo/apolloServer");
const database_1 = require("./database");
// import { compressImage } from "./config";
const httpServer = http_1.createServer(apolloServer_1.app);
apolloServer_1.apolloServer.applyMiddleware({ app: apolloServer_1.app });
httpServer.listen({ port: process.env.PORT }, () => {
    database_1.startMongoose();
    console.log(`Server: http://localhost:${process.env.PORT}/graphql`);
});
//# sourceMappingURL=index.js.map