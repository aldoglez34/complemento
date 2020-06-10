const models = require("../../models");
const moment = require("moment");
moment.locale("es");

module.exports = (productsCreated) => {
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
      subTotal: productsCreated[0].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[0].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[0]._id,
          name: productsCreated[0].name,
          qty: 1,
          salePrice: productsCreated[0].salePrice,
          totalByProduct: productsCreated[0].salePrice * 1,
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
      subTotal: productsCreated[1].salePrice * 3,
      shipment: 70,
      grandTotal: productsCreated[1].salePrice * 3 + 70,
      products: [
        {
          _id: productsCreated[1]._id,
          name: productsCreated[1].name,
          qty: 3,
          salePrice: productsCreated[1].salePrice,
          totalByProduct: productsCreated[1].salePrice * 3,
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
        productsCreated[2].salePrice * 1 + productsCreated[3].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsCreated[2].salePrice * 1 +
        productsCreated[3].salePrice * 1 +
        70,
      products: [
        {
          _id: productsCreated[2]._id,
          name: productsCreated[2].name,
          qty: 1,
          salePrice: productsCreated[2].salePrice,
          totalByProduct: productsCreated[2].salePrice * 1,
        },
        {
          _id: productsCreated[3]._id,
          name: productsCreated[3].name,
          qty: 1,
          salePrice: productsCreated[3].salePrice,
          totalByProduct: productsCreated[3].salePrice * 1,
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
        productsCreated[4].salePrice * 2 + productsCreated[5].salePrice * 2,
      shipment: 70,
      grandTotal:
        productsCreated[4].salePrice * 2 +
        productsCreated[5].salePrice * 2 +
        70,
      products: [
        {
          _id: productsCreated[4]._id,
          name: productsCreated[4].name,
          qty: 2,
          salePrice: productsCreated[4].salePrice,
          totalByProduct: productsCreated[4].salePrice * 2,
        },
        {
          _id: productsCreated[5]._id,
          name: productsCreated[5].name,
          qty: 2,
          salePrice: productsCreated[5].salePrice,
          totalByProduct: productsCreated[5].salePrice * 2,
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
        productsCreated[6].salePrice * 1 +
        productsCreated[7].salePrice * 1 +
        productsCreated[8].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsCreated[6].salePrice * 1 +
        productsCreated[7].salePrice * 1 +
        productsCreated[8].salePrice * 1 +
        70,
      products: [
        {
          _id: productsCreated[6]._id,
          name: productsCreated[6].name,
          qty: 1,
          salePrice: productsCreated[6].salePrice,
          totalByProduct: productsCreated[6].salePrice * 1,
        },
        {
          _id: productsCreated[7]._id,
          name: productsCreated[7].name,
          qty: 1,
          salePrice: productsCreated[7].salePrice,
          totalByProduct: productsCreated[7].salePrice * 1,
        },
        {
          _id: productsCreated[8]._id,
          name: productsCreated[8].name,
          qty: 1,
          salePrice: productsCreated[8].salePrice,
          totalByProduct: productsCreated[8].salePrice * 1,
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
        productsCreated[9].salePrice * 1 +
        productsCreated[10].salePrice * 2 +
        productsCreated[11].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsCreated[9].salePrice * 1 +
        productsCreated[10].salePrice * 2 +
        productsCreated[11].salePrice * 1 +
        70,
      products: [
        {
          _id: productsCreated[9]._id,
          name: productsCreated[9].name,
          qty: 1,
          salePrice: productsCreated[9].salePrice,
          totalByProduct: productsCreated[9].salePrice * 1,
        },
        {
          _id: productsCreated[10]._id,
          name: productsCreated[10].name,
          qty: 2,
          salePrice: productsCreated[10].salePrice,
          totalByProduct: productsCreated[10].salePrice * 2,
        },
        {
          _id: productsCreated[11]._id,
          name: productsCreated[11].name,
          qty: 1,
          salePrice: productsCreated[11].salePrice,
          totalByProduct: productsCreated[11].salePrice * 1,
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
      subTotal: productsCreated[12].salePrice * 5,
      shipment: 70,
      grandTotal: productsCreated[12].salePrice * 5 + 70,
      products: [
        {
          _id: productsCreated[12]._id,
          name: productsCreated[12].name,
          qty: 5,
          salePrice: productsCreated[12].salePrice,
          totalByProduct: productsCreated[12].salePrice * 5,
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
      subTotal: productsCreated[20].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[20].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[20]._id,
          name: productsCreated[20].name,
          qty: 1,
          salePrice: productsCreated[20].salePrice,
          totalByProduct: productsCreated[20].salePrice * 1,
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
      subTotal: productsCreated[30].salePrice * 3,
      shipment: 70,
      grandTotal: productsCreated[30].salePrice * 3 + 70,
      products: [
        {
          _id: productsCreated[30]._id,
          name: productsCreated[30].name,
          qty: 3,
          salePrice: productsCreated[30].salePrice,
          totalByProduct: productsCreated[30].salePrice * 3,
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
      subTotal: productsCreated[45].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[45].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[45]._id,
          name: productsCreated[45].name,
          qty: 1,
          salePrice: productsCreated[45].salePrice,
          totalByProduct: productsCreated[45].salePrice * 1,
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
      subTotal: productsCreated[36].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[36].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[36]._id,
          name: productsCreated[36].name,
          qty: 1,
          salePrice: productsCreated[36].salePrice,
          totalByProduct: productsCreated[36].salePrice * 1,
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
      subTotal: productsCreated[48].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[48].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[48]._id,
          name: productsCreated[48].name,
          qty: 1,
          salePrice: productsCreated[48].salePrice,
          totalByProduct: productsCreated[48].salePrice * 1,
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
      subTotal: productsCreated[15].salePrice * 1,
      shipment: 70,
      grandTotal: productsCreated[15].salePrice * 1 + 70,
      products: [
        {
          _id: productsCreated[15]._id,
          name: productsCreated[15].name,
          qty: 1,
          salePrice: productsCreated[15].salePrice,
          totalByProduct: productsCreated[15].salePrice * 1,
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
        productsCreated[27].salePrice * 1 +
        productsCreated[37].salePrice * 1 +
        productsCreated[47].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsCreated[27].salePrice * 1 +
        productsCreated[37].salePrice * 1 +
        productsCreated[47].salePrice * 1 +
        70,
      products: [
        {
          _id: productsCreated[27]._id,
          name: productsCreated[27].name,
          qty: 1,
          salePrice: productsCreated[27].salePrice,
          totalByProduct: productsCreated[27].salePrice * 1,
        },
        {
          _id: productsCreated[37]._id,
          name: productsCreated[37].name,
          qty: 1,
          salePrice: productsCreated[37].salePrice,
          totalByProduct: productsCreated[37].salePrice * 1,
        },
        {
          _id: productsCreated[47]._id,
          name: productsCreated[47].name,
          qty: 1,
          salePrice: productsCreated[47].salePrice,
          totalByProduct: productsCreated[47].salePrice * 1,
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
        productsCreated[47].salePrice * 1 + productsCreated[3].salePrice * 1,
      shipment: 70,
      grandTotal:
        productsCreated[47].salePrice * 1 +
        productsCreated[3].salePrice * 1 +
        70,
      products: [
        {
          _id: productsCreated[47]._id,
          name: productsCreated[47].name,
          qty: 1,
          salePrice: productsCreated[47].salePrice,
          totalByProduct: productsCreated[47].salePrice * 1,
        },
        {
          _id: productsCreated[3]._id,
          name: productsCreated[3].name,
          qty: 1,
          salePrice: productsCreated[3].salePrice,
          totalByProduct: productsCreated[3].salePrice * 1,
        },
      ],
    },
  ];

  const clients = [
    {
      firebaseUID: "zLjprSQDE4f7z9PMDEiET7gxLw33",
      name: "Pedro",
      firstSurname: "Ramírez",
      secondSurname: "Hernández",
      phone: "2238372645",
      email: "pedro.ram@hotmail.com",
      address: {
        street: "Calzada conasupo 55",
        neighborhood: "San José Terán",
        municipality: "San José Terán",
        city: "Tuxtla Gutiérrez",
        state: "Chiapas",
        zipCode: "36721",
      },
      favorites: [productsCreated[0]._id, productsCreated[1]._id],
    },
    {
      firebaseUID: "RrMYP5LxfsQl8wcgNcdPEl0Fqif2",
      name: "Chu",
      firstSurname: "Gutiérrez",
      secondSurname: "Franco",
      phone: "2717161803",
      email: "chu1234@hotmail.com",
      address: {
        street: "CALL 4 NO. 14 A",
        neighborhood: "Centro",
        municipality: "Alvarado",
        city: "Alvarado",
        state: "Veracruz",
        zipCode: "94540",
      },
      favorites: [productsCreated[3]._id, productsCreated[2]._id],
    },
  ];

  return models.Sale.remove({})
    .then(() => models.Sale.insertMany(sales))
    .then(() => {
      console.log(">sales added");
      return models.Client.remove({});
    })
    .then(() => models.Client.insertMany(clients))
    .then(() => {
      console.log(">clients added");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
