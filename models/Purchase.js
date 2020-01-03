const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  totalProducts: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true
  },
  address: {
    street: String,
    neighborhood: String,
    municipality: String,
    city: String,
    state: String,
    zipCode: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;
