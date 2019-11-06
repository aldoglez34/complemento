const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const models = require("./models");
const morgan = require("morgan");
const mongoose = require("mongoose");

// middleware
// use morgan logger for logging requests
app.use(morgan("dev"));
// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
const storeRoutes = require("./routes/storeRoutes");
app.use("/api/store", storeRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/api/product", productRoutes);
const homeRoutes = require("./routes/homeRoutes");
app.use("/api/home", homeRoutes);
const clientRoutes = require("./routes/clientRoutes");
app.use("/api/client", clientRoutes);
const managerRoutes = require("./routes/managerRoutes");
app.use("/api/manager", managerRoutes);

// send every other request to the React app
// define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to the Mongo DB
const uri = process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));

// =======================================
// begins loading devdata ================
// const clients = require("./devdata/clients");
// models.Client.insertMany(clients)
//   .then(() => console.log("dev data - clients added"))
//   .catch(err => console.log(err));

// const managers = require("./devdata/managers");
// models.Manager.insertMany(managers)
//   .then(() => console.log("dev data - managers added"))
//   .catch(err => console.log(err));

// const providers = require("./devdata/providers");
// models.Provider.insertMany(providers)
//   .then(() => console.log("dev data - providers added"))
//   .catch(err => console.log(err));

// const products = require("./devdata/products");
// models.Product.insertMany(products)
//   .then(() => console.log("dev data - products added"))
//   .catch(err => console.log(err));
// finish loading devdata ================
// =======================================

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
