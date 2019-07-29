const db = require("../models");

module.exports = {

    getAllCategories: function (req, res) {
        db.Category.findAll({
            attributes: ["id", "name"],
            order: ["id"]
        }).then(function (data) {
            res.json(data);
        });
    },

};