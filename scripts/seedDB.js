const mongoose = require("mongoose");
const models = require("../models");

const uri = process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));

const clients = require("./devdata/clients");
const managers = require("./devdata/managers");
const providers = require("./devdata/providers");
const products = require("./devdata/products");

models.Client.insertMany(clients)
  .then(() => console.log("dev data - clients added"))
  .catch(err => console.log(err));

models.Manager.insertMany(managers)
  .then(() => console.log("dev data - managers added"))
  .catch(err => console.log(err));

models.Provider.insertMany(providers)
  .then(() => console.log("dev data - providers added"))
  .catch(err => console.log(err));

models.Product.insertMany(products)
  .then(() => console.log("dev data - products added"))
  .catch(err => console.log(err));
