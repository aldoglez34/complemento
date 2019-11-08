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

// post new favorite in the logged user
// matches with /api/product/favorite/new
router.put("/favorite/new", (req, res) => {
  let client = req.body.client;
  let product = req.body.product;
  model.Client.findByIdAndUpdate(
    client,
    { $push: { favorites: product } },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// populate favorites
// matches with /api/product/favorites
router.get("/favorites", (req, res) => {
  model.Client.find({})
    .populate("favorites") // this will get all the data from the provider collection
    .then(data => res.json(data))
    .then(err => res.json(err));
});

module.exports = router;
