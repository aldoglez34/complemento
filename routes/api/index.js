const router = require("express").Router();
const storeRoutes = require("./storeRoutes");

// User routes
router.use("/storeRoutes", storeRoutes);

module.exports = router;