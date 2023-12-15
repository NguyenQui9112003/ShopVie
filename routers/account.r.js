const express = require("express");
const router = express.Router();
const passport = require("passport");
const accountC = require("../controller/account.c");

router.post("/signup", accountC.signup);

router.post(
  "/login",
  passport.authenticate("myStrategies", { failureRedirect: "/login",failureFlash: true, }),
  (req, res) => {
    if (req.user.Role === "admin") {
      res.redirect("/admin");
    } else {
      res.redirect("/user");
    }
  }
);

module.exports = router;
