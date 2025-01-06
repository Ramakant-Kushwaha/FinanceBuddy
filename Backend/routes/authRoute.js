require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../models/users");

const router = express.Router();

// User registration
router.post("/signup", async (req, res) => {
  // gathering all the inputs
  const { password, ...rest } = req.body;

  const securePassword = await bcrypt.hash(password, 12);

  const user = new User({ password: securePassword, ...rest });

  try {
    await user.save();
    res.status(201).json({ message: "Thank you for the registration" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// User login
router.get("/login", async (req, res) => {
  // Fetching user from db
  const user = await User.findOne({ email: req.body.email });

  try {
    // Checking that  is a valid user
    const fetchedUser = await bcrypt.compare(req.body.password, user.password);

    if (fetchedUser) {
      // if not a valid user
      if (!user) {
        res.status(401).json({ message: "User not found" });
      }

      //   if a valid user then generate token for it.
      const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRE_IN,
      });

      //   sending token in repose
      res.status(201).json({
        authToken: token,
      });
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(401).json({ message: "User not found" });
  }
  if (!user) {
    res.status(401).json({ message: "User not found" });
  }
});

module.exports = router;
