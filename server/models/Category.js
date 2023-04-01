const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
