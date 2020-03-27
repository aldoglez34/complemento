const router = require("express").Router();
const model = require("../../models");

// fetchClientsManager()
// matches with /api/manager/clients/all
router.get("/clients/all", function(req, res) {
  model.Client.find({})
    .select(
      "name firstSurname secondSurname phone email address favorites createdAt"
    )
    .sort({ name: 1 })
    .populate("favorites")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchManagers()
// matches with /api/manager/managers/all
router.get("/managers/all", function(req, res) {
  model.Manager.find({})
    .select("name firstSurname secondSurname email")
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
