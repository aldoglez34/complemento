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

// mngr_fetchOneProduct()
// matches with /managerapi/products/getOne/:productId
router.get("/getOne/:productId", function (req, res) {
  const { productId } = req.params;
  model.Product.findById(productId)
    .populate("provider")
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_newProduct()
// matches with /managerapi/products/new
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./client/public/images/products",
  filename: function (req, file, cb) {
    // cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    // set the name of the file
    cb(null, req.body.photo);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 },
}).single("file");

router.post("/new", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("ERROR - A Multer error occurred when uploading.");
      res.status(422).send({ msg: "Ocurrió un error." });
    } else if (err) {
      console.log("ERROR - An unknown error occurred when uploading.");
      res.status(422).send({ msg: "Ocurrió un error." });
    }
    // everything went fine
    // no errors
    model.Product.create({
      name: req.body.name,
      price: {
        latestPurchasePrice: req.body.purchasePrice,
        salePrice: req.body.salePrice,
      },
      category: req.body.category,
      brand: req.body.brand,
      content: req.body.content,
      provider: req.body.provider,
      ingredients: req.body.ingredients.split(","),
      stock: req.body.stock,
      priority: req.body.priority,
      photo: req.body.photo,
      dose: req.body.dose,
      description: req.body.description,
      warning: req.body.warning,
    })
      .then(() => res.send({ msg: "El producto fue creado con éxito." }))
      .catch(() => {
        console.log("@error", err);
        res.status(422).send({ msg: "Ocurrió un error" });
      });
  });
});

// mngr_updateProduct()
// matches with /managerapi/products/update
router.put("/update", function (req, res) {
  // update product
  model.Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    price: {
      latestPurchasePrice: req.body.purchasePrice,
      salePrice: req.body.salePrice,
    },
    category: req.body.category,
    brand: req.body.brand,
    content: req.body.brand,
    provider: req.body.provider,
    ingredients: req.body.ingredients.split(","),
    stock: req.body.stock,
    priority: req.body.priority,
    photo: req.body.photo,
    dose: req.body.dose,
    description: req.body.description,
    warning: req.body.warning,
  })
    .then(() => res.send({ msg: "El producto fue editado con éxito." }))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_deactivateProduct()
// matches with /managerapi/products/deactivate/:productId
router.put("/deactivate/:productId", function (req, res) {
  const { productId } = req.params;
  model.Product.findByIdAndUpdate(productId, {
    active: false,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// discounts

// mngr_fetchDiscounts()
// matches with /managerapi/products/discounts/all
router.get("/discounts/all", function (req, res) {
  model.Product.find({})
    .where({ "price.discount.hasDiscount": false })
    .sort({ name: 1 })
    .collation({ locale: "es" })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_newDiscount()
// matches with /managerapi/products/discounts/new
router.put("/discounts/new", function (req, res) {
  // console.log("@mngr_newDiscount", req.body);
  model.Product.findByIdAndUpdate(req.body.productId, {
    "price.discount.hasDiscount": true,
    "price.discount.startDate": req.body.formattedStartDate,
    "price.discount.endDate": req.body.formattedEndDate,
    "price.discount.percentage": req.body.percentage,
    "price.discount.newPrice": req.body.newPrice,
  })
    .then((data) => res.send({ msg: "El descuento fue aplicado con éxito." }))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_activateProduct()
// matches with /managerapi/products/activate/:productId
router.put("/activate/:productId", function (req, res) {
  const { productId } = req.params;
  model.Product.findByIdAndUpdate(productId, {
    active: true,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
