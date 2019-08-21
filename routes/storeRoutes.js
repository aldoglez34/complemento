const router = require("express").Router();
const model = require("../models");

// get all categories
// matches with /api/store/category/all
router.get("/category/all", function(req, res) {
  model.Category.findAll({
    attributes: ["id", "name"],
    order: ["id"]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// get products by a category
// matches with /api/store/productsbycategory/:cat
router.get("/productsbycategory/:cat", function(req, res) {
  model.Category.findAll({
    attributes: ["id", "name"],
    order: ["id"]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
