const express = require('express');
const router = express.Router();
const accountC = require('../controllers/account.c');
const passport = require('passport');

router.post('/signup', accountC.signup);

router.post('/login', passport.authenticate('myStrategies', {
    failureRedirect: '/'
}), (req, res) => {
    if (req.user.Role === 'admin') {
        res.redirect('/admin');
    } else {
        res.redirect('/user');
    }
});

module.exports = router;