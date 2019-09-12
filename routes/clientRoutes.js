const router = require("express").Router();
const model = require("../models");

// get client details
// matches with /api/client/:uid
router.get("/:uid", function (req, res) {
    model.Client.findAll({
        where: { clientId: req.params.uid }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;
