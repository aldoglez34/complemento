const router = require("express").Router();
const model = require("../../models");

// fetchCartProducts()
// matches with /api/cart/products/:cartStr
router.get("/products/:cartStr", function(req, res) {
  // generate an array of cart items with thei quantities
  let cartObjs = req.params.cartStr.split(",").reduce((acc, cv) => {
    acc.push({
      _id: cv.split("-")[0],
      qty: Number(cv.split("-")[1])
    });
    return acc;
  }, []);
  // generate an array with only ids of cart items
  let idsOnly = req.params.cartStr.split(",").reduce((acc, cv) => {
    acc.push(cv.split("-")[0]);
    return acc;
  }, []);
  // consult list of ids in mongodb
  model.Product.find()
    .select("name price stock photo")
    .where("_id")
    .in(idsOnly)
    .then(data => {
      // generate cart items report with subtotals
      // then sort it by product name
      let cartItems = data
        .reduce((acc, cv) => {
          let index = cartObjs
            .map(obj => obj._id.toString())
            .indexOf(cv._id.toString());
          acc.push({
            _id: cv._id,
            name: cv.name,
            stock: cv.stock,
            photo: cv.photo,
            qty: Number(cartObjs[index].qty),
            price: cv.price.discount.hasDiscount
              ? cv.price.discount.newPrice
              : cv.price.salePrice,
            discountPercentage: cv.price.discount.hasDiscount
              ? cv.price.discount.percentage
              : null,
            subTotal: cv.price.discount.hasDiscount
              ? cv.price.discount.newPrice * Number(cartObjs[index].qty)
              : cv.price.salePrice * Number(cartObjs[index].qty)
          });
          return acc;
        }, [])
        .sort((a, b) => {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      // send result
      res.json(cartItems);
    })
    .catch(err => res.status(422).send(err));
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
