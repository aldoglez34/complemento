const router = require("express").Router();
const Sequelize = require("sequelize");
const model = require("../models");
const Op = Sequelize.Op;

// get prioritized products
// matches with /api/home/prioritized
router.get("/prioritized", function(req, res) {
  model.Product.find({ priority: true })
    .limit(10)
    .sort({ createdAt: 1 })
    .select(
      "category brand name content description salePrice stock photo discount"
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
  // model.Product.findAll({
  //   attributes: [
  //     "productId",
  //     "category",
  //     "name",
  //     "content",
  //     "description",
  //     "salePrice",
  //     "stock",
  //     "photo",
  //     "brand"
  //   ],
  //   where: {
  //     priority: {
  //       [Op.is]: true
  //     }
  //   },
  //   order: ["createdAt"],
  //   limit: 5,
  //   include: [
  //     {
  //       model: model.Discount
  //     }
  //   ]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

// get latest discounts
// matches with /api/home/discounts
// kinda like an inner join discount as discount where discount.newPrice is not null
router.get("/discounts", function(req, res) {
  // model.Product.findAll({
  //   attributes: [
  //     "productId",
  //     "category",
  //     "name",
  //     "content",
  //     "description",
  //     "salePrice",
  //     "stock",
  //     "photo",
  //     "brand"
  //   ],
  //   order: ["createdAt"],
  //   limit: 5,
  //   include: [
  //     {
  //       model: model.Discount,
  //       where: {
  //         newPrice: {
  //           [Sequelize.Op.ne]: null
  //         }
  //       }
  //     }
  //   ]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

// get best selllers
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
  // model.Product.findAll({
  //   attributes: [
  //     "productId",
  //     "category",
  //     "name",
  //     "content",
  //     "description",
  //     "salePrice",
  //     "stock",
  //     "photo",
  //     "brand"
  //   ],
  //   order: [["unitsSold", "DESC"]],
  //   limit: 5,
  //   include: [
  //     {
  //       model: model.Discount
  //     }
  //   ]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

module.exports = router;
