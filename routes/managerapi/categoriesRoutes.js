const router = require("express").Router();
const model = require("../../models");

// mngr_fetchCategoriesReport()
// matches with /managerapi/categories/report
router.get("/report", function (req, res) {
  model.Product.aggregate([
    {
      $group: {
        _id: "$category",
        productCount: { $sum: 1 },
      },
      {
        $sort: { _id: 1 } // sort by _id (in this case is category)
      },
    },
  ])
    .then((data) => {
      console.log("@categories", data);
      // res.json(toFront);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
