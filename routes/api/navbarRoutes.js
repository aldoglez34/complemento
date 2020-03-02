const router = require("express").Router();
const model = require("../../models");

// fetchItemsForSearchBar()
// matches with /api/navbar/itemsforsearchbar
router.get("/itemsforsearchbar", function(req, res) {
  model.Product.find({})
    .select("name")
    .sort({ name: -1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchItemsForStoreDropdown()
// matches with /api/navbar/itemsforstoredropdown
router.get("/itemsforstoredropdown", function(req, res) {
  model.Product.find({})
    .select("category")
    .distinct("category")
    .then(data => {
      let ordered = data.sort();
      res.json(ordered);
    })
    .catch(err => res.json(err));
});

module.exports = router;
