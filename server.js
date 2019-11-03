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

// add a client
// models.Client.create({
//   firebaseUID: "C7kTH27i1aSqbHgcgQwrtFuF3FO2",
//   name: "Aldo",
//   firstSurname: "Solano",
//   secondSurname: "González",
//   phone: "2281112031",
//   email: "aldoglez34@gmail.com",
//   password: "123456",
//   address: {
//     street: "5 de Febrero #14",
//     neighborhood: "Centro",
//     municipality: "Banderilla",
//     city: "Xalapa",
//     state: "Veracruz",
//     zipCode: "91300"
//   }
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// models.Client.create({
//   firebaseUID: "704qOrG8LSQcGsvymh99QDwk6k92",
//   name: "Rosa Elena",
//   firstSurname: "Solano",
//   secondSurname: "González",
//   phone: "2288351170",
//   email: "rosa.solano@freyssiniermex.com",
//   password: "123456",
//   address: {
//     street: "5 de Febrero #14",
//     neighborhood: "Centro",
//     municipality: "Banderilla",
//     city: "Xalapa",
//     state: "Veracruz",
//     zipCode: "91300"
//   }
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// // add a provider
// models.Provider.create({
//   name: "Pronamed",
//   address: "515 Hanover St. Stuart, FL 34997",
//   rfc: "AAAAAAAAAAAA",
//   email: "test@test.com",
//   phone: "1234567890",
//   password: "123456"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
// // add a product
// models.Product.create({
//   category: "Sistema Nervioso Central",
//   brand: "Pronamed",
//   name: "Eleval",
//   content: "40 comprimidos",
//   description:
//     "La fórmula de Eleval nos evita los tratamientos antidrepesivos excesivamente largos. Inhibe la degradación de los neurotransmisores durante la sinapsis, a la vez que facilita el trabajo de los receptores postsinápticos, elevando los niveles de neurotransmisores como seretonina, fenilalanina y dopamina; involucrados en la conducta y estados de ánimo. Permite el rápido regreso del paciente a un estado normal de aceptación del entorno y de sí mismo; recupera su autoestima y sus aspiraciones. No produce efectos secundarios. Tomar 2 comprimidos 3 veces al día.",
//   purchasePrice: 73.0,
//   salePrice: 118.5,
//   unitsSold: 10,
//   stock: 20,
//   photo: "Elevalcomp.jpg",
//   priority: false,
//   sufferings: ["Depresión Reactiva", "Depresión Unipolar Y Bipolar"],
//   ingredients: ["Hyperico perforatum 400 mg", "Hierba De San Juan"]
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// models.Product.create({
//   category: "Sistema Nutricional",
//   brand: "Pronamed",
//   name: "Fito-Vit",
//   content: "100 comprimidos",
//   description:
//     "Con Fito-Vit se obtienen las cantidades requeridas de vitaminas: A, BI, B2, B6, B12, C, D, E, K, PP, Ácido Paraminobenzoico, Ácido Pantoténico, Minerales: Hierro, Fósforo, Calcio, Sodio, Azufre, Magnesio, Manganeso, Potasio, Oligoelementos Esenciales: Cobalto, Cobre, Cromo, Flúor, Germanio, Iodo, Litio, Selenio, Silicio, Zinc. La biodisponibilidad de estos elementos en Fito-Vit es mayor y natural, por lo que los requerimientos quedan cubiertos con más facilidad. 3 a 9 comprimidos diariamente, según edad y peso.",
//   purchasePrice: 56.5,
//   salePrice: 91.5,
//   unitsSold: 10,
//   stock: 20,
//   photo: "FitoVitComp.jpg",
//   priority: false,
//   sufferings: [
//     "Anemias",
//     "Avitaminosis",
//     "Deficiencias Vitamínicas",
//     "Desnutrición"
//   ],
//   ingredients: [
//     "Avena sativa 100 mg",
//     "Hordeum vulgare 100 mg",
//     "Cebada",
//     "Triticum sativum 100 mg",
//     "Trigo",
//     "Oryza sativa 100 mg",
//     "Arroz",
//     "Secale cereale 100 mg",
//     "Centeno",
//     "Medicago sativa 100 mg",
//     "Alfalfa",
//     "Lithospernun officialis 100 mg",
//     "Mijo"
//   ]
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
