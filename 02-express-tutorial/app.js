const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

// middleware
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
