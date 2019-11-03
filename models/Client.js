const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  fullName: {
    name: String,
    firstSurname: String,
    secondSurname: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  phone: {
    type: Number
  },
  favorites: [
    {
      productId: Number
    }
  ],
  address: {
    street: String,
    neighborhood: String,
    municipality: String,
    city: String,
    state: String,
    zipCode: String
  }
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
