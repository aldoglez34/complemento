const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  firebaseUID: {
    type: String,
    trim: true,
    unique: true,
    required: "UID requerido",
  },
  name: {
    type: String,
    trim: true,
    required: "Nombre requerido",
  },
  firstSurname: {
    type: String,
    trim: true,
    required: "Apellido paterno requerido",
  },
  secondSurname: {
    type: String,
    trim: true,
    required: "Apellido materno requerido",
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Correo requerido",
    match: [/.+@.+\..+/, "Formato de correo inválido"],
  },
});

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
