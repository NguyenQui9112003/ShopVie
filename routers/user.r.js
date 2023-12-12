const express = require('express')
const router = express.Router()
const userController = require('../controller/user.c')

router.get('/', userController.home) // Home page
router.get('/information', userController.user) // User information page
router.post('/search', userController.searchProductUser) // Searching on admin page

module.exports = router