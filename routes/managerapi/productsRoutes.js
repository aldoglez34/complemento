const router = require("express").Router();
const model = require("../../models");

// fetchManagerProducts()
// matches with /api/manager/products/all
router.get("/products/all", function(req, res) {
  model.Product.find({})
    .sort({ name: 1 })
    .populate("category provider")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// updateProduct()
// matches with /api/manager/products/update
router.put("/products/update", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    content: req.body.content,
    brand: req.body.brand,
    ingredients: req.body.ingredients.split(","),
    sufferings: req.body.sufferings.split(","),
    priority: req.body.priority,
    comments: req.body.comments
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// newProductManager()
// matches with /api/manager/products/new
router.post("/products/new", function(req, res) {
  model.Product.create({
    name: req.body.name,
    brand: req.body.brand,
    content: req.body.content,
    comments: req.body.comments,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    stock: req.body.initialStock,
    priority: req.body.priority,
    sufferings: req.body.sufferings.split(","),
    ingredients: req.body.ingredients.split(","),
    discount: {
      hasDiscount: false
    },
    provider: req.body.provider,
    category: req.body.category
  })
    .then(() => {
      return model.Category.findOneAndUpdate(
        req.body.category,
        { $inc: { productCount: 1 } },
        { new: true }
      );
    })
    .then(() => {
      return model.Provider.findByIdAndUpdate(
        req.body.provider,
        { $inc: { productCount: 1 } },
        { new: true }
      );
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
