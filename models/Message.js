const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
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
  },
  sentAt: {
    type: Date,
    default: Date.now()
  }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
