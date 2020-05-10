const router = require("express").Router();
const model = require("../../models");

// mngr_fetchCategoriesReport()
// matches with /managerapi/categories/report
router.get("/report", function (req, res) {
  model.Product.find({})
    .select("category")
    .sort({ category: 1 })
    .collation({ locale: "es" })
    .distinct("category")
    .then((data) => res.json(data.sort()))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
