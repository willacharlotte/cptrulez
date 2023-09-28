const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", (req, res) => {
  res.render("quiz");
});

app.get("/results", (req, res) => {
  res.render("results");
});

app.get("/api/questions", (req, res) => {
  res.json("the questions");
});

app.post("/api/score", (req, res) => {
  res.send("Your score!");
});

app.listen(3000, () => {
  console.log("⚡ App running at https://localhost:3000");
});
