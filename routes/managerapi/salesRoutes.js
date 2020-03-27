const router = require("express").Router();
const model = require("../../models");

// fetchSales()
// matches with /api/manager/sales/all
router.get("/sales/all", function(req, res) {
  model.Sale.find({})
    .sort({ saleDate: 1 })
    .populate("client products.product")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
