const router = require("express").Router();
const Sequelize = require("sequelize");
const model = require("../models");

// get top 6 latest discounts
// matches with /api/home/discounts
// kinda like an inner join discount as discount where discount.newPrice is not null
router.get("/discounts", function(req, res) {
  model.Product.findAll({
    order: ["createdAt"],
    limit: 6,
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

// get top 6 best sellers
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
  model.Product.findAll({
    order: [["unitsSold", "DESC"]],
    limit: 6,
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
