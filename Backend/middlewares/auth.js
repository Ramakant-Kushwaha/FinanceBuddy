const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isValidToken = jwt.verify(token, process.env.SECRET_KEY);
    if (isValidToken) {
    } else {
      throw new Error("Unauthorized user");
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized user" });
  }
  next();
};

module.exports = authenticate;
