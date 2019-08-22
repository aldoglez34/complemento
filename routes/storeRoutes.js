const router = require("express").Router();
const model = require("../models");

// get all categories
// matches with /api/store/category/all
router.get("/category/all", function(req, res) {
  model.Category.findAll({
    attributes: ["categoryId", "name"],
    order: ["categoryId"]
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// get unique sufferings from determined category
// matches with /api/store/sufferings/:categoryId
router.get("/sufferings/:categoryId", function(req, res) {
  model.Suffering.findAll({
    attributes: ["name"],
    plain: false,
    where: { categoryId: req.params.categoryId },
    order: ["name"]
  }).then(function(data) {
    // delete duplicates
    let sufferingsArray = [];
    data.forEach(element => {
      sufferingsArray.push(element.name);
    });
    let uniqueSufferings = [...new Set(sufferingsArray)];
    res.json(uniqueSufferings);
  });
});

// get products by a category
// matches with /api/store/productsbycategory/:cat
router.get("/productsbycategory/:categoryId", function(req, res) {
  model.Product.findAll({
    // attributes: ["id"],
    where: {
      categoryId: req.params.categoryId
    }
  }).then(function(data) {
    res.json(data);
  });
});

module.exports = router;
