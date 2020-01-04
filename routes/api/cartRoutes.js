const router = require("express").Router();
const model = require("../../models");

// fetchProductDetails
// matches with /api/cart/product/:productId
router.get("/product/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select("name salePrice stock discount")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// buyProducts
// matches with /api/cart/buy
router.post("/buy", function(req, res) {
  let products = [];
  let subTotal = 0;
  // let address = {};

  req.body.products.map(p => {
    let temp = {
      _id: p._id,
      qty: p.qty,
      salePrice: p.discount.hasDiscount ? p.discount.newPrice : p.salePrice
    };
    subTotal += p.qty * temp.salePrice;
    products.push(temp);
  });

  const newPurchase = {
    products,
    subTotal,
    shipment: 70,
    grandTotal: subTotal + 70,
    client: req.body.client.isLogged ? req.body.client._id : null,
    address: req.body.client.isLogged
      ? {
          street: req.body.client.address.street,
          neighborhood: req.body.client.address.neighborhood,
          municipality: req.body.client.address.municipality,
          city: req.body.client.address.city,
          state: req.body.client.address.state,
          zipCode: req.body.client.address.zipCode
        }
      : {
          street: "N/A",
          neighborhood: "N/A",
          municipality: "N/A",
          city: "N/A",
          state: "N/A",
          zipCode: "N/A"
        }
  };

  model.Purchase.create({
    products: newPurchase.products,
    subTotal: newPurchase.subTotal,
    shipment: newPurchase.shipment,
    grandTotal: newPurchase.grandTotal,
    client: newPurchase.client,
    address: {
      street: newPurchase.address.street,
      neighborhood: newPurchase.address.neighborhood,
      municipality: newPurchase.address.municipality,
      city: newPurchase.address.city,
      state: newPurchase.address.state,
      zipCode: newPurchase.address.zipCode
    }
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
