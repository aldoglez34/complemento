module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Ingredient;
};
