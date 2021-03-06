const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails()
// matches with /api/product/details/:productId
router.get("/details/:productId", function (req, res) {
  model.Product.findById(req.params.productId)
    .where({ active: true })
    .select(
      "category brand name content warning stock photo price ingredients description dose"
    )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchSimilarProducts()
// matches with /api/product/similar/:category
router.get("/similar/:category", function (req, res) {
  model.Product.find({ category: req.params.category })
    .where({ active: true })
    .select(
      "category brand name content comments stock photo price sufferings ingredients"
    )
    .limit(8)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
