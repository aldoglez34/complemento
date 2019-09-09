module.exports = function(sequelize, DataTypes) {
  const Discount = sequelize.define("Discount", {
    discountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    newPrice: {
      type: DataTypes.FLOAT,
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

  Discount.associate = function(models) {
    Discount.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Discount;
};
