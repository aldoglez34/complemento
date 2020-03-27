const router = require("express").Router();
const model = require("../../models");

// fetchCategoriesManager()
// matches with /api/manager/categories/all
router.get("/categories/all", function(req, res) {
  model.Category.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// updateCategory()
// matches with /api/manager/categories/update
router.put("/categories/update", function(req, res) {
  model.Category.findByIdAndUpdate(req.body._id, {
    name: req.body.name
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// newCategory()
// matches with /api/manager/categories/new
router.post("/categories/new", function(req, res) {
  model.Category.create({
    name: req.body.name
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
