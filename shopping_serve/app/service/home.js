/* eslint-disable strict */
const Service = require('egg').Service;
class HomeService extends Service {
  async sytupian() {
    const data = await this.app.mysql.query('select * from foodtable');
    return data;
  }
  async fooddetail(query) {
    console.log(typeof query, 2222);
    Number(query);
    console.log(Number(query));
    const sql = `select * from foodtable where foodID=${Number(query)}`;
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async dangji() {
    const data = await this.app.mysql.query('select * from caketable');
    const newdata = data[0];
    console.log(newdata, 'datadatadata111');
    return newdata;
  }
  async search(obj) {
    const data = await this.app.mysql.query(`select * from foodtable where title like '%${obj.key}%'`);
    return data;
    // console.log(data)

  }

  async cakedetail(query) {
    console.log(typeof query, 2222);
    Number(query);
    console.log(Number(query));
    const sql = `select * from caketable where cakeID=${Number(query)}`;
    const data = await this.app.mysql.query(sql);
    return data;
  }


}
module.exports = HomeService;
