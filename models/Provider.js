const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: "Nombre requerido"
  },
  address: {
    type: String,
    trim: true
  },
  rfc: {
    type: String,
    trim: true,
    validate: [
      function(input) {
        return input.length === 12;
      },
      "Fomato de RFC inválido"
    ]
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Correo requerido",
    match: [/.+@.+\..+/, "Formato de correo inválido"]
  },
  phone: {
    type: String,
    trim: true,
    validate: [
      function(input) {
        return input.length === 10;
      },
      "Formato de teléfono inválido"
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;
