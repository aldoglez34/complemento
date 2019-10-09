const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
// get client details
// matches with /api/client/:uid
router.get("/:uid", function(req, res) {
  model.Client.findAll({
    where: { clientId: req.params.uid }
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// get client emails
// matches with /api/client/emails
router.get("/email/all", function(req, res) {
  model.Client.findAll({
    attributes: ["email"],
    order: [["email", "ASC"]]
  })
    .then(function(data) {
      let toFront = [];
      data.forEach(item => {
        toFront.push(item.email);
      });
      res.json(toFront);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
