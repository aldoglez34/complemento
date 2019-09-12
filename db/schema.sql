DROP DATABASE IF EXISTS complement_db;
CREATE DATABASE complement_db;

USE complement_db;

DROP TABLE IF EXISTS complement_db.clients;
CREATE TABLE clients (
  clientId VARCHAR(60) NOT NULL,
  password VARCHAR(30) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(150) NOT NULL,
  phoneNumber VARCHAR(10) NOT NULL,
  email VARCHAR(100) NOT NULL,
  street VARCHAR(250) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zipCode VARCHAR(10) NOT NULL,
  comments VARCHAR(200) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (clientId)
);

DROP TABLE IF EXISTS complement_db.orders;
CREATE TABLE orders (
  orderId INT NOT NULL AUTO_INCREMENT,
  clientId VARCHAR(60) NOT NULL,
  grandTotal DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (orderId),
  FOREIGN KEY (clientId) REFERENCES clients(clientId)
);

DROP TABLE IF EXISTS complement_db.categories;
CREATE TABLE categories (
  categoryId INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (categoryId)
);

DROP TABLE IF EXISTS complement_db.products;
CREATE TABLE products (
  productId INT NOT NULL AUTO_INCREMENT,
  categoryId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  content VARCHAR(250) NULL,
  dose LONGTEXT NULL,
  description LONGTEXT NULL,
  price DECIMAL(10,2) NOT NULL,
  unitsSold INT NOT NULL,
  aditionalInfo VARCHAR(250) NULL,
  photo VARCHAR(250) NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (productId),
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)  
);

DROP TABLE IF EXISTS complement_db.discounts;
CREATE TABLE discounts (
  discountId INT NOT NULL AUTO_INCREMENT,
  productId INT NOT NULL,
  percentage INT NULL,
  newPrice DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (discountId),
  FOREIGN KEY (productId) REFERENCES products(productId)
);

DROP TABLE IF EXISTS complement_db.clientsOrders;
CREATE TABLE clientsOrders (
  orderId INT NOT NULL AUTO_INCREMENT,
  productId INT NOT NULL,
  unitPrice DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (orderId),
  FOREIGN KEY (productId) REFERENCES products(productId)
);

DROP TABLE IF EXISTS complement_db.sufferings;
CREATE TABLE sufferings (
  sufferingId INT NOT NULL AUTO_INCREMENT,
  categoryId INT NOT NULL,
  productId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (sufferingId),
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId),
  FOREIGN KEY (productId) REFERENCES products(productId)  
);

DROP TABLE IF EXISTS complement_db.ingredients;
CREATE TABLE ingredients (
  ingredientId INT NOT NULL AUTO_INCREMENT,
  productId INT NOT NULL,
  scientificName VARCHAR(250) NULL,
  commonName VARCHAR(250) NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (ingredientId),
  FOREIGN KEY (productId) REFERENCES products(productId)
);