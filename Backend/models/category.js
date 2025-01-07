const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  userId: { type: String, required: true },
  isDefault: { type: Boolean },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

module.exports = mongoose.model("category", Category);
