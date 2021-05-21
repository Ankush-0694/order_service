const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema/schema");
const { buildFederatedSchema } = require("@apollo/federation");

const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema/TestSchema");

const connectDB = require("./config/db");
connectDB();

app.use(cors());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// const apolloServer = new ApolloServer({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
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
