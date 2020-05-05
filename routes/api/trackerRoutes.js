const router = require("express").Router();
const model = require("../../models");

// trackSale()
// matches with /api/tracker/trackSale/:saleId
router.get("/trackSale/:saleId", function (req, res) {
  const { saleId } = req.params;
  model.Sale.findById(saleId)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
