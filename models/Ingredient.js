module.exports = function (sequelize, DataTypes) {

    const Ingredient = sequelize.define("Ingredient", {
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
        Ingredient.hasOne(models.Product, {
            foreignKey: "productId"
        });
    };

    return Ingredient;
};