const express = require('express')
const router = express.Router()
const adminRouter = require('./admin.r')
const userRouter = require('./user.r')
const accRouter = require('./account.r')

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/acc', accRouter)

module.exports = router