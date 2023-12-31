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

const addProduct = async (img, name, content, price, star, review) => {
  let con = null;
  try {
    con = await db.connect();
    await con.query(
      'INSERT INTO "Products" ("img", "name", "content", "price", "star", "review") VALUES ($1, $2, $3, $4, $5, $6)',
      [img, name, content, price, star, review]
    );
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const queryUpdate = async (content) => {
  let con = null;
  try {
    con = await db.connect();
    const product = await con.query(
      'SELECT * FROM "Products" WHERE content = $1',
      [content]
    );
    return product;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const updateProduct = async (
  img,
  name,
  content,
  price,
  star,
  review,
  nameItem
) => {
  let con = null;
  try {
    con = await db.connect();
    await con.query(
      'UPDATE "Products" SET "img" = $1, "name" = $2, "content" = $3, "price" = $4, "star" = $5, "review" = $6 WHERE "content" = $7',
      [img, name, content, price, star, review, nameItem]
    );
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

const deleteProduct = async (content) => {
  let con = null;
  try {
    con = await db.connect();
    await con.query('DELETE FROM "Products" WHERE content = $1', [content]);
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
    return products;
  } catch (error) {
    throw error;
  } finally {
    if (con) con.done();
  }
};

module.exports = {
  showProducts,
  deleteProduct,
  addProduct,
  queryUpdate,
  updateProduct,
  searchProduct,
};
