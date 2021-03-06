const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Provider",
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dose: {
    type: String,
    trim: true,
  },
  ingredients: [{ type: String, trim: true }],
  warning: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    salePrice: {
      type: Number,
      required: true,
    },
    latestPurchasePrice: {
      type: Number,
      required: true,
    },
    discount: {
      hasDiscount: {
        type: Boolean,
        required: true,
        default: false,
      },
      startDate: Date,
      endDate: Date,
      percentage: Number,
      newPrice: Number,
    },
  },
  unitsSold: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  priority: {
    type: Boolean,
    default: false,
    required: true,
  },
  photo: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
