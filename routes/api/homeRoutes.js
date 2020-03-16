const router = require("express").Router();
const model = require("../../models");

// fetchPrioritized()
// matches with /api/home/prioritized
router.get("/prioritized", function(req, res) {
  model.Product.find({ priority: true })
    .limit(12)
    .sort({ createdAt: 1 })
    .select("category brand name content stock photo price")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchProductsWithDiscount()
// matches with /api/home/discounts
router.get("/discounts", function(req, res) {
  model.Product.find({ "price.discount.hasDiscount": true })
    .limit(12)
    .sort({ createdAt: 1 })
    .select("category brand name content stock photo price")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchBestSellers()
// matches with /api/home/bestsellers
router.get("/bestsellers", function(req, res) {
  model.Product.find({})
    .limit(12)
    .sort({ unitsSold: -1 })
    .select("category brand name content stock photo price")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
