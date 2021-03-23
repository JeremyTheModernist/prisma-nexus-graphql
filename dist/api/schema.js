"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const nexus_1 = require("nexus");
const path_1 = require("path");
const types = __importStar(require("./graphql"));
// Generating TypeScript types to give your resolvers complete type safety
// Generating an SDL file
// this will be used as your typeDefs + resolvers schema in Apollo
exports.schema = nexus_1.makeSchema({
    types,
    // outputs types and schema to root folder
    outputs: {
        typegen: path_1.join(__dirname, '..', 'nexus-typegen.ts'),
        schema: path_1.join(__dirname, '..', 'schema.graphql')
    },
    // path to the context file
    contextType: {
        module: path_1.join(__dirname, './context.ts'),
        export: "Context"
    },
    // this is called during the build process to ensure that nexus exits after it generates
    // the SDL and typedefs artifacts
    shouldExitAfterGenerateArtifacts: Boolean(process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION),
});
//# sourceMappingURL=schema.js.map