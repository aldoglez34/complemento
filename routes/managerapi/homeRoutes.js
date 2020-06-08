const router = require("express").Router();
const model = require("../../models");

// mngr_fetchManagerByUID()
// matches with /managerapi/home/login/:uid
router.get("/login/:uid", function (req, res) {
  model.Manager.find({ firebaseUID: req.params.uid })
    .select("firebaseUID name firstSurname secondSurname email")
    .then((data) => {
      if (!data[0]) {
        res.status(422);
      } else {
        res.status(200).json(data[0]);
      }
    })
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Datos incorrectos",
      });
    });
});

// mngr_fetchLatestProduct()
// matches with /managerapi/home/dashboard/latestProduct
router.get("/dashboard/latestProduct", function (req, res) {
  model.Product.find({})
    .select("name category content createdAt photo provider")
    .sort({ createdAt: -1 })
    .limit(1)
    .populate("provider")
    .then((data) => res.status(200).json(data[0]))
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Ocurrió un error",
      });
    });
});

// mngr_fetchLastProvider()
// matches with /managerapi/home/dashboard/lastProvider
router.get("/dashboard/lastProvider", function (req, res) {
  model.Provider.find({})
    .select("name email phone fullAddress createdAt")
    .sort({ createdAt: -1 })
    .limit(1)
    .then((data) => res.status(200).json(data[0]))
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Ocurrió un error",
      });
    });
});

// mngr_fetchLastSale()
// matches with /managerapi/home/dashboard/lastSale
router.get("/dashboard/lastSale", function (req, res) {
  model.Sale.find({})
    .select("saleDate grandTotal products status buyer")
    .sort({ saleDate: -1 })
    .limit(1)
    .then((data) => res.status(200).json(data[0]))
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Ocurrió un error",
      });
    });
});

// mngr_fetchLastClient()
// matches with /managerapi/home/dashboard/lastClient
router.get("/dashboard/lastClient", function (req, res) {
  model.Client.find({})
    .select("name firstSurname secondSurname phone email createdAt")
    .sort({ createdAt: -1 })
    .limit(1)
    .then((data) => res.status(200).json(data[0]))
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Ocurrió un error",
      });
    });
});

// mngr_fetchLastMessage()
// matches with /managerapi/home/dashboard/lastMessage
router.get("/dashboard/lastMessage", function (req, res) {
  model.Message.find({})
    .select("sentAt name email subject")
    .sort({ sentAt: -1 })
    .limit(1)
    .then((data) => res.status(200).json(data[0]))
    .catch((err) => {
      console.log("@err", err);
      res.status(422).send({
        msg: "Ocurrió un error",
      });
    });
});

module.exports = router;
