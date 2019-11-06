const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
// get all categories
// matches with /api/store/categories
router.get("/categories", function(req, res) {
  // ===========================================================================
  // model.Product.find({})
  //   .sort({ name: 1 })
  //   .select("category name")category
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err));
  // model.Product.findAll({
  //   attributes: [
  //     ["category", "name"],
  //     [Sequelize.fn("COUNT", Sequelize.col("category")), "productCount"]
  //   ],
  //   group: ["category"],
  //   order: [["category", "ASC"]]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
  // ===========================================================================
  model.Product.aggregate([
    {
      $group: {
        _id: "$category",
        productCount: { $sum: 1 }
      }
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
  // ===========================================================================
});

// ------------------------------------------------------------
// get all brands
// matches with /api/store/brands
router.get("/brands", function(req, res) {
  // model.Product.findAll({
  //   attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("brand")), "name"]],
  //   order: [["brand", "ASC"]]
  // })
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.send(err);
  //   });
});

// ------------------------------------------------------------
// get products with or without filters
// matches with /api/store/products/:cat
router.get("/products/:cat", function(req, res) {
  // check the 2 possible outcomes
  // 1 cat is null
  // 2 cat is NOT null
  // let cat = req.params.cat;
  // if (cat === "null") {
  //   // send all products
  //   model.Product.findAll({
  //     attributes: [
  //       "productId",
  //       "category",
  //       "name",
  //       "content",
  //       "description",
  //       "salePrice",
  //       "stock",
  //       "photo",
  //       "brand",
  //       "priority"
  //     ],
  //     order: [["name", "ASC"]],
  //     include: [
  //       {
  //         model: model.Discount
  //       }
  //     ]
  //   }).then(function(data) {
  //     res.send(data);
  //   });
  // }
  // if (cat !== "null") {
  //   // send products filtered by cat
  //   model.Product.findAll({
  //     attributes: [
  //       "productId",
  //       "category",
  //       "name",
  //       "content",
  //       "description",
  //       "salePrice",
  //       "stock",
  //       "photo",
  //       "brand",
  //       "priority"
  //     ],
  //     order: [["name", "ASC"]],
  //     where: {
  //       category: cat
  //     }
  //   }).then(function(data) {
  //     res.send(data);
  //   });
  // }
});

module.exports = router;
