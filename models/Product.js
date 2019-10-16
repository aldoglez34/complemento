const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String
  },
  name: {
    type: String
  },
  content: {
    type: String
  },
  description: {
    type: String
  },
  purchasePrice: {
    type: Number
  },
  salePrice: {
    type: Number
  },
  unitsSold: {
    type: Number
  },
  stock: {
    type: Number
  },
  photo: {
    type: String
  },
  brand: {
    type: String
  },
  priority: {
    type: Boolean
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Provider"
  },
  sufferings: [
    {
      name: String
    }
  ],
  ingredients: [
    {
      name: String
    }
  ],
  discounts: [
    {
      percentage: Number,
      newPrice: Number
    }
  ]
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
