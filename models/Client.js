const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firebaseUID: {
    type: String,
    trim: true,
    unique: true,
    required: "UID requerido"
  },
  name: {
    type: String,
    trim: true,
    required: "Nombre requerido"
  },
  firstSurname: {
    type: String,
    trim: true,
    required: "Apellido paterno requerido"
  },
  secondSurname: {
    type: String,
    trim: true,
    required: "Apellido materno requerido"
  },
  phone: {
    type: String,
    required: "Teléfono requerido",
    validate: [
      function(input) {
        return input.length === 10;
      },
      "Formato de teléfono inválido"
    ]
  },
  email: {
    type: String,
    unique: true,
    required: "Correo requerido",
    match: [/.+@.+\..+/, "Formato de correo inválido"]
  },
  password: {
    type: String,
    required: "Contraseña requerida",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "La contraseña debe ser mayor a 6 caracteres"
    ]
  },
  address: {
    street: String,
    neighborhood: String,
    municipality: String,
    city: String,
    state: String,
    zipCode: {
      type: String,
      validate: [
        function(input) {
          return input.length === 5;
        },
        "Formato de código postal inválido"
      ]
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      unique: true
    }
  ]
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
