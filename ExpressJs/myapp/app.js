const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/get", (req, res) => {
  res.send("Hello ninja!");
});
app.get("/set", (req, res) => {
  res.send("Hello Someone ok!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
