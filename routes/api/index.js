const router = require("express").Router();
const storeRoutes = require("./storeRoutes");

// sotre routes
router.use("/storeRoutes", storeRoutes);

module.exports = router;