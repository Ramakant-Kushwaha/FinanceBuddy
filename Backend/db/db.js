const mongoose = require("mongoose");
require("dotenv").config();

//Set up default mongoose connection
const mongoDB = process.env.db_connection;
mongoose
  .connect(mongoDB)
  .then(() => console.log("Db Connected"))
  .catch((error) => console.log("something went wrong", error));

//Get the default connection
const db = mongoose.connection;

module.exports = db;
