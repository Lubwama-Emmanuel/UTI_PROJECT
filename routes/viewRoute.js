const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authController = require('../controllers/authController')

router.get('/logIn', viewController.logIn)
router.get('/signUp', viewController.signUp)
router.get("/dashboard", viewController.dashboard)

module.exports = router;
