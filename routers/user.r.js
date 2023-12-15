const express = require("express");
const router = express.Router();
const userController = require("../controller/user.c");

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
});

router.get("/", userController.userPage); // User homepage
router.get("/information", userController.userInfo); // User information page
router.post("/search", userController.searchProductUser); // Searching on admin page

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      throw err;
    }
  });
  res.redirect("/");
});

module.exports = router;
