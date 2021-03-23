import {ApolloServer} from 'apollo-server'
import {schema} from './api/schema';
import {context, Context} from './api/context'

// pass the prisma context in here so your API can access it for db operations
const server = new ApolloServer({schema, context});

server.listen({
  port: process.env.PORT || 3300
}).then(({ url }) => {
    console.log("PROCESS PORT", process.env.DATABASE_URL)
    console.log(`🚀 Server ready at ${url}`)
  })

  // the --transpile-only means ts-node won't type check your app when it runs it. necessary to avoid type errors at run time.