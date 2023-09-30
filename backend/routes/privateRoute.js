const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/privateController");
const { protect } = require("../middleware/protectAuth");

router.route("/").get(protect, getPrivateData);

module.exports = router;
