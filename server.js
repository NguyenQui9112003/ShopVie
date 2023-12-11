


const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//var
const app = express();
const port = 3000;
const secret = 'mysecretKey';

app.use('/css', express.static('../_css'));
app.use('/js', express.static('../_js'));

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

require('./modules/passport')(app);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser(secret));
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/acc', require('./routers/account.r'));
const router = require('./routers/products.r');
app.use('/admin', require('./routers/admin.r'));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// // User page
// app.get('/', router.home) // Home page
// app.get('/user', router.user) // User information page

// // Admin page
// app.get('/admin', router.admin) // Admin home page
// app.get('/add', router.add) // Add product page
// app.post('/update', router.update) // Update product page
// app.post('/admin/delete', router.deleteProduct) // Deleting product
// app.post('/admin/add', router.addProduct) // Adding product
// app.post('/admin/update', router.updateProduct) // Updating product

// // Search
// app.post('/search', router.searchProductUser) // Searching on user page
// app.post('/admin/search', router.searchProductAdmin) // Searching on admin page

app.listen(3000, () => console.log(`Server listening on http://127.0.0.1:${port}/`))