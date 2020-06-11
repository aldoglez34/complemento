const models = require("../../models");
const moment = require("moment");
moment.locale("es");

module.exports = (productsCreated, clientsForSales) => {
  const sales = [
    {
      buyer: {
        clientId: clientsForSales[0]._id,
        name: clientsForSales[0].name,
        firstSurname: clientsForSales[0].firstSurname,
        secondSurname: clientsForSales[0].secondSurname,
        email: clientsForSales[0].email,
        phone: clientsForSales[0].phone,
        address: {
          street: clientsForSales[0].address.street,
          neighborhood: clientsForSales[0].address.neighborhood,
          municipality: clientsForSales[0].address.municipality,
          city: clientsForSales[0].address.city,
          state: clientsForSales[0].address.state,
          zipCode: clientsForSales[0].address.zipCode,
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
        clientId: clientsForSales[0]._id,
        name: clientsForSales[0].name,
        firstSurname: clientsForSales[0].firstSurname,
        secondSurname: clientsForSales[0].secondSurname,
        email: clientsForSales[0].email,
        phone: clientsForSales[0].phone,
        address: {
          street: clientsForSales[0].address.street,
          neighborhood: clientsForSales[0].address.neighborhood,
          municipality: clientsForSales[0].address.municipality,
          city: clientsForSales[0].address.city,
          state: clientsForSales[0].address.state,
          zipCode: clientsForSales[0].address.zipCode,
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
        clientId: clientsForSales[1]._id,
        name: clientsForSales[1].name,
        firstSurname: clientsForSales[1].firstSurname,
        secondSurname: clientsForSales[1].secondSurname,
        email: clientsForSales[1].email,
        phone: clientsForSales[1].phone,
        address: {
          street: clientsForSales[1].address.street,
          neighborhood: clientsForSales[1].address.neighborhood,
          municipality: clientsForSales[1].address.municipality,
          city: clientsForSales[1].address.city,
          state: clientsForSales[1].address.state,
          zipCode: clientsForSales[1].address.zipCode,
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
        clientId: clientsForSales[2]._id,
        name: clientsForSales[2].name,
        firstSurname: clientsForSales[2].firstSurname,
        secondSurname: clientsForSales[2].secondSurname,
        email: clientsForSales[2].email,
        phone: clientsForSales[2].phone,
        address: {
          street: clientsForSales[2].address.street,
          neighborhood: clientsForSales[2].address.neighborhood,
          municipality: clientsForSales[2].address.municipality,
          city: clientsForSales[2].address.city,
          state: clientsForSales[2].address.state,
          zipCode: clientsForSales[2].address.zipCode,
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
        clientId: clientsForSales[3]._id,
        name: clientsForSales[3].name,
        firstSurname: clientsForSales[3].firstSurname,
        secondSurname: clientsForSales[3].secondSurname,
        email: clientsForSales[3].email,
        phone: clientsForSales[3].phone,
        address: {
          street: clientsForSales[3].address.street,
          neighborhood: clientsForSales[3].address.neighborhood,
          municipality: clientsForSales[3].address.municipality,
          city: clientsForSales[3].address.city,
          state: clientsForSales[3].address.state,
          zipCode: clientsForSales[3].address.zipCode,
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
        clientId: clientsForSales[4]._id,
        name: clientsForSales[4].name,
        firstSurname: clientsForSales[4].firstSurname,
        secondSurname: clientsForSales[4].secondSurname,
        email: clientsForSales[4].email,
        phone: clientsForSales[4].phone,
        address: {
          street: clientsForSales[4].address.street,
          neighborhood: clientsForSales[4].address.neighborhood,
          municipality: clientsForSales[4].address.municipality,
          city: clientsForSales[4].address.city,
          state: clientsForSales[4].address.state,
          zipCode: clientsForSales[4].address.zipCode,
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
        clientId: clientsForSales[5]._id,
        name: clientsForSales[5].name,
        firstSurname: clientsForSales[5].firstSurname,
        secondSurname: clientsForSales[5].secondSurname,
        email: clientsForSales[5].email,
        phone: clientsForSales[5].phone,
        address: {
          street: clientsForSales[5].address.street,
          neighborhood: clientsForSales[5].address.neighborhood,
          municipality: clientsForSales[5].address.municipality,
          city: clientsForSales[5].address.city,
          state: clientsForSales[5].address.state,
          zipCode: clientsForSales[5].address.zipCode,
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
        clientId: clientsForSales[6]._id,
        name: clientsForSales[6].name,
        firstSurname: clientsForSales[6].firstSurname,
        secondSurname: clientsForSales[6].secondSurname,
        email: clientsForSales[6].email,
        phone: clientsForSales[6].phone,
        address: {
          street: clientsForSales[6].address.street,
          neighborhood: clientsForSales[6].address.neighborhood,
          municipality: clientsForSales[6].address.municipality,
          city: clientsForSales[6].address.city,
          state: clientsForSales[6].address.state,
          zipCode: clientsForSales[6].address.zipCode,
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
        clientId: clientsForSales[7]._id,
        name: clientsForSales[7].name,
        firstSurname: clientsForSales[7].firstSurname,
        secondSurname: clientsForSales[7].secondSurname,
        email: clientsForSales[7].email,
        phone: clientsForSales[7].phone,
        address: {
          street: clientsForSales[7].address.street,
          neighborhood: clientsForSales[7].address.neighborhood,
          municipality: clientsForSales[7].address.municipality,
          city: clientsForSales[7].address.city,
          state: clientsForSales[7].address.state,
          zipCode: clientsForSales[7].address.zipCode,
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
        clientId: clientsForSales[8]._id,
        name: clientsForSales[8].name,
        firstSurname: clientsForSales[8].firstSurname,
        secondSurname: clientsForSales[8].secondSurname,
        email: clientsForSales[8].email,
        phone: clientsForSales[8].phone,
        address: {
          street: clientsForSales[8].address.street,
          neighborhood: clientsForSales[8].address.neighborhood,
          municipality: clientsForSales[8].address.municipality,
          city: clientsForSales[8].address.city,
          state: clientsForSales[8].address.state,
          zipCode: clientsForSales[8].address.zipCode,
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
