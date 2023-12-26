const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin.c");

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
});

router.get("/", adminController.adminPage); // Admin homepage
router.get("/add", adminController.add); // Add product page
router.post("/update", adminController.update); // Update product page
router.post("/delete", adminController.deleteProduct); // Deleting product
router.post("/adding", adminController.addProduct); // Adding product
router.post("/updating", adminController.updateProduct); // Updating product
router.post("/search", adminController.searchProductAdmin); // Searching on admin page

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      throw err;
    }
  });
  res.redirect("/login");
});

module.exports = router;
