module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
    clientId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 15]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$", "i"]
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$", "i", " "]
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [
        [
          "Aguascalientes",
          "Baja California",
          "Baja California Sur",
          "Campeche",
          "Chiapas",
          "Chihuahua",
          "Ciudad de México",
          "Coahuila",
          "Colima",
          "Durango",
          "Estado de México",
          "Guanajuato",
          "Guerrero",
          "Hidalgo",
          "Jalisco",
          "Michoacán",
          "Morelos",
          "Nayarit",
          "Nuevo León",
          "Oaxaca",
          "Puebla",
          "Querétaro",
          "Quintana Roo",
          "San Luis Potosí",
          "Sinaloa",
          "Sonora",
          "Tabasco",
          "Tamaulipas",
          "Tlaxcala",
          "Veracruz",
          "Yucatán",
          "Zacatecas"
        ]
      ]
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING(1234),
      allowNull: true
    }
  });

  return Client;
};
