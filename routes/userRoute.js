const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/logIn", authController.logIn);
router.post("/signUp", authController.signUp);

router.delete("/deleteUsers", userController.deleteAllUsers);
router.get("/allUsers", authController.protect, userController.getAll)

module.exports = router;
