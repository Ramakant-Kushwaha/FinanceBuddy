const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const expenseRoute = require("./routes/categoryRoute");
require("./db/db");

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// To add headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-with,Content-Type,Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS,PUT"
  );
  next();
});

app.use("/api/user", authRoute);
app.use("/api/expense", expenseRoute);

module.exports = app;
