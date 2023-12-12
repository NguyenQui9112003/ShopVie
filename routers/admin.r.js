const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin.c')

router.get('/', adminController.admin) // Admin home page
router.get('/add', adminController.add) // Add product page
router.post('/update', adminController.update) // Update product page
router.post('/delete', adminController.deleteProduct) // Deleting product
router.post('/adding', adminController.addProduct) // Adding product
router.post('/updating', adminController.updateProduct) // Updating product
router.post('/search', adminController.searchProductAdmin) // Searching on admin page

module.exports = router