const models = require("../../models");
const moment = require("moment");
moment.locale("es");

const date = new Date();

module.exports = (productsForSales) => {
  const sales = [
    {
      buyer: {
        name: "Aldo",
        firstSurname: "Solano",
        secondSurname: "González",
        email: "aldoglez34@gmail.com",
        phone: 2281112031,
        address: {
          street: "5 de Febrero #14",
          neighborhood: "Centro",
          municipality: "Banderilla",
          city: "Xalapa",
          state: "Veracruz",
          zipCode: 91300,
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[0].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[0].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[0]._id,
          name: productsForSales[0].name,
          qty: 1,
          salePrice: productsForSales[0].salePrice,
          totalByProduct: productsForSales[0].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Anna",
        firstSurname: "Faris",
        email: "anna.faris@hotmail.com",
        phone: 2288237843,
        address: {
          street: "Av. Revolución #45",
          neighborhood: "Revolución",
          municipality: "Toluca",
          city: "Toluca",
          state: "Estado de México",
          zipCode: 32787,
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(3, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[1].salePrice * 3,
      shipment: 70,
      grandTotal: productsForSales[1].salePrice * 3 + 70,
      products: [
        {
          _id: productsForSales[1]._id,
          name: productsForSales[1].name,
          qty: 3,
          salePrice: productsForSales[1].salePrice,
          totalByProduct: productsForSales[1].salePrice * 3,
        },
      ],
    },
    {
      buyer: {
        name: "Luciano",
        firstSurname: "Cerda",
        secondSurname: "Hernández",
        email: "luciano@yahoo.com",
        phone: 5578235694,
        address: {
          street: "Poniente 2",
          neighborhood: "Juárez",
          municipality: "Hermosillo",
          city: "Hermosillo",
          state: "Sonora",
          zipCode: 23543,
        },
      },
      status: "Procesado",
      saleDate: moment().subtract(2, "days").format("YYYY-MM-DD"),
      subTotal:
        productsForSales[2].salePrice * 1 + productsForSales[3].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsForSales[2].salePrice * 1 +
        productsForSales[3].salePrice * 1 +
        70,
      products: [
        {
          _id: productsForSales[2]._id,
          name: productsForSales[2].name,
          qty: 1,
          salePrice: productsForSales[2].salePrice,
          totalByProduct: productsForSales[2].salePrice * 1,
        },
        {
          _id: productsForSales[3]._id,
          name: productsForSales[3].name,
          qty: 1,
          salePrice: productsForSales[3].salePrice,
          totalByProduct: productsForSales[3].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Engracia",
        firstSurname: "Murillo",
        secondSurname: "Serdán",
        email: "engrtaciagordi@gmail.com",
        phone: 8239236473,
        address: {
          street: "Calle 5 #89",
          neighborhood: "Centro",
          municipality: "Las Lomas",
          city: "Orizaba",
          state: "Veracruz",
          zipCode: 23443,
        },
      },
      status: "Entregado",
      saleDate: moment().format("YYYY-MM-DD"),
      subTotal:
        productsForSales[4].salePrice * 2 + productsForSales[5].salePrice * 2,
      shipment: 70,
      grandTotal:
        productsForSales[4].salePrice * 2 +
        productsForSales[5].salePrice * 2 +
        70,
      products: [
        {
          _id: productsForSales[4]._id,
          name: productsForSales[4].name,
          qty: 2,
          salePrice: productsForSales[4].salePrice,
          totalByProduct: productsForSales[4].salePrice * 2,
        },
        {
          _id: productsForSales[5]._id,
          name: productsForSales[5].name,
          qty: 2,
          salePrice: productsForSales[5].salePrice,
          totalByProduct: productsForSales[5].salePrice * 2,
        },
      ],
    },
    {
      buyer: {
        name: "María",
        firstSurname: "Barcelo",
        secondSurname: "Rodríguez",
        email: "mariabarcellll@yahoo.com",
        phone: 2334567239,
        address: {
          street: "Calle 7",
          neighborhood: "Guardia Poniente",
          municipality: "Centro",
          city: "San Cristobal",
          state: "Chiapas",
          zipCode: 23221,
        },
      },
      status: "Procesado",
      saleDate: moment().format("YYYY-MM-DD"),
      subTotal:
        productsForSales[6].salePrice * 1 +
        productsForSales[7].salePrice * 1 +
        productsForSales[8].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsForSales[6].salePrice * 1 +
        productsForSales[7].salePrice * 1 +
        productsForSales[8].salePrice * 1 +
        70,
      products: [
        {
          _id: productsForSales[6]._id,
          name: productsForSales[6].name,
          qty: 1,
          salePrice: productsForSales[6].salePrice,
          totalByProduct: productsForSales[6].salePrice * 1,
        },
        {
          _id: productsForSales[7]._id,
          name: productsForSales[7].name,
          qty: 1,
          salePrice: productsForSales[7].salePrice,
          totalByProduct: productsForSales[7].salePrice * 1,
        },
        {
          _id: productsForSales[8]._id,
          name: productsForSales[8].name,
          qty: 1,
          salePrice: productsForSales[8].salePrice,
          totalByProduct: productsForSales[8].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Judit",
        firstSurname: "Navarro",
        secondSurname: "Ramírez",
        email: "juditnav4567@gmail.com",
        phone: 5584392123,
        address: {
          street: "Montecito 38",
          neighborhood: "Nápoles",
          municipality: "Benito Juárez",
          city: "Ciudad de México",
          state: "Ciudad de México",
          zipCode: "03810",
        },
      },
      status: "Procesado",
      saleDate: moment().subtract(4, "days").format("YYYY-MM-DD"),
      subTotal:
        productsForSales[9].salePrice * 1 +
        productsForSales[10].salePrice * 2 +
        productsForSales[11].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsForSales[9].salePrice * 1 +
        productsForSales[10].salePrice * 2 +
        productsForSales[11].salePrice * 1 +
        70,
      products: [
        {
          _id: productsForSales[9]._id,
          name: productsForSales[9].name,
          qty: 1,
          salePrice: productsForSales[9].salePrice,
          totalByProduct: productsForSales[9].salePrice * 1,
        },
        {
          _id: productsForSales[10]._id,
          name: productsForSales[10].name,
          qty: 2,
          salePrice: productsForSales[10].salePrice,
          totalByProduct: productsForSales[10].salePrice * 2,
        },
        {
          _id: productsForSales[11]._id,
          name: productsForSales[11].name,
          qty: 1,
          salePrice: productsForSales[11].salePrice,
          totalByProduct: productsForSales[11].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Eulogio",
        firstSurname: "Blazquez",
        secondSurname: "Ortega",
        email: "eugenio45@hotmail.com",
        phone: 7846372837,
        address: {
          street: "Diagonal San Antonio",
          neighborhood: "Narvarte Poniente",
          municipality: "Benito Juárez",
          city: "Ciudad de México",
          state: "Ciudad de México",
          zipCode: "03020",
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(5, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[12].salePrice * 5,
      shipment: 70,
      grandTotal: productsForSales[12].salePrice * 5 + 70,
      products: [
        {
          _id: productsForSales[12]._id,
          name: productsForSales[12].name,
          qty: 5,
          salePrice: productsForSales[12].salePrice,
          totalByProduct: productsForSales[12].salePrice * 5,
        },
      ],
    },
    {
      buyer: {
        name: "Mario",
        firstSurname: "Lozano",
        secondSurname: "Jiménez",
        email: "mario9@hotmail.com",
        phone: 2277334422,
        address: {
          street: "Eje 2 #33",
          neighborhood: "Col. Del Valle Nte",
          municipality: "Benito Juárez",
          city: "Ciudad de México",
          state: "Ciudad de México",
          zipCode: "03103",
        },
      },
      status: "Cancelado",
      saleDate: moment().subtract(6, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[20].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[20].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[20]._id,
          name: productsForSales[20].name,
          qty: 1,
          salePrice: productsForSales[20].salePrice,
          totalByProduct: productsForSales[20].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Lucía",
        firstSurname: "Domínguez",
        secondSurname: "Ruíz",
        email: "lucy@yahoo.com.mx",
        phone: 7483946127,
        address: {
          street: "Tehuantepec 246",
          neighborhood: "Roma Sur",
          municipality: "Cuauhtémoc",
          city: "Puebla",
          state: "Puebla",
          zipCode: "06760",
        },
      },
      status: "Enviado",
      saleDate: moment().subtract(4, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[30].salePrice * 3,
      shipment: 70,
      grandTotal: productsForSales[30].salePrice * 3 + 70,
      products: [
        {
          _id: productsForSales[30]._id,
          name: productsForSales[30].name,
          qty: 3,
          salePrice: productsForSales[30].salePrice,
          totalByProduct: productsForSales[30].salePrice * 3,
        },
      ],
    },
    {
      buyer: {
        name: "Armando",
        firstSurname: "Valdés",
        secondSurname: "Aldama",
        email: "arvalal@gmail.com",
        phone: 3399223274,
        address: {
          street: "Av Nuevo León No. 179",
          neighborhood: "Benito Juárez",
          municipality: "Cuauhtémoc",
          city: "Ciudad Victoria",
          state: "Tamaulipas",
          zipCode: "23700",
        },
      },
      status: "Enviado",
      saleDate: moment().format("YYYY-MM-DD"),
      subTotal: productsForSales[45].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[45].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[45]._id,
          name: productsForSales[45].name,
          qty: 1,
          salePrice: productsForSales[45].salePrice,
          totalByProduct: productsForSales[45].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Francisco",
        firstSurname: "Valdivia",
        email: "pacopaco@gmail.com",
        phone: 2345643567,
        address: {
          street: "Av Sonora",
          neighborhood: "Insurgentes",
          municipality: "Insurgentes",
          city: "Hermosillo",
          state: "Sonora",
          zipCode: "23422",
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[36].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[36].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[36]._id,
          name: productsForSales[36].name,
          qty: 1,
          salePrice: productsForSales[36].salePrice,
          totalByProduct: productsForSales[36].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Tamara",
        firstSurname: "Hudson",
        email: "tammy@gmail.com",
        phone: 2334232456,
        address: {
          street: "Av Sonora",
          neighborhood: "Insurgentes",
          municipality: "Insurgentes",
          city: "Hermosillo",
          state: "Sonora",
          zipCode: "23422",
        },
      },
      status: "Cancelado",
      saleDate: moment().subtract(2, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[48].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[48].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[48]._id,
          name: productsForSales[48].name,
          qty: 1,
          salePrice: productsForSales[48].salePrice,
          totalByProduct: productsForSales[48].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Rogelio",
        firstSurname: "Hernández",
        secondSurname: "Armada",
        email: "hernandezarmadarogg@gmail.com",
        phone: 2343354332,
        address: {
          street: "Av. Los Pinos",
          neighborhood: "Del Cármen",
          municipality: "21 de Marzo",
          city: "Guadalajara",
          state: "Jalisco",
          zipCode: "89671",
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
      subTotal: productsForSales[15].salePrice * 1,
      shipment: 70,
      grandTotal: productsForSales[15].salePrice * 1 + 70,
      products: [
        {
          _id: productsForSales[15]._id,
          name: productsForSales[15].name,
          qty: 1,
          salePrice: productsForSales[15].salePrice,
          totalByProduct: productsForSales[15].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "María",
        firstSurname: "Azueta",
        secondSurname: "Franco",
        email: "azueta@hotmail.com",
        phone: 1223213343,
        address: {
          street: "5 de Mayo #5",
          neighborhood: "Centro",
          municipality: "Moctezuma",
          city: "Villahermosa",
          state: "Tabasco",
          zipCode: "23433",
        },
      },
      status: "Entregado",
      saleDate: moment().subtract(3, "days").format("YYYY-MM-DD"),
      subTotal:
        productsForSales[27].salePrice * 1 +
        productsForSales[37].salePrice * 1 +
        productsForSales[47].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsForSales[27].salePrice * 1 +
        productsForSales[37].salePrice * 1 +
        productsForSales[47].salePrice * 1 +
        70,
      products: [
        {
          _id: productsForSales[27]._id,
          name: productsForSales[27].name,
          qty: 1,
          salePrice: productsForSales[27].salePrice,
          totalByProduct: productsForSales[27].salePrice * 1,
        },
        {
          _id: productsForSales[37]._id,
          name: productsForSales[37].name,
          qty: 1,
          salePrice: productsForSales[37].salePrice,
          totalByProduct: productsForSales[37].salePrice * 1,
        },
        {
          _id: productsForSales[47]._id,
          name: productsForSales[47].name,
          qty: 1,
          salePrice: productsForSales[47].salePrice,
          totalByProduct: productsForSales[47].salePrice * 1,
        },
      ],
    },
    {
      buyer: {
        name: "Franco",
        firstSurname: "Guardado",
        secondSurname: "López",
        email: "guardado.franco@hotmail.com",
        phone: 3243242302,
        address: {
          street: "Melchor Ocampo",
          neighborhood: "Centro",
          municipality: "Alejer",
          city: "Oaxaca",
          state: "Oaxaca",
          zipCode: "23429",
        },
      },
      status: "Cancelado",
      saleDate: moment().subtract(4, "days").format("YYYY-MM-DD"),
      subTotal:
        productsForSales[47].salePrice * 1 + productsForSales[3].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsForSales[47].salePrice * 1 +
        productsForSales[3].salePrice * 1 +
        70,
      products: [
        {
          _id: productsForSales[47]._id,
          name: productsForSales[47].name,
          qty: 1,
          salePrice: productsForSales[47].salePrice,
          totalByProduct: productsForSales[47].salePrice * 1,
        },
        {
          _id: productsForSales[3]._id,
          name: productsForSales[3].name,
          qty: 1,
          salePrice: productsForSales[3].salePrice,
          totalByProduct: productsForSales[3].salePrice * 1,
        },
      ],
    },
  ];

  return models.Sale.remove({})
    .then(() => models.Sale.insertMany(sales))
    .then(() => {
      console.log(">sales added");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
