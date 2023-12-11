const express = require('express');
const router  = express.Router();
const passport = require('passport');

router.use((req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
})

router.get('/', (req, res) => {
    res.render('admin');
});

router.get('/logout', (req, res) => {
    req.logout(err => {
        if(err) {
            throw err;
        }
    });
    res.redirect('/');
})

module.exports = router;