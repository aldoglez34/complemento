const router = require("express").Router();
const model = require("../../models");

// get prioritized products
// matches with /api/home/prioritized
router.get("/prioritized", function(req, res) {
  model.Product.find({ priority: true })
    .limit(20)
    .sort({ createdAt: 1 })
    .select(
      "category brand name content description salePrice stock photo discount"
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// get latest discounts
// matches with /api/home/discounts
router.get("/discounts", function(req, res) {
  model.Product.find({ "discount.hasDiscount": true })
    .limit(20)
    .sort({ createdAt: 1 })
    .select(
      "category brand name content description salePrice stock photo discount"
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// get best selllers
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
  model.Product.find({})
    .limit(20)
    .sort({ unitsSold: -1 })
    .select(
      "category brand name content description salePrice stock photo discount"
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
