const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("page loaded");
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
})

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
