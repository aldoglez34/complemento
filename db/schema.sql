DROP DATABASE IF EXISTS complement_db;
CREATE DATABASE complement_db;

USE complement_db;

DROP TABLE IF EXISTS complement_db.clients;
CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS complement_db.orders;
CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  clientId INT NOT NULL,
  grandTotal DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (clientId) REFERENCES clients(id)
);

DROP TABLE IF EXISTS complement_db.categories;
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS complement_db.products;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
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
  FOREIGN KEY (categoryId) REFERENCES categories(id),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS complement_db.clientsOrders;
CREATE TABLE clientsOrders (
  orderId INT NOT NULL,
  productId INT NOT NULL,
  unitPrice DECIMAL(10,2) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (orderId) REFERENCES orders(id),
  FOREIGN KEY (productId) REFERENCES products(id)
);

DROP TABLE IF EXISTS complement_db.sufferings;
CREATE TABLE sufferings (
  categoryId INT NOT NULL,
  productId INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);

DROP TABLE IF EXISTS complement_db.ingredients;
CREATE TABLE ingredients (
  productId INT NOT NULL,
  scientificName VARCHAR(250) NULL,
  commonName VARCHAR(250) NULL,
  createdAt DATE NULL,
  updatedAt DATE NULL,
  FOREIGN KEY (productId) REFERENCES products(id)
);