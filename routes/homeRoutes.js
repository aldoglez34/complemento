const router = require("express").Router();
const model = require("../models");

// get discounts
// matches with /api/home/discounts
router.get("/discounts", function(req, res) {
  model.Discount.findAll({
    order: ["createdAt"],
    limit: 6
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// get best sellers
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
    model.Product.findAll({
      order: [["unitsSold", "DESC" ]],
      limit: 6
    })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.send(err);
      });
  });

module.exports = router;
