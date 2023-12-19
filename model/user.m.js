const db = require("../db/database");

const showInfo = async (username) => {
  let con = null;
  try {
    con = await db.connect();
    const info = await con.query(
      'SELECT * FROM "accountDb" WHERE "Username" = $1',
      [username]
    );
    return info;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const updateUserInfo = async (username, fullname, email, date, sex) => {
  let con = null;
  try {
    con = await db.connect();
    const result = await con.query(
      'UPDATE "accountDb" SET "Fullname" = $1, "Email" = $2, "Date" = $3, "Sex" = $4 WHERE "Username" = $5',
      [fullname, email, date, sex, username]
    );
    return result;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const showProducts = async () => {
  let con = null;
  try {
    con = await db.connect();
    const rs = await con.any('SELECT * FROM "Products"');
    return rs;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const searchProduct = async (search) => {
  let con = null;
  try {
    con = await db.connect();
    const products = await con.query(
      'SELECT * FROM "Products" WHERE name = $1',
      [search]
    );
    return products;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const getAllEmailsExceptUsername = async (username) => {
  let con = null;
  try {
    con = await db.connect();
    const result = await con.query(
      'SELECT "Email" FROM "accountDb" WHERE "Username" <> $1;',
      [username]
    );
    return result.map(row => row.Email);
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

module.exports = {
  showProducts,
  showInfo,
  updateUserInfo,
  searchProduct,
  getAllEmailsExceptUsername,
};
