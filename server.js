const express = require("express");
const app = express();
const cors = require("cors");
const { buildFederatedSchema } = require("@apollo/federation");
const { ApolloServer, gql } = require("apollo-server-express");
const { resolvers } = require("./src/GraphQL");
const { OrderSchema } = require("./src/order/api/schema");
const { AddressSchema } = require("./src/address/api/schema");
const { mergeTypes } = require("merge-graphql-schemas");

const connectDB = require("./config/db");
connectDB();

app.use(cors());

const typeDefs = gql`
  ${mergeTypes([OrderSchema, AddressSchema])}
`;

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs: typeDefs, resolvers: resolvers }]),
  context: ({ req }) => {
    const user = req.headers.user ? JSON.parse(req.headers.user) : null;
    return { user };
  },
});




async function startServer() {
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await app.listen({ port: 4002 });

  console.log(
    `🚀 Order Server ready at http://localhost:4002${apolloServer.graphqlPath}`
  );
}

startServer();
