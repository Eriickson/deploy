"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresLogin = exports.adminsOnly = exports.membersOnly = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const requiresRole = (role) => (resolver) => {
    return (parent, args, context, info) => {
        if (context.user && (!role || context.user.role === role)) {
            return resolver(parent, args, Object.assign(Object.assign({}, context), { ping: "pong" }), info);
        }
        else {
            throw new apollo_server_express_1.AuthenticationError("Unauthorized");
        }
    };
};
exports.membersOnly = requiresRole("MEMBER");
exports.adminsOnly = requiresRole("ADMIN");
exports.requiresLogin = requiresRole(null);
//# sourceMappingURL=requiresLogin.js.map