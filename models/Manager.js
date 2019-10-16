const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
