const router = require("express").Router();
const model = require("../models");


// get products by a category
// matches with /api/product/:productId
router.get("/:productId", function (req, res) {
    model.Product.findOne({
        where: {
            productId: req.params.productId
        }
    }).then(function (data) {
        res.json(data);
    });
});


module.exports = router;
