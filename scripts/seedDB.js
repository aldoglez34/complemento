const mongoose = require("mongoose");
const models = require("../models");
const managers = require("./devdata/managers");
const messages = require("./devdata/messages");
const providers = require("./devdata/providers");
const insertProducts = require("./devdata/insertProducts");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));

models.Manager.remove({})
  .then(() => {
    return models.Manager.insertMany(managers);
  })
  .then(() => {
    console.log(">managers added");
    return models.Message.remove({});
  })
  .then(() => models.Message.insertMany(messages))
  .then(() => {
    console.log(">messages added");
    return models.Provider.remove({});
  })
  .then(() => models.Provider.insertMany(providers))
  .then((data) => {
    console.log(">providers added");
    let providersList = data.reduce((acc, cv) => {
      acc.push(cv._id);
      return acc;
    }, []);
    // insert products
    insertProducts(providersList);
  })
  .catch((err) => {
    console.log("@error", err);
    process.exit(1);
  });
