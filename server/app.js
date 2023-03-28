require('dotenv').config();
const express = require("express");
const app = express();
const { PORT } = process.env;

const catRoutes = require("./routes");

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/cats", catRoutes);

app.listen(PORT, () => console.log(require("dotenv").config(), `PORT: ${PORT}`));