const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
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
  email: {
    type: String,
    unique: true,
    required: "Correo requerido",
    match: [/.+@.+\..+/, "Formato de correo inválido"]
  },
  password: {
    type: String,
    required: "Contraseña requerida"
  }
});

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
