const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hommy Page");
});

app.listen(port, () => {
  console.log(`app listen at ${port}`);
});
