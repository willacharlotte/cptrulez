const express = require("express");
const app = express();
const fs = require("fs");

import { calculateScore } from "./scripts/score";
const questionsData = fs.readFileSync("./static/questions.json", "utf-8");
const questions = JSON.parse(questionsData).questions;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", async (req, res) => {
  res.render("quiz", { questions });
});

app.post("/api/submit", async (req, res) => {
  const score = calculateScore(questions, req.body);
  res.render("results", { score });
});

app.listen(3000, () => {
  console.log("⚡ App running at https://localhost:3000");
});
