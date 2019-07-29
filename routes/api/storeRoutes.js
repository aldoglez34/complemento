const router = require("express").Router();
const productController = require("../../controllers/productController");

router.route("/store")
    .get(productController.getAllCategories);

module.exports = router;