const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails
// matches with /api/cart/product/:productId
router.get("/product/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select("name content salePrice stock discount")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
