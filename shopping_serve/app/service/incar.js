const Service = require('egg').Service;

class IncarService extends Service {
  async incar(obj) {
	//   var res=await this.app.mysql.query(`select * from userinfo where phoneNumber='${obj.phoneNumber}'`);
	  //注册时先查询有没有相同的用户名，没有就注册
	  //返回的res是一个数组  查询的返回值都是数组  新增的返回值才有affectedRows
	//   if(res.length==0){
	// 	  var user=await this.app.mysql.query(`insert into userinfo(phoneNumber,password,imgsrc) 
	// 	  values ('${obj.phoneNumber}','${obj.password}','${obj.imgsrc}')`);
	// 	  this.ctx.session.phoneNumber =obj.phoneNumber
	// 	  this.ctx.session.password =obj.password
	// 	  // console.log(this.ctx.session.user_name,1)已经缓存到本地了
	// 	  return "ok";
	//   }else{
	// 	  //说明查询到了用户名，用户名已存在
	// 	  return "no" ;
	//   }
    
    
     

      if(obj.cakeID){
        var samegoods=await this.app.mysql.query(`select * from cartable where cakeID='${obj.cakeID}'`);
        if(samegoods.length==0 || samegoods[0].phoneNumber!=obj.phoneNumber){
            var incar=await this.app.mysql.query(`insert into cartable(phoneNumber,cakeID,cakeNumber) 
            values ('${obj.phoneNumber}','${obj.cakeID}','${obj.cakeNumber}')`);
            console.log("cake",incar)
            this.ctx.session.phoneNumber =obj.phoneNumber
            if(incar.affectedRows){
                return "ok";
            }else{
                return "no";
            }    
        }
        else{
            return "exist"
        }

      }
     if(obj.foodID){
        var samegoods=await this.app.mysql.query(`select * from cartable where foodID='${obj.foodID}'`);
        if(samegoods.length==0  || samegoods[0].phoneNumber!=obj.phoneNumber){
            var incar=await this.app.mysql.query(`insert into cartable(phoneNumber,foodID,foodNumber) 
            values ('${obj.phoneNumber}','${obj.foodID}','${obj.foodNumber}')`);
            console.log("food",incar)
            this.ctx.session.phoneNumber =obj.phoneNumber
            if(incar.affectedRows){
                return "ok";
            }else{
                return "no";
            }
        }else{
            return "exist"
        }
   
     }
        
   

  }
}

module.exports = IncarService;