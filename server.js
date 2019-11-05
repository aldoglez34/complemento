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

// // ====================================================================================================
// // ====================================================================================================
// // ====================================================================================================

// models.Product.create({
//   category: "Sistema Nervioso Central",
//   brand: "Pronamed",
//   name: "Eleval",
//   content: "40 comprimidos",
//   description:
//     "La fórmula de Eleval nos evita los tratamientos antidrepesivos excesivamente largos. Inhibe la degradación de los neurotransmisores durante la sinapsis, a la vez que facilita el trabajo de los receptores postsinápticos, elevando los niveles de neurotransmisores como seretonina, fenilalanina y dopamina; involucrados en la conducta y estados de ánimo. Permite el rápido regreso del paciente a un estado normal de aceptación del entorno y de sí mismo; recupera su autoestima y sus aspiraciones. No produce efectos secundarios. Tomar 2 comprimidos 3 veces al día.",
//   purchasePrice: 56.5,
//   salePrice: 91.5,
//   unitsSold: 10,
//   stock: 20,
//   photo: "Elevalcomp.jpg",
//   priority: true,
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
//   ],
//   discount: {
//     hasDiscount: false
//   },
//   provider: "5dc083cc5707e604dc3a3272"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// models.Product.create({
//   category: "Sistema Nervioso Central",
//   brand: "Benlaifh",
//   name: "Fytodop",
//   content: "100 comprimidos",
//   description:
//     "Es un alimento más que un medicamento, obtenido a través de leguminosas, especialmente Vicia Faba, la cual es singularmente rica en Dopamina, que estando representada como una Catecolamina no sintética, totalmente natural no requiere de conversiones, bioquímicas o enzimáticas para llegar al cerebro en forma de Neurotransmisor, listo para su acción Dopaminérgica. Tanto la rigidez como bradicinesia son espectacularmente superados, devolviendo al paciente poco a poco a sus actividades acostumbradas, paciente acinéticos también recuperan paulatinamente su capacidad ambulatoria. No produce efectos secundarios. Tomar 1 o 2 comprimidos 3 veces al día.",
//   purchasePrice: 56.5,
//   salePrice: 91.5,
//   unitsSold: 10,
//   stock: 0,
//   photo: "Fytodopcomp.jpg",
//   priority: true,
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
//   ],
//   discount: {
//     hasDiscount: false
//   },
//   provider: "5dc083cc5707e604dc3a3273"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// models.Product.create({
//   category: "Sistema Nervioso Central",
//   brand: "Alfadelta",
//   name: "Mygral",
//   content: "100 comprimidos",
//   description:
//     "Mygral, es un efectivo agente para la eliminación de la migraña y dolor de cabeza. Siendo un fármaco de origen vegetal se descartan todos los efectos que producen los productos alopáticos como son: gastritis, náuseas, vómitos, etc. La acción analgésica es rápida, duradera y ampliamente tolerada. No produce efectos secundarios. Tomar 2 comprimidos cada 4 horas durante la crisis.",
//   purchasePrice: 71.5,
//   salePrice: 116.0,
//   unitsSold: 10,
//   stock: 20,
//   photo: "Mygralcomp.jpg",
//   priority: true,
//   sufferings: ["Jaquecas", "Migraña"],
//   ingredients: [
//     "Turnera difusa 75 mg",
//     "Damiana",
//     "Tilia occidentalisa 75 mg",
//     "Tila",
//     "Ipomea stans 100 mg",
//     "Tumba Vaqueros",
//     "Valeriana officinallis 100 mg",
//     "Excipiente C.B.P. 450 mg"
//   ],
//   discount: {
//     hasDiscount: true,
//     percentage: 50,
//     newPrice: 58
//   },
//   provider: "5dc083cc5707e604dc3a3274"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// models.Product.create({
//   category: "Alimentos Terapéuticos",
//   brand: "Arefil",
//   name: "Levadura de Cerveza",
//   content: "100 comprimidos",
//   description:
//     "Un factor de entre otros muchos, que hace que la Levadura de Cerveza sea un alimento extraordinario es que los veintitrés aminoácidos que contiene se ingieren al mismo tiempo, en plazo no superior a tres horas, salvo los ocho esenciales que se absorben poco a poco. Tomar diariamente Levadura de Cerveza, significará un valioso recurso nutritivo y mantener un equilibrio ideal de la flora intestinal. Niños: 1 a 3 comprimidos diariamente. Adultos: 6 comprimidos al día, después de 15 días reducir a 3 comprimidos diarios.",
//   purchasePrice: 69.5,
//   salePrice: 120,
//   unitsSold: 10,
//   stock: 0,
//   photo: "Mygralcomp.jpg",
//   priority: true,
//   sufferings: [
//     "Anorexia",
//     "Deficiencias Vitamínicas",
//     "Eritropoyetico",
//     "Hígado",
//     "Inapetencia",
//     "Nervios",
//     "Tiroides",
//     "Vesícula",
//     "Vigorizante"
//   ],
//   ingredients: ["Levadura De Cerveza Desamargada"],
//   discount: {
//     hasDiscount: true,
//     percentage: 50,
//     newPrice: 60
//   },
//   provider: "5dc083cc5707e604dc3a3275"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// models.Product.create({
//   category: "Sistema Nutricional",
//   brand: "Productos Naturales",
//   name: "Sistema Inmunológico",
//   content: "60 comprimidos",
//   description:
//     "Purisan, esta compuesto por seis elementos dirigidos a purificar la sangre y presentar defensas, ante la producción de células atípicas; ha demostrado ayudar a restaurar la inmunidad ante la creación y proliferación de sarcomas, linfosarcomas, tumores en crecimiento. Purisan es un importante auxiliar en proceso diseminados particularmente de ovario y mama; no tiene contraindicaciones y no tiene efectos secundarios y puede administrarse por tiempo indefinido. No consumirse durante el embarazo. Tomar 4 a 8 comprimidos distribuidos durante el día, según el caso.",
//   purchasePrice: 256.5,
//   salePrice: 415.5,
//   unitsSold: 15,
//   stock: 0,
//   photo: "Purisancomp.jpg",
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
//   ],
//   discount: {
//     hasDiscount: false
//   },
//   provider: "5dc083cc5707e604dc3a3276"
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// // ====================================================================================================
// // ====================================================================================================
// // ====================================================================================================

// start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
