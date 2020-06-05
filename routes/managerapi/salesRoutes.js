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
router.get("/chart/currentWeek", function (req, res) {
  const moment = require("moment");
  moment.locale("es");
  // moment().format("LLLL");

  const today = moment(Date.now()).format("dddd");
  console.log("today", today);
  const number = moment(Date.now()).format("d");
  console.log("number", number);
  const lastWeek = moment(Date.now()).subtract(7, "days").calendar();
  console.log("lastWeek", lastWeek);

  // switch (today) {
  //   case "lunes":
  //     console.log("hoy es lunes");
  //     break;
  //   case "martes":
  //     console.log("hoy es martes");
  //     break;
  //   case "miércoles":
  //     console.log("hoy es miércoles");
  //     break;
  //   case "jueves":
  //     console.log("hoy es jueves");
  //     console.log(number - 4);

  //     break;
  //   case "viernes":
  //     console.log("hoy es viernes");
  //     break;
  //   case "sábado":
  //     console.log("hoy es sábado");
  //     break;
  //   case "domingo":
  //     console.log("hoy es domingo");
  //     break;
  // }

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
