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
  model.Category.create({
    name: req.body.name
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// products

// fetchManagerProducts()
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
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    content: req.body.content,
    brand: req.body.brand,
    ingredients: req.body.ingredients.split(","),
    sufferings: req.body.sufferings.split(","),
    priority: req.body.priority,
    comments: req.body.comments
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// newProductManager()
// matches with /api/manager/products/new
router.post("/products/new", function(req, res) {
  model.Product.create({
    name: req.body.name,
    brand: req.body.brand,
    content: req.body.content,
    comments: req.body.comments,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    stock: req.body.initialStock,
    priority: req.body.priority,
    sufferings: req.body.sufferings.split(","),
    ingredients: req.body.ingredients.split(","),
    discount: {
      hasDiscount: false
    },
    provider: req.body.provider,
    category: req.body.category
  })
    .then(() => {
      model.Category.findOneAndUpdate(
        req.body.category,
        { $inc: { productCount: 1 } },
        { new: true }
      )
        .then(() =>
          model.Provider.findByIdAndUpdate(
            req.body.provider,
            { $inc: { productCount: 1 } },
            { new: true }
          )
            .then(data => res.json(data))
            .catch(err => res.json(err))
        )
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// discounts

// fetchDiscountsManager()
// matches with /api/manager/discounts/all
router.get("/discounts/all", function(req, res) {
  // model.Product.find({ discount: { hasDiscount: true } })
  model.Product.find({ "discount.hasDiscount": true })
    .sort({ name: 1 })
    .populate("category provider")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchNotDiscountsManager()
// matches with /api/manager/notdiscounts/all
router.get("/notdiscounts/all", function(req, res) {
  model.Product.find({ "discount.hasDiscount": false })
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// newDiscount()
// matches with /api/manager/discounts/new
router.put("/discounts/new", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    discount: {
      hasDiscount: true,
      percentage: req.body.percentage,
      newPrice: req.body.newPrice
    }
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// deleteDiscount()
// matches with /api/manager/discounts/delete
router.put("/discounts/delete", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    discount: {
      hasDiscount: false
    }
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// updateDiscount()
// matches with /api/manager/discounts/update
router.put("/discounts/update", function(req, res) {
  model.Product.findByIdAndUpdate(req.body._id, {
    discount: {
      hasDiscount: false,
      percentage: req.body.percentage,
      newPrice: req.body.newPrice
    }
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

// newProvider()
// matches with /api/manager/providers/new
router.post("/providers/new", async function(req, res) {
  // try {
  //   const { name, rfc, email, phone, fullAddress } = req.body;

  //   let provider = await model.Provider.findOne({ name });
  //   if (provider) return res.status(400).json({ error: "El nombre ya existe" });

  //   provider = await model.Provider.findOne({ rfc });
  //   if (provider) return res.status(400).send({ error: "El RFC ya existe" });

  //   provider = await model.Provider.findOne({ email });
  //   if (provider) return res.status(400).send({ error: "El correo ya existe" });

  //   provider = new Provider({ name, rfc, email, phone, fullAddress });

  //   await provider.save();

  //   res.status(201).json({ message: "El proveedor fue creado con éxito" });
  // } catch (error) {
  //   res.status(500).json({ error });
  // }
  model.Provider.create({
    name: req.body.name,
    rfc: req.body.rfc,
    email: req.body.email,
    phone: req.body.phone,
    fullAddress: req.body.fullAddress
  })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// users

// fetchClientsManager()
// matches with /api/manager/clients/all
router.get("/clients/all", function(req, res) {
  model.Client.find({})
    .select(
      "name firstSurname secondSurname phone email address favorites createdAt"
    )
    .sort({ name: 1 })
    .populate("favorites")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchManagers()
// matches with /api/manager/managers/all
router.get("/managers/all", function(req, res) {
  model.Manager.find({})
    .select("name firstSurname secondSurname email")
    .sort({ name: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// fetchMessages()
// matches with /api/manager/messages/all
router.get("/messages/all", function(req, res) {
  model.Message.find({})
    .sort({ sentAt: 1 })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// =========================================================================
// =========================================================================
// sales

// fetchSales()
// matches with /api/manager/sales/all
router.get("/sales/all", function(req, res) {
  model.Sale.find({})
    .sort({ saleDate: 1 })
    .populate("client products.product")
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
