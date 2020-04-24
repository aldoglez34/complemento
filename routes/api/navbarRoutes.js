const router = require("express").Router();
const model = require("../../models");

// fetchItemsForSearchBar()
// matches with /api/navbar/searchbar/names
router.get("/searchbar/names", function (req, res) {
  let data = {};
  model.Product.find({})
    .select("name")
    .sort({ name: 1 })
    .collation({ locale: "es" })
    .then((products) => {
      // removing tildes
      data.products = products.reduce((acc, cv) => {
        acc.push({
          _id: cv._id,
          name: cv.name,
          cleanName: cv.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        });
        return acc;
      }, []);
      //
      return model.Product.find({}).select("ingredients");
    })
    .then((ingredients) => {
      // extract all ingredients into an array
      let ings = ingredients
        .reduce((acc, cv) => {
          acc.push(...cv.ingredients);
          return acc;
        }, [])
        .sort((a, b) => a.localeCompare(b));
      // delete duplicates
      let uniqueIngredients = [...new Set(ings)];
      // delete tildes
      data.ingredients = uniqueIngredients.reduce((acc, cv) => {
        acc.push({
          name: cv,
          cleanName: cv.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        });
        return acc;
      }, []);
      //
      res.json(data);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchItemsForStoreDropdown()
// matches with /api/navbar/dropdown/store
router.get("/dropdown/store", function (req, res) {
  model.Product.aggregate([
    {
      $group: {
        _id: "$category",
        productCount: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        productCount: 1,
      },
    },
  ])
    .collation({ locale: "es" })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
