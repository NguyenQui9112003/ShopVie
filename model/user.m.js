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
      `SELECT * FROM "Products" WHERE "Products".name ILIKE '%' || $1 || '%'`,
      [search]
    );
    console.log(products)
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

const showCart = async () => {
  let con = null;
  try{
    con = await db.connect()
    const products = await con.query('SELECT * FROM "Cart"')
    return products;
  } catch (error) {
    throw error;
  } finally {
    if(con)
      con.done()
  }
}

const searchProductForCart = async (search) => {
  let con = null;
  try {
    con = await db.connect();
    const products = await con.query('SELECT * FROM "Products" WHERE content = $1', [search]);
    return products;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const checkDuplicate = async (search) => {
  let con = null;
  try {
    con = await db.connect();
    const products = await con.query('SELECT * FROM "Cart" WHERE content = $1', [search]);
    return products;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const addToCart = async (img, name, content, price, star, review) => {
  let con = null;
  try{
    con = await db.connect()
    await con.query('INSERT INTO "Cart" ("img", "name", "content", "price", "star", "review") VALUES ($1, $2, $3, $4, $5, $6)',
    [img, name, content, price, star, review]);
  } catch (error) {
    throw error;
  } finally {
    if(con)
      con.done()
  }
}

const removeFromCart = async (content) => {
  let con = null;
  try{
    con = await db.connect()
    await con.query('DELETE FROM "Cart" WHERE content = $1', [content]);
  } catch (error) {
    throw error;
  } finally {
    if(con)
      con.done()
  }
}

const deleteCart = async () => {
  let con = null;
  try{
    con = await db.connect()
    await con.query('DELETE FROM "Cart"');
  } catch (error) {
    throw error;
  } finally {
    if(con)
      con.done()
  }
}

module.exports = {
  showProducts,
  showInfo,
  updateUserInfo,
  searchProduct,
  showCart,
  searchProductForCart,
  addToCart,
  checkDuplicate,
  removeFromCart,
  deleteCart,
  getAllEmailsExceptUsername
};
