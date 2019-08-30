const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
// get all categories
// matches with /api/store/category/all
router.get("/category/all", function (req, res) {
  model.Category.findAll({
    attributes: ["categoryId", "name"],
    order: ["categoryId"]
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// get unique sufferings from determined category
// matches with /api/store/sufferings/:categoryId

let deleteDuplicates = function (array) {
  let tempArray = [];
  array.forEach(element => {
    tempArray.push(element.name);
  });
  let uniqueArray = [...new Set(tempArray)];
  return uniqueArray;
};

let countAppearances = function (uniqueArray, data) {
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

router.get("/sufferings/:categoryId", function (req, res) {
  model.Suffering.findAll({
    attributes: ["name"],
    plain: false,
    where: { categoryId: req.params.categoryId },
    order: ["name"]
  }).then(function (data) {
    let uniqueSufferings = deleteDuplicates(data);
    let toFront = countAppearances(uniqueSufferings, data);
    res.json(toFront);
  });
});

// ------------------------------------------------------------
// get products by a category and a suffering
// matches with /api/store/products/:categoryId/:suffering
router.get("/products/:categoryId/:suffering", function (req, res) {

  let suffering = req.params.suffering;

  if (suffering === "Todos") {
    // load all products without taking account of the suffering
    // simple consult of select *
    model.Product.findAll({
      where: {
        categoryId: req.params.categoryId
      }
    }).then(function (data) {
      res.json(data);
    });
  } else {
    // first create an association
    model.Product.hasMany(model.Suffering, { foreignKey: "productId" });
    // this is like a join
    model.Product.findAll({
      include: [{
        model: model.Suffering,
        where: {
          name: req.params.suffering,
          categoryId: req.params.categoryId
        }
      }]
    }).then(function (data) {
      res.json(data);
    });
  }

});

module.exports = router;
