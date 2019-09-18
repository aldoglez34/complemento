module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        unique: {
          msg: "Ya existe una categoría con ese nombre."
        }
      }
    }
  });

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: "categoryId"
    });
  };

  return Category;
};
