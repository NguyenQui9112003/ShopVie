const express = require("express");
const router = express.Router();
const guestController = require("../controller/guest.c");

router.get("/", guestController.guestPage); // Guest homepage
router.get("/login", guestController.loginPage); // Login
router.post("/search", guestController.searchProductGuest); // Searching on guest page
router.get("/signup", guestController.signupPage); // Login

module.exports = router;
