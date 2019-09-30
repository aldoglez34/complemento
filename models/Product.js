module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50]
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dose: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1234),
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
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "placeholder.jpg"
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
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
