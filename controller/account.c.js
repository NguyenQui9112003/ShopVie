const accountM = require("../model/account.m");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signup = async (req, res, next) => {
  try {
    const un = req.body.username;
    const pw = req.body.password;
    const fn = req.body.fullname;
    const email = req.body.email;
    const date = req.body.date;
    const sex = req.body.sex;

    const existingUser = await accountM.Get(un);
    const existingEmail = await accountM.GetEmail(email);

    if (existingUser) {
      req.flash('error', 'Tên người dùng đã tồn tại. Vui lòng chọn tên khác!');
      return res.redirect('/signup');
    } else if (existingEmail && existingEmail.Email === email){
      req.flash('error', 'Email đã tồn tại. Vui lòng chọn email khác!');
      return res.redirect('/signup');
    }

    bcrypt.hash(pw, saltRounds, async function (err, hash) {
      if (err) {
        return next(err);
      }
      const rs = await accountM.Add(new accountM(un, hash, fn, email, date, sex));
      req.flash('success', 'Đăng kí tài khoản thành công !');
      res.redirect("/login");
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  signup
};
