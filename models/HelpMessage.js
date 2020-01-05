const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HelpMessageSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "Nombre requerido"
  },
  email: {
    type: String,
    trim: true,
    required: "Email requerido"
  },
  message: {
    type: String,
    trim: true,
    required: "Mensaje requerido"
  }
});

const HelpMessage = mongoose.model("HelpMessage", HelpMessageSchema);

module.exports = HelpMessage;
