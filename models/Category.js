const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: "Nombre requerido"
  }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
