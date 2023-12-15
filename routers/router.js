const express = require("express");
const router = express.Router();
const guestRouter = require("./guest.r");
const accRouter = require("./account.r");
const adminRouter = require("./admin.r");
const userRouter = require("./user.r");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.use("/", guestRouter);
router.use("/acc", accRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);

module.exports = router;
