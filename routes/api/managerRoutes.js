const router = require("express").Router();
const model = require("../../models");

// fetchManagerByUID()
// matches with /api/manager/:uid
router.get("/:uid", function(req, res) {
  model.Manager.find({ firebaseUID: req.params.uid })
    .select("firebaseUID name firstSurname secondSurname email")
    .then(data => res.json(data[0]))
    .catch(err => res.json(err));
});

// fetchProductsManager()
// matches with /api/manager/products/all
router.get("/products/all", function(req, res) {
  model.Product.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// ------------------------------------------------------------
// get all categories
// matches with /api/manager/category/all
router.get("/category/all", function(req, res) {
  // model.Category.findAll({
  //   attributes: ["categoryId", "name"],
  //   order: ["categoryId"]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

// ------------------------------------------------------------
// save new category
// matches with /api/manager/category/new
router.post("/category/new", function(req, res) {
  // console.log(req.body.catName);
  // model.Category.create({
  //   name: req.body.name
  // })
  //   .then(function(res) {
  //     res.json(res);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

module.exports = router;
