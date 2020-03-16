const router = require("express").Router();
const model = require("../../models");

// fetchCategories()
// matches with /api/store/categories
router.get("/categories", function(req, res) {
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
    .catch(err => res.json(err));
});

// fetchBrands()
// matches with /api/store/brands
router.get("/brands", function(req, res) {
  model.Product.aggregate([
    {
      $group: {
        _id: "$brand",
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
    .catch(err => res.json(err));
});

// fetchProducts()
// matches with /api/store/products
router.get("/products", function(req, res) {
  model.Product.find({})
    .select("category name content price stock photo brand priority unitsSold ingredients")
    .sort({ name: 1 })
    .collation({ locale: "es" })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
