const router = require("express").Router();
const model = require("../../models");

// fetchItemsForSearchBar()
// matches with /api/navbar/searchbar/names
router.get("/searchbar/names", function(req, res) {
  let data = {};
  model.Product.find({})
    .select("name")
    .distinct("name")
    .collation({ locale: "es" })
    .then(products => {
      data.products = products.sort((a, b) => a.localeCompare(b));
      return model.Product.find({})
        .select("category")
        .distinct("category")
        .collation({ locale: "es" });
    })
    .then(categories => {
      data.categories = categories.sort((a, b) => a.localeCompare(b));
      return model.Product.find({})
        .select("brand")
        .distinct("brand")
        .collation({ locale: "es" });
    })
    .then(brands => {
      data.brands = brands;
      res.json(data);
    })
    .catch(err => res.json(err));
});

// fetchItemsForCategoriesDropdown()
// matches with /api/navbar/dropdown/categories
router.get("/dropdown/categories", function(req, res) {
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

module.exports = router;
