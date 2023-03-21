const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      comsole.log(err);
    }
  });
});
