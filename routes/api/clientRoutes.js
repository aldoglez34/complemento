const router = require("express").Router();
const model = require("../../models");

// fetchClientByUID()
// matches with /api/client/:uid
router.get("/:uid", function(req, res) {
  model.Client.find({ firebaseUID: req.params.uid })
    .select("name firstSurname secondSurname phone email address favorites")
    .then(data => res.json(data[0]))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// addFavorite()
// matches with /api/client/favorite/new
router.put("/favorite/new", (req, res) => {
  let clientId = req.body.clientId;
  let product = req.body.product;
  model.Client.findByIdAndUpdate(
    clientId,
    { $push: { favorites: product } },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchFavorites()
// matches with /api/client/favorites
router.get("/favorites/:clientId", (req, res) => {
  model.Client.findById(req.params.clientId)
    .populate("favorites") // this will get all the data from the provider collection
    .select("favorites")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// newClient()
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
    .then(data => {
      console.log("@todo bien", data);
      res.json(data);
    })
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
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
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// postMessage()
// matches with /api/client/message/new
router.post("/message/new", function(req, res) {
  model.Message.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
