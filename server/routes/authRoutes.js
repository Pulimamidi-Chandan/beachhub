const express = require("express");
const { register, login,getUserProfile,updateUserProfile } = require("../controllers/authController");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/profile/:id", getUserProfile);
router.put("/profile/:id", updateUserProfile);
module.exports = router;