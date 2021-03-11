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
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAdmin = exports.requiresAuth = void 0;
const createResolver = (resolver) => {
    const baseResolver = resolver;
    baseResolver.createResolver = (childResolver) => {
        const newResolver = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            yield resolver(parent, args, context, info);
            return childResolver(parent, args, context, info);
        });
        return createResolver(newResolver);
    };
    return baseResolver;
};
exports.requiresAuth = createResolver((parent, args, context) => {
    if (!context.user || !context.user.id) {
        throw new Error("Not authenticated");
    }
});
exports.requiresAdmin = exports.requiresAuth.createResolver((parent, args, context) => {
    if (!context.user.isAdmin) {
        throw new Error("Requires admin access");
    }
});
//# sourceMappingURL=permissions.js.map