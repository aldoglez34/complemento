const router = require("express").Router();
const model = require("../models");

// get discounts
// matches with /api/home/discounts
router.get("/discounts", function (req, res) {

    model.Discount.findAll({
        order: ["createdAt"],
        limit: 10
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });

});

module.exports = router;
