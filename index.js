const express = require("express");

const app = express;

app.length("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("⚡ App running at https://localhost:3000!");
});
