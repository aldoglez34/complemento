const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

// middleware
// use morgan logger for logging requests
app.use(morgan("dev"));

// parse request body as JSON (using body-parser)
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json (using body-parser)
// app.use(express.json());
app.use(bodyParser.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.use(routes);

// send every other request to the React app
// define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to the Mongo DB
// const uri = process.env.MONGODB_URI || "mongodb://localhost/complementoDB";
const uri =
  process.env.MONGODB_URI ||
  "mongodb://aldo:ThirtyFour340815@ds213896.mlab.com:13896/heroku_zhf3ks7x";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log(error));

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
