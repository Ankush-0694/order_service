const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const connectDB = require("./config/db");
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/order", (req, res) => {
  res.send("order service is  in your service");
});

app.listen(4002, () => {
  console.log("server listening to port 4002");
});
