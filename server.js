const express = require("express");
const app = express();
const cors = require("cors");
const { buildFederatedSchema } = require("@apollo/federation");
const { ApolloServer, gql } = require("apollo-server");
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
});

const port = 5001;

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`Apollo Server ready at url ${url}`);
});

app.get("/order", (req, res) => {
  res.send("order service is  in your service");
});

app.listen(4002, () => {
  console.log("server listening to port 4002");
});
