const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  address: {
    type: String
  },
  rfc: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String
  }
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;
