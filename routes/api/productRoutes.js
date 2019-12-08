const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails
// matches with /api/product/details/:productId
router.get("/details/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select(
      "category name content comments sufferings ingredients salePrice stock photo brand discount"
    )
    .populate("category")
    .then(data => res.json(data))
    .then(err => res.json(err));
});

module.exports = router;
