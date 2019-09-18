const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
// get all categories
// matches with /api/manager/category/all
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

// ------------------------------------------------------------
// save new category
// matches with /api/manager/category/new
router.post("/category/new", function(req, res) {
  // console.log(req.body.catName);
  model.Category.create({
    name: req.body.name
  })
    .then(function(res) {
      res.json(res);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
