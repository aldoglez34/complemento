const router = require("express").Router();
const model = require("../models");

// get product
// matches with /api/product/details/:prod
router.get("/details/:prod", function(req, res) {
  model.Product.find({ _id: req.params.prod })
    .select(
      "category name content description sufferings ingredients salePrice stock photo brand discount"
    )
    .then(data => res.json(data[0]))
    .then(err => res.json(err));
});

module.exports = router;
