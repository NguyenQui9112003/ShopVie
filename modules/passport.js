const passport = require("passport");
const bcrypt = require("bcrypt");
const accM = require("../model/account.m");
const MyStrategy = require("./myStrategies");

passport.serializeUser((user, done) => {
  done(null, user.Username);
});

passport.deserializeUser(async (user, done) => {
  const acc = await accM.Get(user);
  if (acc) {
    return done(null, acc);
  }
  done("invalid");
});

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new MyStrategy(async (un, pw, done) => {
      try {
        const user = await accM.Get(un);
        const rs = await bcrypt.compare(pw, user.Password);
        if (rs) {
          return done(null, user);
        }
        done("invalid", null);
      } catch (error) {
        console.log(error);
        done(error);
      }
    })
  );
};
