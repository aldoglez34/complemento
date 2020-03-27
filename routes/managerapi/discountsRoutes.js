const router = require("express").Router();
const model = require("../../models");

// fetchDiscountsManager()
// matches with /api/manager/discounts/all
router.get("/discounts/all", function(req, res) {
  model.Product.find({ "price.discount.hasDiscount": true })
    .sort({ name: 1 })
    .populate("category provider")
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// fetchNotDiscountsManager()
// matches with /api/manager/notdiscounts/all
router.get("/notdiscounts/all", function(req, res) {
  model.Product.find({ "price.discount.hasDiscount": false })
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// newDiscount()
// matches with /api/manager/discounts/new
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

// deleteDiscount()
// matches with /api/manager/discounts/delete
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

// updateDiscount()
// matches with /api/manager/discounts/update
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
