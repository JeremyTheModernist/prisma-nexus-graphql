"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./api/schema");
const context_1 = require("./api/context");
// pass the prisma context in here so your API can access it for db operations
const server = new apollo_server_1.ApolloServer({ schema: schema_1.schema, context: context_1.context });
const port = process.env.PORT || 4001;
server.listen({
    port
}).then(({ url }) => {
    console.log("PROCESS PORT", process.env.DATABASE_URL, process.env);
    console.log(`🚀 Server ready at ${url}`);
});
// the --transpile-only means ts-node won't type check your app when it runs it. necessary to avoid type errors at run time.
//# sourceMappingURL=index.js.map