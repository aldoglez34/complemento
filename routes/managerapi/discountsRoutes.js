const router = require("express").Router();
const model = require("../../models");

// mngr_fetchDiscounts()
// matches with /managerapi/discounts/all
router.get("/all", function(req, res) {
  const data = {};

  model.Product.find({ "price.discount.hasDiscount": true })
    .sort({ name: 1 })
    .populate("provider")
    .then(discounts => {
      data.discounts = discounts;
      return model.Product.find({ "price.discount.hasDiscount": false });
    })
    .then(noDiscounts => {
      data.noDiscounts = noDiscounts;
      res.json(data);
    })
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_newDiscount()
// matches with /managerapi/discounts/new
router.put("/discounts/new", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    price: {
      discount: {
        hasDiscount: true,
        percentage: req.body.percentage,
        newPrice: req.body.newPrice
      }
    }
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_deleteDiscount()
// matches with /managerapi/discounts/delete
router.put("/discounts/delete", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    price: {
      discount: {
        hasDiscount: false
      }
    }
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_updateDiscount()
// matches with /managerapi/discounts/update
router.put("/discounts/update", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    price: {
      discount: {
        hasDiscount: false,
        percentage: req.body.percentage,
        newPrice: req.body.newPrice
      }
    }
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
