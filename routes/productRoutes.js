const router = require("express").Router();
const model = require("../models");

// get product
// matches with /api/product/details/:productId
router.get("/details/:productId", function(req, res) {
  // model.Product.findOne({
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
  //     productId: req.params.productId
  //   },
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

// ------------------------------------------------------------
// matches with /api/product/sufferings/:productId
router.get("/sufferings/:productId", function(req, res) {
  // model.Suffering.findAll({
  //   attributes: ["name"],
  //   where: {
  //     productId: req.params.productId
  //   }
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

// get ingredients
// matches with /api/product/details/ingredients/:productId
router.get("/details/ingredients/:productId", function(req, res) {
  // model.Ingredient.findAll({
  //   attributes: ["name"],
  //   where: {
  //     productId: req.params.productId
  //   }
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

module.exports = router;
