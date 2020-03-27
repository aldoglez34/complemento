const router = require("express").Router();
const model = require("../../models");

// fetchManagerByUID()
// matches with /managerapi/manager/:uid
router.get("/:uid", function(req, res) {
  model.Manager.find({ firebaseUID: req.params.uid })
    .select("firebaseUID name firstSurname secondSurname email")
    .then(data => res.json(data[0]))
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Datos incorrectos"
      });
    });
});

module.exports = router;
