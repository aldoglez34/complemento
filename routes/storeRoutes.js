const router = require("express").Router();
const model = require("../models");
const Sequelize = require("sequelize");

// ------------------------------------------------------------
// get all categories
// matches with /api/store/category/all
router.get("/category/all", function(req, res) {
  model.Category.findAll({
    attributes: {
      include: [
        [
          Sequelize.fn("COUNT", Sequelize.col("products.productId")),
          "productCount"
        ]
      ]
    },
    include: [
      {
        model: model.Product,
        attributes: []
      }
    ],
    group: ["categoryId"]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// get all brands
// matches with /api/store/brands
router.get("/brands", function(req, res) {
  model.Product.aggregate("brand", "DISTINCT", { plain: false })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// get products with or without filters
// matches with /api/store/products/:cat
router.get("/products/:cat", function(req, res) {
  // check the 2 possible outcomes
  // 1 cat is null
  // 2 cat is NOT null

  let cat = req.params.cat;

  if (cat === "null") {
    // send all products
    model.Product.findAll({
      include: [
        {
          model: model.Discount
        }
      ]
    }).then(function(data) {
      res.send(data);
    });
  }
  if (cat !== "null") {
    // send products filtered by cat
    model.Product.findAll({
      include: [
        {
          model: model.Category,
          where: {
            name: cat
          }
        }
      ]
    }).then(function(data) {
      res.send(data);
    });
  }
});

module.exports = router;
