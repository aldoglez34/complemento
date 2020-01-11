const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  grandTotal: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = Purchase;
