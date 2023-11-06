const { readFileSync } = require("fs");
const { createServer } = require("http");

const homepage = readFileSync("./index.html")

const server = createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html"});
  res.write(homepage)
  res.end();
})

server.listen(5000, () => {
  console.log('server listening on port 5000')
})