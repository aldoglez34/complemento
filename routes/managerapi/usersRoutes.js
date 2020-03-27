const router = require("express").Router();
const model = require("../../models");

// mngr_fetchClients()
// matches with /managerapi/users/clients/all
router.get("/clients/all", function(req, res) {
  model.Client.find({})
    .sort({ name: 1 })
    .populate("favorites")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_fetchManagers()
// matches with /managerapi/users/managers/all
router.get("/managers/all", function(req, res) {
  model.Manager.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
