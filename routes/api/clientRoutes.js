const router = require("express").Router();
const model = require("../../models");

// fetchClientByUID()
// matches with /api/client/:uid
router.get("/:uid", function(req, res) {
  model.Client.find({ firebaseUID: req.params.uid })
    .select("name firstSurname secondSurname phone email address favorites")
    .then(data => res.json(data[0]))
    .catch(err => res.json(err));
});

// addFavorite()
// matches with /api/client/favorite/new
router.put("/favorite/new", (req, res) => {
  let client = req.body.client;
  let product = req.body.product;
  model.Client.findByIdAndUpdate(
    client,
    { $push: { favorites: product } },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchFavorites()
// matches with /api/client/favorites
router.get("/favorites/:clientId", (req, res) => {
  model.Client.findById(req.params.clientId)
    .populate("favorites") // this will get all the data from the provider collection
    .select("favorites")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

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

// saveNewClient()
// matches with /api/client/new
router.post("/new", function(req, res) {
  model.Client.create({
    firebaseUID: req.body.firebaseUID,
    name: req.body.clientName,
    firstSurname: req.body.firstSurname,
    secondSurname: req.body.secondSurname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    address: {
      street: req.body.street,
      neighborhood: req.body.neighborhood,
      municipality: req.body.municipality,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode
    }
  })
    .then(function(res) {
      res.json(res);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// updateClient()
// matches with /api/client/update
router.put("/update", function(req, res) {
  model.Client.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    firstSurname: req.body.firstSurname,
    secondSurname: req.body.secondSurname,
    phone: req.body.phone,
    address: {
      street: req.body.street,
      neighborhood: req.body.neighborhood,
      municipality: req.body.municipality,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode
    }
  })
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
