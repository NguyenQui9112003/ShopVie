const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express()
const port = 3000
const secret = 'mysecretKey';
const router = require('./routers/router')

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))

require('./modules/passport')(app);

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(cookieParser(secret));
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, () => console.log(`Server listening on http://127.0.0.1:${port}/`))