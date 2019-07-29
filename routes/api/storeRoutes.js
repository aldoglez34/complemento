const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/api/categories")
    .get(productController.getAllCategories);

module.exports = router;