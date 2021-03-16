const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.get("/order", (req, res) => {
  res.send("order service is  in your service");
});

app.listen(4002, () => {
  console.log("server listening to port 4002");
});
