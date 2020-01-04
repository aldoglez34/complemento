const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails
// matches with /api/product/details/:productId
router.get("/details/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select(
      "name content salePrice stock discount category sufferings ingredients comments photo brand"
    )
    .populate("category")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchSimilarProducts
// matches with /api/product/similar/:category
router.get("/similar/:categoryId", function(req, res) {
  model.Product.find({ category: req.params.categoryId })
    .select(
      "name content salePrice stock discount category sufferings ingredients comments photo brand"
    )
    .populate("category")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
