const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String,
    trim: true,
    required: "Categoría requerida"
  },
  brand: {
    type: String,
    trim: true,
    required: "Marca requerida"
  },
  name: {
    type: String,
    trim: true,
    required: "Nombre requerido"
  },
  content: {
    type: String,
    trim: true,
    required: "Contenido requerido"
  },
  description: {
    type: String,
    trim: true
  },
  purchasePrice: {
    type: Number,
    required: "Precio de compra requerido"
  },
  salePrice: {
    type: Number,
    required: "Precio de venta requerido"
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
  priority: {
    type: Boolean,
    default: false
  },
  sufferings: [String],
  ingredients: [String],
  discount: { percentage: Number, newPrice: Number },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Provider"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
