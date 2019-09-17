module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    ingredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Ingredient;
};
