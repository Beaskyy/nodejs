const { readFileSync } = require("fs");
const { createServer } = require("http");

const homepage = readFileSync("./navbar-app/index.html");
const stylesFile = readFileSync("./navbar-app/styles.css");
const logo = readFileSync("./navbar-app/logo.svg");
const menu = readFileSync("./navbar-app/browser-app.js");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylesFile);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
