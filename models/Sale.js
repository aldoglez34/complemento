const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      qty: {
        type: Number
      },
      salePrice: {
        type: Number
      }
    }
  ],
  subTotal: {
    type: Number,
    required: true
  },
  shipment: {
    type: Number,
    required: true
  },
  grandTotal: {
    type: Number,
    required: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client"
  },
  address: {
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    municipality: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }
  },
  saleDate: {
    type: Date,
    default: Date.now()
  }
});

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
