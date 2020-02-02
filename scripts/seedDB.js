const mongoose = require("mongoose");
const models = require("../models");
const clients = require("./devdata/clients");
const managers = require("./devdata/managers");
const providers = require("./devdata/providers");
const categories = require("./devdata/categories");
const products = require("./devdata/products");

const uri = process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));

models.Client.insertMany(clients)
  .then(() => console.log("dev data - clients added"))
  .catch(err => console.log(err));

models.Manager.insertMany(managers)
  .then(() => console.log("dev data - managers added"))
  .catch(err => console.log(err));

models.Provider.insertMany(providers)
  .then(() => console.log("dev data - providers added"))
  .catch(err => console.log(err));

models.Category.insertMany(categories)
  .then(() => console.log("dev data - categories added"))
  .catch(err => console.log(err));

// models.Product.insertMany(products)
//   .then(() => console.log("dev data - products added"))
//   .catch(err => console.log(err));
