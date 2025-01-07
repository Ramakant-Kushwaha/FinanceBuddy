require("dotenv").config();
const express = require("express");
const Category = require("../models/category");
const authenticate = require("../middlewares/auth");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use(authenticate);

router.get("/get", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.decode(token);
  const User = await Users.findOne({ email: user.email });
  const commonCategories = await Category.find().where({ userId: "" });
  const userCategories = await Category.find({ userId: User._id });

  res.status(200).json({ commonCategories, userCategories });
});

module.exports = router;
