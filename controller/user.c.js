const userM = require('../model/user.m')

const home = async (req, res) => {
  const data = await userM.showProducts();
    res.render('home', {products: data})
}

const user = (req, res) => {
  res.render('info')
}

const searchProductUser = async (req, res, next) => {
  if(!req.body.search){
    res.redirect('/user')
    return
  }
  try{
    const products = await userM.searchProduct(req.body.search)
    res.render('home', {products: products})
  }
  catch (error) {
    next(error)
  }
}

module.exports = {
  home, user, searchProductUser
}