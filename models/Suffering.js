module.exports = function(sequelize, DataTypes) {
  const Suffering = sequelize.define("Suffering", {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Suffering.associate = function(models) {
    Suffering.belongsTo(models.Product, {
      foreignKey: "productId"
    });
  };

  return Suffering;
};
