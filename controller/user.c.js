const userM = require("../model/user.m");

const userInfo = (req, res) => {
  res.render("info");
};

const userPage = async (req, res) => {
  const data = await userM.showProducts();
  res.render("userPage", { products: data });
};

const searchProductUser = async (req, res, next) => {
  if (!req.body.search) {
    res.redirect("/user");
    return;
  }
  try {
    const products = await userM.searchProduct(req.body.search);
    res.render("userPage", { products: products });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userPage,
  userInfo,
  searchProductUser,
};
