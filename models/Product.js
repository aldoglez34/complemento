const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Nombre requerido"
  },
  brand: {
    type: String,
    trim: true,
    required: "Marca requerida"
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
    type: String,
    default: "https://loremflickr.com/190/290"
  },
  priority: {
    type: Boolean,
    default: false
  },
  sufferings: [String],
  ingredients: [String],
  discount: {
    hasDiscount: {
      type: Boolean,
      required: "Descuento requerido (ya sea falso o verdadero)"
    },
    percentage: Number,
    newPrice: Number
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Provider",
    required: "Proveedor inválido"
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: "Categoría inválida"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
