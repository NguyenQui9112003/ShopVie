const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./routers/products.r')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// User page
app.get('/', router.home) // Home page
app.get('/user', router.user) // User information page

// Admin page
app.get('/admin', router.admin) // Admin home page
app.get('/add', router.add) // Add product page
app.post('/update', router.update) // Update product page
app.post('/admin/delete', router.deleteProduct) // Deleting product
app.post('/admin/add', router.addProduct) // Adding product
app.post('/admin/update', router.updateProduct) // Updating product

// Search
app.post('/search', router.searchProductUser) // Searching on user page
app.post('/admin/search', router.searchProductAdmin) // Searching on admin page

app.listen(3000, () => console.log(`Server listening on http://127.0.0.1:${port}/`))