const mongoose = require("mongoose");
const models = require("../models");
const clients = require("./devdata/clients");
const managers = require("./devdata/managers");
const providers = require("./devdata/providers");
const insertProducts = require("./devdata/insertProducts");

const uri = process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));

models.Client.remove({})
  .then(() => models.Client.insertMany(clients))
  .then(() => {
    console.log(">clients added");
    return models.Manager.remove({});
  })
  .then(() => models.Manager.insertMany(managers))
  .then(() => {
    console.log(">managers added");
    return models.Provider.remove({});
  })
  .then(() => models.Provider.insertMany(providers))
  .then(data => {
    console.log(">providers added");
    let providersList = data.reduce((acc, cv) => {
      acc.push(cv._id);
      return acc;
    }, []);
    insertProducts(providersList);
  })
  .catch(err => {
    console.log("@error", err);
    process.exit(1);
  });
