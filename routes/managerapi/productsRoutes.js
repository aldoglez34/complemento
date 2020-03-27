const router = require("express").Router();
const model = require("../../models");

// mngr_fetchProducts()
// matches with /managerapi/products/all
router.get("/all", function(req, res) {
  model.Product.find({})
    .sort({ name: 1 })
    .populate("provider")
    .collation({ locale: "es" })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_fetchCategories()
// matches with /managerapi/products/categories/all
router.get("/categories/all", function(req, res) {
  model.Product.aggregate([
    {
      $group: {
        _id: "$category",
        productCount: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        productCount: 1
      }
    }
  ])
    .collation({ locale: "es" })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_updateProduct()
// matches with /managerapi/products/update
router.put("/products/update", function(req, res) {
  // const {
  //   _id,
  //   name,
  //   purchasePrice,
  //   salePrice,
  //   content,
  //   brand,
  //   ingredients,
  //   priority,
  //   warning,
  //   description,
  //   dose
  // } = req.body;
  // model.Product.findByIdAndUpdate(_id, {
  //   name,
  //   purchasePrice,
  //   salePrice,
  //   content,
  //   brand,
  //   ingredients: ingredients.split(","),
  //   priority,
  //   warning,
  //   description,
  //   dose
  // })
  //   .then(data => res.json(data))
  //   .catch(err => {
  //     console.log("@error", err);
  //     res.status(422).send({ msg: "Ocurrió un error" });
  //   });
});

// mngr_newProduct()
// matches with /managerapi/products/new
router.post("/products/new", function(req, res) {
  // const {
  //   name,
  //   brand,
  //   content,
  //   comments,
  //   purchasePrice,
  //   salePrice,
  //   stock,
  //   priority,
  //   ingredients
  // } = req.body;
  // model.Product.create({
  //   name: req.body.name,
  //   brand: req.body.brand,
  //   content: req.body.content,
  //   comments: req.body.comments,
  //   purchasePrice: req.body.purchasePrice,
  //   salePrice: req.body.salePrice,
  //   stock: req.body.initialStock,
  //   priority: req.body.priority,
  //   ingredients: req.body.ingredients.split(","),
  //   discount: {
  //     hasDiscount: false
  //   },
  //   provider: req.body.provider,
  //   category: req.body.category
  // })
  //   .then(() => {
  //     return model.Category.findOneAndUpdate(
  //       req.body.category,
  //       { $inc: { productCount: 1 } },
  //       { new: true }
  //     );
  //   })
  //   .then(() => {
  //     return model.Provider.findByIdAndUpdate(
  //       req.body.provider,
  //       { $inc: { productCount: 1 } },
  //       { new: true }
  //     );
  //   })
  //   .then(data => res.json(data))
  //   .catch(err => {
  //     console.log("@error", err);
  //     res.status(422).send({ msg: "Ocurrió un error" });
  //   });
});

module.exports = router;
