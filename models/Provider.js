module.exports = function(sequelize, DataTypes) {
  const Provider = sequelize.define("Provider", {
    providerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    rfc: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      isEmail: true
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  });

  return Provider;
};
