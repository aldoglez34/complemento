const router = require("express").Router();

// api
const storeRoutes = require("./api/storeRoutes");
const cartRoutes = require("./api/cartRoutes");
const productDetailsRoutes = require("./api/productDetailsRoutes");
const homeRoutes = require("./api/homeRoutes");
const clientRoutes = require("./api/clientRoutes");
const navbarRoutes = require("./api/navbarRoutes");

// manager api
const mngr_homeRoutes = require("./managerapi/homeRoutes");
const mngr_productsRoutes = require("./managerapi/productsRoutes");
const mngr_categoriesRoutes = require("./managerapi/categoriesRoutes");
const mngr_providersRoutes = require("./managerapi/providersRoutes");
const mngr_usersRoutes = require("./managerapi/usersRoutes");
const mngr_messagesRoutes = require("./managerapi/messagesRoutes");
const mngr_salesRoutes = require("./managerapi/salesRoutes");

// api
router.use("/api/store", storeRoutes);
router.use("/api/cart", cartRoutes);
router.use("/api/product", productDetailsRoutes);
router.use("/api/home", homeRoutes);
router.use("/api/client", clientRoutes);
router.use("/api/navbar", navbarRoutes);

// managerapi
router.use("/managerapi/home", mngr_homeRoutes);
router.use("/managerapi/products", mngr_productsRoutes);
router.use("/managerapi/categories", mngr_categoriesRoutes);
router.use("/managerapi/providers", mngr_providersRoutes);
router.use("/managerapi/users", mngr_usersRoutes);
router.use("/managerapi/messages", mngr_messagesRoutes);
router.use("/managerapi/sales", mngr_salesRoutes);

module.exports = router;
