const router = require("express").Router();
const model = require("../../models");

// fetchProvidersManager()
// matches with /api/manager/providers/all
router.get("/providers/all", function(req, res) {
  model.Provider.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// updateProvider()
// matches with /api/manager/providers/update
router.put("/providers/update", function(req, res) {
  model.Provider.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    fullAddress: req.body.fullAddress,
    rfc: req.body.rfc,
    email: req.body.email,
    phone: req.body.phone
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// newProvider()
// matches with /api/manager/providers/new
router.post("/providers/new", async function(req, res) {
  model.Provider.create({
    name: req.body.name,
    rfc: req.body.rfc,
    email: req.body.email,
    phone: req.body.phone,
    fullAddress: req.body.fullAddress
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
