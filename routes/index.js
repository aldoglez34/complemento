const router = require("express").Router();
const storeRoutes = require("./api/storeRoutes");
const productRoutes = require("./api/productRoutes");
const homeRoutes = require("./api/homeRoutes");
const clientRoutes = require("./api/clientRoutes");
const managerRoutes = require("./api/managerRoutes");
const navbarRoutes = require("./api/navbarRoutes");

router.use("/api/store", storeRoutes);
router.use("/api/product", productRoutes);
router.use("/api/home", homeRoutes);
router.use("/api/client", clientRoutes);
router.use("/api/manager", managerRoutes);
router.use("/api/navbar", navbarRoutes);

module.exports = router;
