const userM = require("../model/user.m");

const userInfo = async (req, res) => {
  try {
    const data = await userM.showInfo(req.username);
    res.render("infoPage", { info: data });
  }
  catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

const updateUserInfo = async (req, res) => {
  try {
    const username = req.username;
    const email = req.email;
    const { fullname, date, sex } = req.body;

    const existingEmail = await userM.getAllEmailsExceptUsername(username);

    if (existingEmail.includes(req.body.email)) {
      req.flash('error', 'Email đã tồn tại, vui lòng chọn email khác!');
      res.redirect('/user/information');
    } else {
      await userM.updateUserInfo(username, fullname, email, date, sex);
      req.flash('success', 'Thay đổi thành công!');
      res.redirect('/user/information');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

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
    if(products.length == 0) {
      req.flash('error', 'Không tìm thấy ' + (req.body.search));
      res.render("userPage", { products: products });
    } else {
      res.render("userPage", { products: products });
    }
  } catch (error) {
    next(error);
  }
};

const showCart = async (req, res, next) => {
  try{
    const products = await userM.showCart();
    res.render('cart', {products: products})
  } catch (error) {
    next(error)
  }
}

const addToCart = async (req, res, next) => {
  try{
    const products = await userM.searchProductForCart(req.body.cart)
    const checkDuplicate = await userM.checkDuplicate(req.body.cart)
    if(checkDuplicate.length > 0){
      req.flash('failed', 'Item already added to cart');
      return res.redirect('/user')
    }
    else {
      await userM.addToCart(products[0].img, products[0].name, products[0].content, products[0].price, products[0].star, products[0].review)
      req.flash('added', 'Successfully added')
      return res.redirect('/user')
    }
    
  } catch (error){
    next(error)
  }
}

const removeFromCart = async (req, res, next) => {
  try{
    await userM.removeFromCart(req.body.content)
    res.redirect('/user/cart')
  } catch (error){
    next(error)
  }
}

const deleteCart = async (req, res, next) => {
  try{
    await userM.deleteCart()
    next()
  } catch (error){
    next(error)
  }
}

module.exports = {
  userPage,
  userInfo,
  updateUserInfo,
  searchProductUser,
  showCart,
  addToCart,
  removeFromCart
};
