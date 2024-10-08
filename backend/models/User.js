const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
