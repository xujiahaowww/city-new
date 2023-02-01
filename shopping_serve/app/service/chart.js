const Service = require('egg').Service;
class UserService extends Service {
  async chart(queryobj) {
	// console.log(queryobj,69969696)
   const sql=`select * from cakeimgtable where cakeID=${queryobj.dataArr} and type=1`
   const data = await this.app.mysql.query(sql);
   
   // console.log(data,99999)
   
   return data;
  }
async foodchart(queryobj) {
	// console.log(queryobj,69969696)
   const sql=`select * from foodimgtable where foodID=${queryobj.dataArr} and type=1`
   const data = await this.app.mysql.query(sql);
   
   // console.log(data,99999)
   
   return data;
  }

}
module.exports = UserService;