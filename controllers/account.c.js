const accountM = require('../models/account.m');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    signup: async(req, res, next) => {
        try {
            const un = req.body.username;
            const pw = req.body.password;
            const email = req.body.email;
            const date = req.body.date;
            const sex = req.body.sex;
            bcrypt.hash(pw, saltRounds, async function(err, hash) {
                if(err) {
                    return next(err);
                }
                const rs = await accountM.Add(new accountM(un, hash, email, date, sex));
                res.redirect('/');
            });
        } catch (error) {
            throw(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const un = req.body.username;
            const pw = req.body.password;
            const rs = await accountM.Get(un);
            bcrypt.compare(pw, rs.Password, function(err, result) {
                if(err) {
                    return next(err);
                }
                if (result) {
                    req.session.user = rs;
                }
                res.redirect('/');
            });
        } catch (error) {
            next(error);
        }
    }
}