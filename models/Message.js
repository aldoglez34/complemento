const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: "Nombre requerido",
  },
  email: {
    type: String,
    trim: true,
    required: "Email requerido",
  },
  subject: {
    type: String,
    trim: true,
    required: "Asunto requerido",
  },
  message: {
    type: String,
    trim: true,
    required: "Mensaje requerido",
  },
  seen: {
    type: Boolean,
    default: false,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
