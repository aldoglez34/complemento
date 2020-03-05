const router = require("express").Router();
const model = require("../../models");

// fetchCartProduct()
// matches with /api/cart/product/:productId
router.get("/product/:productId", function(req, res) {
  model.Product.findById(req.params.productId)
    .select("name price stock")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchCartProductTest()
// matches with /api/cart/products
router.get("/products", function(req, res) {
  console.log("@req.body", req.body);
  console.log("@req.headers", req.headers);
  console.log("@req.query", req.query);
  // console.dir(req.headers);
  // model.Product.findById(req.params.productId)
  //   .select("name price stock")
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err));
});

// buyProducts()
// matches with /api/cart/buy
router.post("/buy", function(req, res) {
  let products = [];
  let subTotal = 0;

  req.body.products.map(p => {
    let temp = {
      product: p._id,
      qty: p.qty,
      salePrice: p.price.discount.hasDiscount
        ? p.price.discount.newPrice
        : p.price.salePrice
    };
    subTotal += p.qty * temp.salePrice;
    products.push(temp);
  });

  const newSale = {
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

  model.Sale.create({
    products: newSale.products,
    subTotal: newSale.subTotal,
    shipment: newSale.shipment,
    grandTotal: newSale.grandTotal,
    client: newSale.client,
    address: {
      street: newSale.address.street,
      neighborhood: newSale.address.neighborhood,
      municipality: newSale.address.municipality,
      city: newSale.address.city,
      state: newSale.address.state,
      zipCode: newSale.address.zipCode
    }
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// updateStock()
// matches with /api/cart/update/stock
router.put("/update/stock", function(req, res) {
  let updateAll = new Promise((resolve, reject) => {
    req.body.forEach((value, index, array) => {
      model.Product.findByIdAndUpdate(value._id, {
        $inc: { unitsSold: value.qty, stock: -Math.abs(value.qty) }
      }).catch(err => res.json(err));
      if (index === array.length - 1) resolve();
    });
  });
  updateAll.then(data => res.json(data)).catch(err => res.json(err));
});

module.exports = router;
