const db = require("../db/database");

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

module.exports = {
  showProducts,
  searchProduct,
};
