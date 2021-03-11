"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
exports.default = {
    Query: {
        templates: config_1.membersOnly((_, __, { ping }) => {
            console.log(ping);
            console.log("Hola a todo el mundo");
        }),
    },
};
//# sourceMappingURL=Authentication.js.map