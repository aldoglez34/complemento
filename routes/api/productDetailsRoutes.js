const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails()
// matches with /api/product/details/:productId
router.get("/details/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select(
      "category brand name content warning stock photo price ingredients description dose"
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchSimilarProducts()
// matches with /api/product/similar/:category
router.get("/similar/:category", function(req, res) {
  model.Product.find({ category: req.params.category })
    .select(
      "category brand name content comments stock photo price sufferings ingredients"
    )
    .limit(8)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
