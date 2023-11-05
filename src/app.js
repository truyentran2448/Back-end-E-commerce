const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res, next) => {
  return res.status(500).json({
    message: "Welcome to shopee",
  });
});

module.exports = app;
