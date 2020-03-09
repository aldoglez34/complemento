const router = require("express").Router();
const model = require("../../models");

// fetchItemsForSearchBar()
// matches with /api/navbar/searchbar/names
router.get("/searchbar/names", function(req, res) {
  model.Product.find({})
    .select("name")
    .sort({ name: -1 })
    .then(data => res.json(data))
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
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
