module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    purchasePrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    salePrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unitsSold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "placeholder.jpg"
    },
    brand: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priority: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Provider, {
      foreignKey: "providerId"
    });
    Product.hasMany(models.Suffering, {
      foreignKey: "productId"
    });
    Product.hasOne(models.Discount, {
      foreignKey: "productId"
    });
  };

  return Product;
};
