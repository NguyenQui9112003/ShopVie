const pgp = require("pg-promise")({
  capSQL: true,
});

const db = require("../db/database");

const add = async (tbName, obj) => {
  let con = null;
  try {
    con = await db.connect();
    let sql = pgp.helpers.insert(obj, null, tbName);
    await con.none(sql);
    return 1;
  } catch (error) {
    throw error;
  } finally {
    if (con) {
      con.done();
    }
  }
};

const one = async (tbName, fieldName, value) => {
  let con = null;
  try {
    con = await db.connect();
    const rs = await con.oneOrNone(
      `SELECT * FROM "${tbName}" WHERE "${fieldName}" = $1`,
      [value]
    );
    return rs;
  } catch (error) {
    throw error;
  } finally {
    if (con) {
      con.done();
    }
  }
};

const two = async (tbName, fieldName, value) => {
  let con = null;
  try {
    con = await db.connect();
    const rs = await con.oneOrNone(
      `SELECT * FROM "${tbName}" WHERE "${fieldName}" = $1`,
      [value]
    );
    return rs;
  } catch (error) {
    throw error;
  } finally {
    if (con) {
      con.done();
    }
  }
};

module.exports = class Account {
  constructor(un, pw, email, date, sex) {
    this.Username = un;
    this.Password = pw;
    this.Email = email;
    this.Date = date;
    this.Sex = sex;
  }
  static async Add(a) {
    const rs = await add("accountDb", a);
    return rs;
  }
  static async Get(un) {
    const rs = await one("accountDb", "Username", un);
    return rs;
  }
  static async GetEmail(un) {
    const rs = await two("accountDb", "Email", un);
    return rs;
  }
};
