const router = require("express").Router();
const model = require("../../models");

// mngr_fetchProviders()
// matches with /managerapi/providers/all
router.get("/all", function (req, res) {
  model.Provider.find({})
    .sort({ name: 1 })
    .collation({ locale: "es" })
    .then((providers) => {
      providers.reduce((acc, cv) => {
        //
        model.Product.countDocuments({ provider: cv._id });
        //
        acc.push({
          _id: cv.createdAt,
          name: cv.name,
          fullAddress: cv.fullAddress,
          rfc: cv.rfc,
          email: cv.email,
          phone: cv.phone,
          createdAt: cv.createdAt,
        });
        return acc;
      }, []);
      res.status(200).json(providers);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_updateProvider()
// matches with /managerapi/providers/update
router.put("/update", function (req, res) {
  const { _id, name, fullAddress, rfc, email, phone } = req.body;

  model.Provider.findByIdAndUpdate(_id, {
    name,
    fullAddress,
    rfc,
    email,
    phone,
  })
    .then((editedProvider) =>
      res.status(200).send({
        msg: "El proveedor fue editado correctamente.",
        editedProvider,
      })
    )
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_newProvider()
// matches with /managerapi/providers/new
router.post("/new", async function (req, res) {
  const { name, rfc, email, phone, fullAddress } = req.body;

  model.Provider.create({
    name: name,
    rfc: rfc,
    email: email,
    phone: phone,
    fullAddress: fullAddress,
  })
    .then(() => {
      res.status(200).send({
        msg: "El proveedor fue creado correctamente.",
      });
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
