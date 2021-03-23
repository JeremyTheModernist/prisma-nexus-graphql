"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQLDate = void 0;
const graphql_iso_date_1 = require("graphql-iso-date");
const nexus_1 = require("nexus");
exports.GQLDate = nexus_1.asNexusMethod(graphql_iso_date_1.GraphQLDate, 'date');
//# sourceMappingURL=Date.js.map