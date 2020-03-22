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

// saveClientData()
// matches with /api/cart/saveClientData
router.put("/saveClientData", (req, res) => {
  const { data, clientId } = req.body;
  //
  model.Client.findByIdAndUpdate(
    clientId, // this is the _id of the user that is going to be updated
    {
      email: data.email,
      phone: data.phone,
      address: {
        street: data.street,
        neighborhood: data.neighborhood,
        municipality: data.municipality,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode
      }
    },
    { new: true } // returns the new document
  )
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// ===============================================================================================

// makeSale()
// matches with /api/cart/buy
router.post("/buy", function(req, res) {
  const { items, clientId, shipment, address } = req.body;

  // generate arr of ids
  const idsOnly = items.reduce((acc, cv) => {
    acc.push(cv._id);
    return acc;
  }, []);

  // search product prices
  model.Product.find()
    .select("price")
    .where("_id")
    .in(idsOnly)
    .then(data => {
      // merge arrays
      let mergedProducts = data.reduce((acc, cv) => {
        // search index of cv's _id in the items array (if not found this will return -1)
        let idx = items.findIndex(p => p._id.toString() === cv._id.toString());
        // if product not found, send 422 status
        if (idx !== -1) {
          acc.push({
            _id: cv._id,
            qty: items[idx].qty,
            salePrice: cv.price.discount.hasDiscount
              ? cv.price.discount.newPrice
              : cv.price.salePrice
          });
        } else {
          res.status(422).send({
            msg:
              "Lo sentimos. Ocurrió un error con alguno de los productos. Inténtalo de nuevo."
          });
        }
        return acc;
      }, []);
      // calculate subtotal, grand total and shipment and add address
      let subTotal = 0;
      mergedProducts.forEach((item, idx) => {
        let totalByProduct =
          mergedProducts[idx].qty * mergedProducts[idx].salePrice;
        mergedProducts[idx].totalByProduct = totalByProduct;
        subTotal += totalByProduct;
      });
      // create sale obj
      let sale = {
        products: mergedProducts,
        subTotal,
        shipment,
        grandTotal: subTotal + shipment,
        client: clientId,
        address: {
          street: address.street,
          neighborhood: address.neighborhood,
          municipality: address.municipality,
          city: address.city,
          state: address.state,
          zipCode: address.zipCode
        }
      };
      // create new sale
      return model.Sale.create(sale);
    })
    .then(data => {
      // update product stock
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const { products } = data;
      const idsOnly = products.reduce((acc, cv) => {
        acc.push(cv._id);
        return acc;
      }, []);
      return model.Product.update(
        { _id: { $in: idsOnly } },
        { $set: { stock: yourvisibility } },
        { multi: true }
      );
    })
    .then(() => res.status(200).send({ msg: "Compra realizada con éxito" }))
    .catch(err => {
      console.log("@err", err);
      res.status(422).send({
        msg:
          "Lo sentimos. Ocurrió un error con alguno de los productos. Inténtalo de nuevo."
      });
    });
});

// ?????????????????
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
