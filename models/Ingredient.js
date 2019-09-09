module.exports = function (sequelize, DataTypes) {

    const Ingredient = sequelize.define("Ingredient", {
        ingredientId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER
        },
        scientificName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        commonName: {
            type: DataTypes.STRING,
            allowNull: true
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

    Ingredient.associate = function (models) {
        Ingredient.belongsTo(models.Product, {
            foreignKey: "productId"
        });
    };

    return Ingredient;
};