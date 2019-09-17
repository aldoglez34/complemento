module.exports = function(sequelize, DataTypes) {
  const Discount = sequelize.define("Discount", {
    discountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 10,
        max: 80
      }
    },
    newPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  Discount.associate = function(models) {
    Discount.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Discount;
};
