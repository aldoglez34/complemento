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
        products: {
          $push: { category: "$category", _id: "$_id" },
          $push: { category: "$category", photo: "$photo" },
          $push: { category: "$category", name: "$name" },
        },
      },
    },
    {
      $sort: { _id: 1 }, // sort by _id (in this case is category)
    },
    {
      $project: {
        _id: 0,
        category: "$_id", // use this change the name of _id to name (kinda like "as name" in sql)
        productCount: 1,
        products: 1,
      },
    },
  ])
    .then((data) => {
      // console.log("@categories", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
