module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define(
    "Client",
    {
      clientId: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      firstSurname: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      secondSurname: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        isEmail: true
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      street: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      zipCode: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["email"],
          msg: "Este email ya se encuentra registrado."
        }
      ]
    }
  );

  return Client;
};
