const express = require("express");
const app = express();
const routes = require("./routes/routes");
const { logger } = require("./middlewares/logger");

app.listen(3000, "", () => {
  console.log("App Started on Port : 3000");
});

app.use(logger);
app.use("/", routes);
app.all("*", (req, res) => {
  res.status(404).send("Invalid request");
});

module.exports = {
  app,
};
