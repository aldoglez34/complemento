const router = require("express").Router();
const model = require("../../models");

// =========================================================================
// =========================================================================
// manager

// fetchManagerByUID()
// matches with /api/manager/:uid
router.get("/:uid", function(req, res) {
  model.Manager.find({ firebaseUID: req.params.uid })
    .select("firebaseUID name firstSurname secondSurname email")
    .then(data => res.json(data[0]))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// categories

// fetchCategoriesManager()
// matches with /api/manager/categories/all
router.get("/categories/all", function(req, res) {
  model.Category.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// updateCategory()
// matches with /api/manager/categories/update
router.put("/categories/update", function(req, res) {
  model.Category.findByIdAndUpdate(req.body._id, {
    name: req.body.name
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// newCategory()
// matches with /api/manager/categories/new
router.post("/categories/new", function(req, res) {
  model.Category.create({ name: req.body.name })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// products

// fetchProductsManager()
// matches with /api/manager/products/all
router.get("/products/all", function(req, res) {
  model.Product.find({})
    .sort({ name: 1 })
    .populate("category provider")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// updateProduct()
// matches with /api/manager/products/update
router.put("/products/update", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    category: req.body.category,
    content: req.body.content,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    brand: req.body.brand,
    stock: req.body.stock,
    photo: req.body.photo,
    description: req.body.description
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// providers

// fetchProvidersManager()
// matches with /api/manager/providers/all
router.get("/providers/all", function(req, res) {
  model.Provider.find({})
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// updateProvider()
// matches with /api/manager/providers/update
router.put("/providers/update", function(req, res) {
  model.Provider.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    fullAddress: req.body.fullAddress,
    rfc: req.body.rfc,
    email: req.body.email,
    phone: req.body.phone
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
