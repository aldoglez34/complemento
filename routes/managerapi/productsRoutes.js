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
router.put("/update", function (req, res) {
  // get data from body
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
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploadsss/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("file");

router.post("/new", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log("A Multer error occurred when uploading.");
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log("An unknown error occurred when uploading.");
    }
    // console.log("req", req);
    console.log("Everything went fine.");
  });
});

// router.post("/new", upload, function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log("--------------doing stuff");
//   console.log("req.files", req.files); // JSON Object
//   console.log("req.file", req.file); // JSON Object
// });

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

module.exports = router;
