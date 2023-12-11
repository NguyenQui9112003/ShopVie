const express = require('express')
const router = express.Router()
const db = require('../database')

const login = (req, res) => {
    res.render('login')
}

const home = async (req, res) => {
  const data = await db.showProducts();
    res.render('home', {products: data})
}

const user = (req, res) => {
  res.render('info')
}

const admin = async (req, res) => {
  try{
    const data = await db.showProducts();
    res.render('admin', {products: data})
  }
  catch (error){
    next(error);
  }
}

const add = (req, res, next) => {
  res.render('addProduct')
}

const update = async (req, res) => {
  try{
    const product = await db.queryUpdate(req.body.content)
    res.render('updateProduct', {product: product})
  }
  catch (error){
    next(error)
  }
}

const addProduct = async (req, res, next) => {
  try{
    await db.addProduct(req.body.img, req.body.name, req.body.content, req.body.price, parseInt(req.body.star), parseInt(req.body.review))
    res.redirect('/admin')
  }
  catch (error){
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  try{
    await db.updateProduct(req.body.img, req.body.name, req.body.content, req.body.price, parseInt(req.body.star), parseInt(req.body.review), req.body.nameItem)
    res.redirect('/admin')
  }
  catch (error){
    next(error)
  }
}

const deleteProduct = async (req, res, next) => {
  try{
    await db.deleteProduct(req.body.content);
    res.redirect('/admin')
  }
  catch (error){
    next(error);
  }
}

const searchProductUser = async (req, res, next) => {
  if(!req.body.search){
    res.redirect('/')
    return
  }
  try{
    const products = await db.searchProduct(req.body.search)
    res.render('home', {products: products})
  }
  catch (error) {
    next(error)
  }
}

const searchProductAdmin = async (req, res, next) => {
  if(!req.body.search){
    res.redirect('/admin')
    return
  }
  try{
    const products = await db.searchProduct(req.body.search)
    res.render('admin', {products: products})
  }
  catch (error) {
    next(error)
  }
}

module.exports = {
  home, user, admin, add, update, addProduct, updateProduct, deleteProduct, searchProductUser, searchProductAdmin, login
}