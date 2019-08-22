DROP DATABASE IF EXISTS complement_db;
CREATE DATABASE complement_db;

USE complement_db;

DROP TABLE IF EXISTS complement_db.clients;
CREATE TABLE clients (
  clientId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName	 VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL,
  address VARCHAR(250) NOT NULL,
  zipCode VARCHAR(10) NOT NULL,
  phoneNumber VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (clientId)
);

DROP TABLE IF EXISTS complement_db.orders;
CREATE TABLE orders (
  orderId INT NOT NULL AUTO_INCREMENT,
  clientId INT NOT NULL,
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
  aditionalInfo VARCHAR(250) NULL,
  photo VARCHAR(250) NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (productId),
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)  
);

DROP TABLE IF EXISTS complement_db.clientsOrders;
CREATE TABLE clientsOrders (
  orderId INT NOT NULL,
  productId INT NOT NULL,
  unitPrice DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (orderId) REFERENCES orders(orderId),
  FOREIGN KEY (productId) REFERENCES products(productId)
);

DROP TABLE IF EXISTS complement_db.sufferings;
CREATE TABLE sufferings (
  categoryId INT NOT NULL,
  productId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (productId) REFERENCES products(productId),
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);

DROP TABLE IF EXISTS complement_db.ingredients;
CREATE TABLE ingredients (
  productId INT NOT NULL,
  scientificName VARCHAR(250) NULL,
  commonName VARCHAR(250) NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (productId) REFERENCES products(productId)
);