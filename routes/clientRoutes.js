const router = require("express").Router();
const model = require("../models");

// ------------------------------------------------------------
// get client details
// matches with /api/client/:uid
router.get("/:uid", function(req, res) {
  model.Client.findOne({
    firebaseUID: req.params.uid
  })
    .select(
      "firebaseUID name firstSurname secondSurname phone email address favorites"
    )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// ------------------------------------------------------------
// get client emails
// matches with /api/client/email/all
router.get("/email/all", function(req, res) {
  model.Client.find({})
    .sort({ email: 1 })
    .select("email")
    .then(function(data) {
      // let toFrontArr = [];
      // data.forEach(item => {
      //   toFrontArr.push(item.email);
      // });
      // let toFrontObj = {};
      // toFrontObj.emails = toFrontArr;
      // res.json(toFrontObj);
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// ------------------------------------------------------------
// save new client
// matches with /api/client/new
router.post("/new", function(req, res) {
  // model.Client.create({
  //   clientId: req.body.clientId,
  //   name: req.body.clientName,
  //   firstSurname: req.body.firstSurname,
  //   secondSurname: req.body.secondSurname,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   password: req.body.password,
  //   street: req.body.street,
  //   neighborhood: req.body.neighborhood,
  //   municipality: req.body.municipality,
  //   city: req.body.city,
  //   state: req.body.state,
  //   zipCode: req.body.zipCode
  // })
  //   .then(function(res) {
  //     res.json(res);
  //   })
  //   .catch(function(err) {
  //     res.json(err);
  //   });
});

// update client
// matches with /api/client/update
router.put("/update", function(req, res) {
  // model.Client.update(
  //   {
  //     name: req.body.name,
  //     firstSurname: req.body.firstSurname,
  //     secondSurname: req.body.secondSurname,
  //     phone: req.body.phone,
  //     street: req.body.street,
  //     neighborhood: req.body.neighborhood,
  //     municipality: req.body.municipality,
  //     city: req.body.city,
  //     state: req.body.state,
  //     zipCode: req.body.zipCode
  //   },
  //   {
  //     where: {
  //       clientId: req.body.clientId
  //     }
  //   }
  // )
  //   .then(function(data) {
  //     res.json(data);
  //   })
  //   .catch(function(err) {
  //     res.json(err);
  //   });
});

module.exports = router;
