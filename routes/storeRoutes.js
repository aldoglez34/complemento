const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
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

// ------------------------------------------------------------
// get unique sufferings from determined category
// matches with /api/store/sufferings/:categoryId
let deleteDuplicates = function(array) {
  let tempArray = [];
  array.forEach(element => {
    tempArray.push(element.name);
  });
  let uniqueArray = [...new Set(tempArray)];
  return uniqueArray;
};

let countAppearances = function(uniqueArray, data) {
  let finalArray = [];
  // handle all the sufferings
  let todos = {};
  todos.name = "Todos";
  todos.qty = data.length;
  finalArray.push(todos);
  // start looping
  uniqueArray.forEach(item => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (item === data[i].dataValues.name) {
        count++;
      }
    }
    let obj = {};
    obj.name = item;
    obj.qty = count;
    finalArray.push(obj);
  });
  return finalArray;
};

router.get("/brands", function(req, res) {
  model.Product.aggregate("brand", "DISTINCT", { plain: false })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/sufferings/:categoryId", function(req, res) {
  model.Suffering.findAll({
    attributes: ["name"],
    plain: false,
    where: { categoryId: req.params.categoryId },
    order: ["name"]
  })
    .then(function(data) {
      let uniqueSufferings = deleteDuplicates(data);
      let toFront = countAppearances(uniqueSufferings, data);
      res.json(toFront);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// get products with or without filters
// matches with /api/store/products/:cat/:suff
router.get("/products/:cat/:suff", function(req, res) {
  // check the 3 possible outcomes
  // 1 both cat and suff are null
  // 2 only suff is null
  // 3 none are null

  let cat = req.params.cat;
  let suff = req.params.suff;

  if (cat === "null" && suff === "null") {
    // send all products
    model.Product.findAll({
      include: [
        {
          model: model.Discount
        }
      ]
    }).then(function(data) {
      res.send(data);
    });
  }
  if (cat !== "null" && suff === "null") {
    // send products filtered by cat
    model.Product.findAll({
      include: [
        {
          model: model.Category,
          where: {
            name: cat
          }
        }
      ]
    }).then(function(data) {
      res.send(data);
    });
  }
  if (cat !== "null" && suff !== "null") {
    // send products filtered by cat and suff
  }
});

module.exports = router;
