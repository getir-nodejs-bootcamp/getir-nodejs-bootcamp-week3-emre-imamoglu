const express = require("express");
const app = express();
require('dotenv').config();
const routes = require("./routes/routes");
const { logger } = require("./middlewares/logger");
const {verifyToken} = require('./middlewares/authentication');


app.listen(3000, "", () => {
  console.log("App Started on Port : 3000");
});
app.use(express.json())
app.use(verifyToken); // Use authentication middleware
app.use(logger);
app.use("/", routes);
app.all("*", (req, res) => {
  res.status(404).send("Invalid request");
});

module.exports = {
  app,
};
