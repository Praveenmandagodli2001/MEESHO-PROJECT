const express = require("express");
const router = express.Router();
const { signup, signin, forgotPassword, resetPassword } = require("../controllers/userController");

// Seller routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);

module.exports = router;
