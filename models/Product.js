module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dose: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unitsSold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aditionalInfo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
      type: DataTypes.INTEGER,
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

  Product.associate = function(models) {
    Product.hasOne(models.Category, {
      foreignKey: "categoryId"
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
