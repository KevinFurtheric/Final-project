const express = require("express");
const { createUser, getUser } = require("../controllers/usercontroller");
const router = express.Router();

router.post("/users", createUser);
router.get("/users/:username", getUser);

module.exports = router;
