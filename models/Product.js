const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Provider",
    required: "Proveedor inválido"
  },
  category: {
    type: String,
    trim: true,
    required: "Categoría inválida"
  },
  brand: {
    type: String,
    trim: true,
    required: "Marca requerida"
  },
  name: {
    type: String,
    unique: true,
    trim: true,
    required: "Nombre requerido"
  },
  content: {
    type: String,
    trim: true,
    required: "Contenido requerido"
  },
  comments: {
    type: String,
    trim: true
  },
  price: {
    salePrice: {
      type: Number,
      required: "Precio de venta requerido"
    },
    latestPurchasePrice: {
      type: Number,
      required: "Último precio de compra"
    },
    discount: {
      hasDiscount: {
        type: Boolean,
        required: "Descuento requerido (ya sea falso o verdadero)"
      },
      percentage: Number,
      newPrice: Number
    }
  },
  unitsSold: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number
  },
  priority: {
    type: Boolean,
    default: false
  },
  photo: {
    type: String,
    default: "placeholder.jpg"
  },
  sufferings: [{ type: String, trim: true }],
  ingredients: [{ type: String, trim: true }],
  registeredAt: {
    type: Date,
    default: Date.now()
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
