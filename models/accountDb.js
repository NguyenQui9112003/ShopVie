const pgp = require("pg-promise")({
  capSQL: true,
});

const cn = {
  host: "localhost",
  port: 5432,
  database: "myDatabase",
  user: "postgres",
  password: "123456",
  max: 30,
};

const db = pgp(cn);

module.exports = {
  add: async (tbName, obj) => {
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
  },

  one: async (tbName, fieldName, value) => {
    let con = null;
    try {
      con = await db.connect();
      const rs = await con.oneOrNone(`SELECT * FROM "${tbName}" WHERE "${fieldName}" = $1`, [value]);
      return rs;
    } catch (error) {
      throw error;
    } finally {
      if(con) {
        con.done();
      }
    }
  }
};
