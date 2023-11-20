const express = require("express");
const app = express();

let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Pleas provide a name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});





app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Invalid username");
});
app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
