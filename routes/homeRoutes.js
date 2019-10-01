const router = require("express").Router();
const Sequelize = require("sequelize");
const model = require("../models");
const Op = Sequelize.Op;

// get oustanding
// matches with /api/home/prioritized
// kinda like an inner join discount as discount where discount.newPrice is not null
router.get("/prioritized", function(req, res) {
  model.Product.findAll({
    attributes: [
      "productId",
      "categoryId",
      "name",
      "content",
      "dose",
      "description",
      "salePrice",
      "stock",
      "photo",
      "brand",
      "priority"
    ],
    where: {
      priority: {
        [Op.is]: true
      }
    },
    order: ["createdAt"],
    limit: 5,
    include: [
      {
        model: model.Discount
      }
    ]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// get latest discounts
// matches with /api/home/discounts
// kinda like an inner join discount as discount where discount.newPrice is not null
router.get("/discounts", function(req, res) {
  model.Product.findAll({
    attributes: [
      "productId",
      "categoryId",
      "name",
      "content",
      "dose",
      "description",
      "salePrice",
      "stock",
      "photo",
      "brand"
    ],
    order: ["createdAt"],
    limit: 5,
    include: [
      {
        model: model.Discount,
        where: {
          newPrice: {
            [Sequelize.Op.ne]: null
          }
        }
      }
    ]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// get best selllers
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
  model.Product.findAll({
    attributes: [
      "productId",
      "categoryId",
      "name",
      "content",
      "dose",
      "description",
      "salePrice",
      "stock",
      "photo",
      "brand"
    ],
    order: [["unitsSold", "DESC"]],
    limit: 5,
    include: [
      {
        model: model.Discount
      }
    ]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
