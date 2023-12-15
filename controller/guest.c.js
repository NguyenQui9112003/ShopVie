const userM = require("../model/guest.m");

const loginPage = async (req, res) => {
  res.render("login");
};

const signupPage = async (req, res) => {
  res.render("register");
};

const guestPage = async (req, res) => {
  const data = await userM.showProducts();
  res.render("guestPage", { products: data });
};

const searchProductGuest = async (req, res, next) => {
  if (!req.body.search) {
    res.redirect("/");
    return;
  }
  try {
    const products = await userM.searchProduct(req.body.search);
    if(products.length == 0) {
      req.flash('error', 'Không tìm thấy ' + (req.body.search));
      res.render("guestPage", { products: products });
    } else {
      res.render("guestPage", { products: products });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginPage,
  signupPage,
  guestPage,
  searchProductGuest,
};
