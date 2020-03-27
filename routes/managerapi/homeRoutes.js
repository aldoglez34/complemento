const router = require("express").Router();
const model = require("../../models");

// mngr_fetchManagerByUID()
// matches with /managerapi/home/login/:uid
router.get("/login/:uid", function(req, res) {
  model.Manager.find({ firebaseUID: req.params.uid })
    .select("firebaseUID name firstSurname secondSurname email")
    .then(data => res.status(200).json(data[0]))
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Datos incorrectos"
      });
    });
});

module.exports = router;
