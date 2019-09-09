module.exports = function (sequelize, DataTypes) {
  const Suffering = sequelize.define("Suffering", {
    sufferingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Suffering.associate = function (models) {
    Suffering.belongsTo(models.Category, {
      foreignKey: "categoryId"
    });
    Suffering.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Suffering;
};
