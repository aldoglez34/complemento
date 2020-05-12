const router = require("express").Router();
const model = require("../../models");

// mngr_fetchProducts()
// matches with /managerapi/products/all
router.get("/all", function (req, res) {
  model.Product.find({})
    .sort({ name: 1 })
    .populate("provider")
    .collation({ locale: "es" })
    .then((products) => {
      // removing tildes
      let clean = products.reduce((acc, cv) => {
        acc.push({
          _id: cv._id,
          active: cv.active,
          name: cv.name,
          cleanName: cv.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          price: cv.price,
          ingredients: cv.ingredients,
          unitsSold: cv.unitsSold,
          priority: cv.priority,
          createdAt: cv.createdAt,
          provider: cv.provider,
          category: cv.category,
          brand: cv.brand,
          content: cv.content,
          warning: cv.warning,
          stock: cv.stock,
          description: cv.description,
          dose: cv.dose,
          photo: cv.photo,
        });
        return acc;
      }, []);
      res.json(clean);
    })
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_fetchCategories()
// matches with /managerapi/products/categories/all
router.get("/categories/all", function (req, res) {
  model.Product.find({})
    .select("category")
    .sort({ category: 1 })
    .collation({ locale: "es" })
    .distinct("category")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_updateProduct()
// matches with /managerapi/products/update
router.put("/products/update", function (req, res) {
  // get data frmo body
  const {
    _id,
    name,
    content,
    purchasePrice,
    salePrice,
    brand,
    ingredients,
    priority,
    warning,
    description,
    dose,
  } = req.body;
  // update product
  model.Product.findByIdAndUpdate(_id, {
    name,
    purchasePrice,
    salePrice,
    content,
    brand,
    ingredients: ingredients.split(","),
    priority,
    warning,
    description,
    dose,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_newProduct()
// matches with /managerapi/products/new
router.post("/products/new", function (req, res) {
  // const {
  //   name,
  //   brand,
  //   content,
  //   comments,
  //   purchasePrice,
  //   salePrice,
  //   stock,
  //   priority,
  //   ingredients
  // } = req.body;
  // model.Product.create({
  //   name: req.body.name,
  //   brand: req.body.brand,
  //   content: req.body.content,
  //   comments: req.body.comments,
  //   purchasePrice: req.body.purchasePrice,
  //   salePrice: req.body.salePrice,
  //   stock: req.body.initialStock,
  //   priority: req.body.priority,
  //   ingredients: req.body.ingredients.split(","),
  //   discount: {
  //     hasDiscount: false
  //   },
  //   provider: req.body.provider,
  //   category: req.body.category
  // })
  //   .then(() => {
  //     return model.Category.findOneAndUpdate(
  //       req.body.category,
  //       { $inc: { productCount: 1 } },
  //       { new: true }
  //     );
  //   })
  //   .then(() => {
  //     return model.Provider.findByIdAndUpdate(
  //       req.body.provider,
  //       { $inc: { productCount: 1 } },
  //       { new: true }
  //     );
  //   })
  //   .then(data => res.json(data))
  //   .catch(err => {
  //     console.log("@error", err);
  //     res.status(422).send({ msg: "Ocurrió un error" });
  //   });
});

// mngr_activateProduct()
// matches with /apimanager/products/active/:productId
router.put("/products/activate/:productId", function (req, res) {
  console.log("activando!!!!");
  const { productId } = req.body;
  model.Product.findByIdAndUpdate(productId, {
    active: true,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_desactivateProduct()
// matches with /apimanager/products/active/:productId
router.put("/products/desactivate/:productId", function (req, res) {
  console.log("desactivando!!!!");
  const { productId } = req.body;
  model.Product.findByIdAndUpdate(productId, {
    active: false,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
