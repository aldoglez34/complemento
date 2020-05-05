const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
  products: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      name: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      salePrice: {
        type: Number,
        required: true,
      },
      totalByProduct: {
        type: Number,
        required: true,
      },
    },
  ],
  subTotal: {
    type: Number,
    required: true,
  },
  shipment: {
    type: Number,
    required: true,
  },
  grandTotal: {
    type: Number,
    required: true,
  },
  buyer: {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: false,
    },
    name: { type: String, required: true },
    firstSurname: { type: String, required: true },
    secondSurname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      neighborhood: { type: String, required: true },
      municipality: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
  },
  saleDate: {
    type: Date,
    default: Date.now(),
  },
});

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
