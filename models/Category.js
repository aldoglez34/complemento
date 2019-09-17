module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ["^[a-z]+$", "i"]
    }
  });

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: "categoryId"
    });
  };

  return Category;
};
