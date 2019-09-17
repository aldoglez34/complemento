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
      type: DataTypes.STRING(1234),
      allowNull: false,
      defaultValue: "No hay dosis disponible."
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: false,
      defaultValue: "No hay descripción disponible."
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unitsSold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aditionalInfo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No hay información adicional disponible."
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "placeholder.jpg"
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
