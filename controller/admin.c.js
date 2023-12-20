const adminM = require("../model/admin.m");

const adminPage = async (req, res) => {
  try {
    const data = await adminM.showProducts();
    res.render("adminPage", { products: data });
  } catch (error) {
    next(error);
  }
};

const add = (req, res, next) => {
  res.render("addProduct");
};

const addProduct = async (req, res, next) => {
  try {
    await adminM.addProduct(
      req.body.img,
      req.body.name,
      req.body.content,
      parseInt(req.body.price),
      parseInt(req.body.star),
      parseInt(req.body.review)
    );
    res.redirect("/admin");
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  try {
    const product = await adminM.queryUpdate(req.body.content);
    res.render("updateProduct", { product: product });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    await adminM.updateProduct(
      req.body.img,
      req.body.name,
      req.body.content,
      parseInt(req.body.price),
      parseInt(req.body.star),
      parseInt(req.body.review),
      req.body.nameItem
    );
    res.redirect("/admin");
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await adminM.deleteProduct(req.body.content);
    res.redirect("/admin");
  } catch (error) {
    next(error);
  }
};

const searchProductAdmin = async (req, res, next) => {
  if (!req.body.search) {
    res.redirect("/admin");
    return;
  }
  try {
    const products = await adminM.searchProduct(req.body.search);
    if(products.length == 0) {
      req.flash('error', 'Không tìm thấy ' + (req.body.search));
      res.render("adminPage", { products: products });
    } else {
      res.render("adminPage", { products: products });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  adminPage,
  add,
  update,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProductAdmin,
};
