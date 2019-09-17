module.exports = function(sequelize, DataTypes) {
  const Suffering = sequelize.define("Suffering", {
    sufferingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Suffering.associate = function(models) {
    Suffering.belongsTo(models.Category, {
      foreignKey: "categoryId"
    });
    Suffering.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Suffering;
};
