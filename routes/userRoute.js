const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/logIn", authController.logIn);
router.post("/signUp", authController.signUp);

module.exports = router;
