module.exports = function (sequelize, DataTypes) {

    const Category = sequelize.define("Category", {
         categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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

    return Category;
};