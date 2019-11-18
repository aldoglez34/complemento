const models = require("../models");

const clients = require("./devdata/clients");
models.Client.insertMany(clients)
  .then(() => console.log("dev data - clients added"))
  .catch(err => console.log(err));

const managers = require("./devdata/managers");
models.Manager.insertMany(managers)
  .then(() => console.log("dev data - managers added"))
  .catch(err => console.log(err));

const providers = require("./devdata/providers");
models.Provider.insertMany(providers)
  .then(() => console.log("dev data - providers added"))
  .catch(err => console.log(err));

const products = require("./devdata/products");
models.Product.insertMany(products)
  .then(() => console.log("dev data - products added"))
  .catch(err => console.log(err));
