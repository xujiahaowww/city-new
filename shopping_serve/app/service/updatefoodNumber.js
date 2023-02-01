const Service = require('egg').Service;

class updatefoodNumberService extends Service {
 async updatefoodNumber(food){

 	  var sql=`update cartable set foodNumber='${food.foodNumber}' where carID=${food.carID}`
 	  var obj=await this.app.mysql.query(sql);
 	  
 	//   console.log(obj)
 	  return obj;
 }
}

module.exports =updatefoodNumberService;