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
router.get("/cart", userController.showCart) // Show cart
router.post("/addtocart", userController.addToCart)
router.post('/removecart', userController.removeFromCart)

router.get("/logout", userController.deleteCart, (req, res) => {
  req.logout((err) => {
    if (err) {
      throw err;
    }
  });
  res.redirect("/login");
});

module.exports = router;
