const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firebaseUID: {
    type: String,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  firstSurname: {
    type: String,
    trim: true,
    required: true,
  },
  secondSurname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      unique: false,
    },
  ],
  address: {
    street: String,
    neighborhood: String,
    municipality: String,
    city: String,
    state: String,
    zipCode: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
