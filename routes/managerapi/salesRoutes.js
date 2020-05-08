const router = require("express").Router();
const model = require("../../models");

// mngr_fetchSales()
// matches with /managerapi/sales/all
router.get("/all", function (req, res) {
  model.Sale.find({})
    .sort({ saleDate: -1 })
    .populate("buyer.clientId products.product")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
