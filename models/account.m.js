const db = require('./accountDb');
const tbName = 'accountDb';

module.exports = class Account {
    constructor(un, pw, email, date, sex) {
        this.Username = un;
        this.Password = pw;
        this.Email = email;
        this.Date = date;
        this.Sex = sex;
    }
    static async Add(a) {
        const rs = await db.add(tbName, a);
        return rs;
    }
    static async Get(un) {
        const rs = await db.one(tbName, 'Username', un);
        return rs;
    }
}