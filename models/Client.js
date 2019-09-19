module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define(
    "Client",
    {
      clientId: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          len: {
            args: [6, 15]
          }
        }
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: ["[a-zA-Z Á-Úá-ú][^1234567890]+$"]
          }
        }
      },
      firstSurname: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: ["[a-zA-Z Á-Úá-ú][^1234567890]+$"]
          }
        }
      },
      secondSurname: {
        type: DataTypes.STRING(100),
        validate: {
          is: {
            args: ["[a-zA-Z Á-Úá-ú][^1234567890]+$"]
          }
        }
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          not: {
            args: ["[a-z]", "i"]
          }
        }
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        isEmail: true
        // validate: {
        //   unique: {
        //     msg: "Ya existe un correo así registrado."
        //   }
        // }
      },
      street: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      zipCode: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          not: {
            args: ["[a-z]", "i"]
          }
        }
      },
      comments: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["email"],
          msg: "Ya este email."
        }
      ]
    }
  );

  return Client;
};
