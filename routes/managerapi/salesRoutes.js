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

// mngr_currentWeekChart()
// matches with /managerapi/sales/chart/currentWeek

router.get("/chart/currentWeek", async (req, res) => {
  const moment = require("moment");
  moment.locale("es");

  const today = moment().endOf("day");
  const lastWeek = moment(Date.now()).subtract(7, "days").startOf("day");

  const saleData = await model.Sale.find({
    saleDate: {
      $gte: lastWeek,
      $lt: today,
    },
    status: { $ne: "Cancelado" },
  })
    .select("grandTotal saleDate")
    .sort({ saleDate: -1 });

  res.json(saleData);
});

module.exports = router;
