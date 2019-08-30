const router = require("express").Router();
const model = require("../models");


// get products by a category
// matches with /api/product/details/:productId
router.get("/details/:productId", function (req, res) {
    model.Product.findOne({
        where: {
            productId: req.params.productId
        }
    }).then(function (data) {
        res.json(data);
    });
});

// get products by a category
// matches with /api/product/details/ingredients/:productId
router.get("/details/ingredients/:productId", function (req, res) {
    model.Ingredient.findAll({
        attributes: ["scientificName", "commonName"],
        where: {
            productId: req.params.productId
        }
    }).then(function (data) {
        let scientificIngredients = [];
        let commonIngredients = [];
        data.forEach(function (ing) {
            if (ing.commonName)
                commonIngredients.push(ing.commonName);
            if (ing.scientificName)
                scientificIngredients.push(ing.scientificName);
        });
        let toFront = {};
        toFront.scientificIngredients = scientificIngredients;
        toFront.commonIngredients = commonIngredients;
        res.json(toFront);
    });
});


module.exports = router;
