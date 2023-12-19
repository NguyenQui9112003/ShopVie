const express = require("express");
const router = express.Router();
const userController = require("../controller/user.c");

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    req.username = req.user.Username; 
    req.email = req.user.Email; 
    return next();
  }
  res.redirect("/");
});

router.get("/", userController.userPage); // User homepage
router.get("/information", userController.userInfo); // User information page
router.post("/update", userController.updateUserInfo); // Update user infomation
router.post("/search", userController.searchProductUser); // Search

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      throw err;
    }
  });
  res.redirect("/login");
});

module.exports = router;
