const router = require("express").Router();
const model = require("../../models");

// mngr_fetchPurchases()
// matches with /managerapi/purchases/all
router.get("/all", function(req, res) {
  model.Purchase.find({})
    .sort({ createdAt: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
