const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/authController");

// REGISTER || METHOD POST
router.route("/register").post(register);

// LOGIN || METHOD POST
router.route("/login").post(login);

// FORGOT PASSWORD || METHOD POST
router.route("/forgotpassword").post(forgotpassword);

// RESET PASSWORD || METHOD PUT
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
