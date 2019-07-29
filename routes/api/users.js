const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/api/login")
  .post(userController.loginuser);

router.route("/api/signup")
  .post(userController.signup);

router.route("/logout")
  .get(userController.logout);

router.route("/api/user_data")
  .get(userController.userdata);

module.exports = router;