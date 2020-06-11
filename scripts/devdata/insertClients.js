const models = require("../../models");
const insertSales = require("./insertSales");

module.exports = (productsCreated) => {
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
    {
      firebaseUID: "bkrzalGf9leKgYE6yF38fl4awhN2",
      name: "Cesar",
      firstSurname: "Vivo",
      secondSurname: "Pintado",
      phone: "4568123547",
      email: "cesar.vivo@gmail.com",
      address: {
        street: "Ciudad de Mexico",
        neighborhood: "Centro",
        municipality: "Juárez",
        city: "Ciudad de México",
        state: "Ciudad de México",
        zipCode: "55102",
      },
      favorites: [
        productsCreated[3]._id,
        productsCreated[2]._id,
        productsCreated[4]._id,
        productsCreated[5]._id,
      ],
    },
    {
      firebaseUID: "l5DOoAUbfcT9vT6fPNfjEv3aomo2",
      name: "Alejandro",
      firstSurname: "De Los Ríos",
      secondSurname: "Bajo",
      phone: "6188135727",
      email: "alexdlr@hotmail.com",
      address: {
        street: "FRANCISCO SARABIA NO. 818",
        neighborhood: "ANALCO",
        municipality: "ANALCO",
        city: "Durango",
        state: "Durango",
        zipCode: "34138",
      },
      favorites: [
        productsCreated[15]._id,
        productsCreated[21]._id,
        productsCreated[5]._id,
        productsCreated[13]._id,
      ],
    },
    {
      firebaseUID: "TbtbqYrOCNbg69zykfmoYDykPlo1",
      name: "Lorenzo",
      firstSurname: "Camarasa",
      secondSurname: "Lahoz",
      phone: "8183489347",
      email: "lorenzo@gmail.com",
      address: {
        street: "TEXCOCO 321",
        neighborhood: "MITRAS CENTRO",
        municipality: "Monterrey",
        city: "Durango",
        state: "Nuevo Leon",
        zipCode: "64460",
      },
      favorites: [productsCreated[38]._id, productsCreated[26]._id],
    },
    {
      firebaseUID: "Z5cBSC12hyOVwsQjvHQXHDK8xfC2",
      name: "Juan Carlos",
      firstSurname: "Pereriro",
      secondSurname: "Hernández",
      phone: "8777725656",
      email: "juan.pereiro@hotmail.com",
      address: {
        street: "BLVD LOPEZ MATEOS SN",
        neighborhood: "CIUDAD ACUÑA",
        municipality: "Centro",
        city: "CIUDAD ACUÑA",
        state: "Coahuila",
        zipCode: "26200",
      },
      favorites: [
        productsCreated[1]._id,
        productsCreated[41]._id,
        productsCreated[31]._id,
        productsCreated[21]._id,
        productsCreated[11]._id,
        productsCreated[12]._id,
        productsCreated[13]._id,
        productsCreated[17]._id,
      ],
    },
    {
      firebaseUID: "1U8Csj9T8uWlqZG1jdsDMz44sOz2",
      name: "Andrés",
      firstSurname: "Pou",
      secondSurname: "Moll",
      phone: "9616113940",
      email: "andres21323@gmail.com",
      address: {
        street: "BLVD LOPEZ MATEOS SN",
        neighborhood: "Tuxtla Gutiérrez",
        municipality: "Tuxtla Gutiérrez",
        city: "Tuxtla Gutiérrez",
        state: "Chiapas",
        zipCode: "29065",
      },
      favorites: [
        productsCreated[45]._id,
        productsCreated[44]._id,
        productsCreated[14]._id,
        productsCreated[18]._id,
      ],
    },
    {
      firebaseUID: "vqxTRSnWAxNoyGq6goJEW8gvA4v2",
      name: "Alondra",
      firstSurname: "Muela",
      secondSurname: "Tur",
      phone: "5557609593",
      email: "turalondraaa@gmail.com",
      address: {
        street: "5 NO. 37",
        neighborhood: "CAMPESTRE GUADALUPANA",
        municipality: "Nezahualcóyotl",
        city: "Estado De Mexico",
        state: "Estado De Mexico",
        zipCode: "57120",
      },
    },
    {
      firebaseUID: "p83UTikQLlMIOLnBoItiX71Dfu72",
      name: "Kenia",
      firstSurname: "Raposo",
      secondSurname: "Funes",
      phone: "4626601700",
      email: "kkraposo@gmail.com",
      address: {
        street: "FRANCISCO VILLA NO. 127",
        neighborhood: "FRACC GAMEZ",
        municipality: "Irapuato",
        city: "Irapuato",
        state: "Guanajuato",
        zipCode: "36650",
      },
      favorites: [
        productsCreated[5]._id,
        productsCreated[8]._id,
        productsCreated[36]._id,
        productsCreated[22]._id,
      ],
    },
  ];

  return models.Client.remove({})
    .then(() => models.Client.insertMany(clients))
    .then((cli) => {
      console.log(">clients added");
      const clientsForSales = cli.reduce((acc, cv) => {
        acc.push({
          _id: cv._id,
          name: cv.name,
          firstSurname: cv.firstSurname,
          secondSurname: cv.secondSurname,
          phone: cv.phone,
          email: cv.email,
          address: cv.address,
        });
        return acc;
      }, []);
      // insert sales
      insertSales(productsCreated, clientsForSales);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
