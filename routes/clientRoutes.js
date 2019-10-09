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
      let toFrontArr = [];
      data.forEach(item => {
        toFrontArr.push(item.email);
      });
      let toFrontObj = {};
      toFrontObj.emails = toFrontArr;
      res.json(toFrontObj);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// ------------------------------------------------------------
// save new client
// matches with /api/client/new
router.post("/new", function(req, res) {
  model.Client.create({
    clientId: req.body.clientId,
    name: req.body.clientName,
    firstSurname: req.body.firstSurname,
    secondSurname: req.body.secondSurname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    street: req.body.street,
    neighborhood: req.body.neighborhood,
    municipality: req.body.municipality,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode
  })
    .then(function(res) {
      res.json(res);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
