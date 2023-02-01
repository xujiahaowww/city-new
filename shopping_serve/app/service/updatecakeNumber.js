const Service = require('egg').Service;

class updatecakeNumberService extends Service {
 async updatecakeNumber(cake){

 	  var sql=`update cartable set cakeNumber='${cake.cakeNumber}' where carID=${cake.carID}`
 	  var obj=await this.app.mysql.query(sql);
 	  
 	//   console.log(obj)
 	  return obj;
 }
}

module.exports =updatecakeNumberService;