module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define(
    "Category",
    {
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
        validate: {
          notNull: {
            msg: "La categoría no puede ser nula"
          },
          notEmpty: {
            msg: "La categoría no puede estar vacía"
          }
        },
        unique: {
          msg: "La categoría ya existe"
        }
      }
    },
    {
      unique: true,
      fields: ["email"]
    }
  );

  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      foreignKey: "categoryId"
    });
  };

  return Category;
};
