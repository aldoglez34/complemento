const router = require("express").Router();
const model = require("../../models");

const generateArrays = str => {
  // this fn receives a str and return two arrays
  // generate an array of cart items with their quantities
  let cartObjs = str.split(",").reduce((acc, cv) => {
    acc.push({
      _id: cv.split("-")[0],
      qty: Number(cv.split("-")[1])
    });
    return acc;
  }, []);
  // generate an array with only ids of cart items
  let idsOnly = str.split(",").reduce((acc, cv) => {
    acc.push(cv.split("-")[0]);
    return acc;
  }, []);
  //
  return { cartObjs, idsOnly };
};

// fetchCartProducts()
// matches with /api/cart/products/:cartStr
router.get("/products/:cartStr", function(req, res) {
  const { cartObjs, idsOnly } = generateArrays(req.params.cartStr);
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
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// checkProducts()
// matches with /api/cart/checkStock/:cartStr
router.get("/checkStock/:cartStr", (req, res) => {
  const { cartObjs, idsOnly } = generateArrays(req.params.cartStr);
  // fetch data from db
  model.Product.find()
    .select("stock name")
    .where("_id")
    .in(idsOnly)
    .then(data => {
      // merge arrays
      let merged = data.reduce((acc, cv) => {
        // search index of cv's _id in the cartObjs array (if not found this will return -1)
        let idx = cartObjs.findIndex(
          p => p._id.toString() === cv._id.toString()
        );
        // merge arrays
        // if product not found, send 422 status
        if (idx !== -1) {
          acc.push({
            _id: cv._id,
            name: cv.name,
            stock: cv.stock,
            qty: cartObjs[idx].qty
          });
        } else {
          res.status(422).send({ msg: "Ocurrió un error" });
        }
        return acc;
      }, []);
      // check if qty is greater than stock in any of the items
      // or if any product is sold out
      let notEnoughStock = merged.reduce((acc, cv) => {
        if (cv.qty > cv.stock && cv.stock !== 0) acc.push(cv);
        return acc;
      }, []);
      let zeroStock = merged.reduce((acc, cv) => {
        if (cv.stock === 0) acc.push(cv);
        return acc;
      }, []);

      if (notEnoughStock.length || zeroStock.length) {
        res.status(422).json({ notEnoughStock, zeroStock });
      } else {
        res.status(200).json({ msg: "All good" });
      }
    })
    .catch(err => {
      res.status(422).send({ msg: "Ocurrió un error" });
      console.log(err);
    });
});

// makeSale()
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
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
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
  updateAll
    .then(data => res.json(data))
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
