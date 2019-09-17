const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// define API routes
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

// rend every other request to the React app
// define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// use sequelize fixtures to init data (if needed)
const sequelize_fixtures = require("sequelize-fixtures");
const models = require("./models");

// sync db
// when in dev, leave force: true
db.sequelize.sync({ force: false }).then(function() {
  // load fixtures files into the db
  // it's important that the process is finished in order
  sequelize_fixtures.loadFile("fixtures/*.json", models).then(function() {
    console.log("\n\ndev data loaded in order successfully\n\n");
  });

  // start server
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
