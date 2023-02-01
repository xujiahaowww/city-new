const Service = require('egg').Service;

class UserService extends Service {
  async queryuser(obj) {
	  var res=await this.app.mysql.query(`select * from userinfo where phoneNumber='${obj.phoneNumber}'`);
	  //注册时先查询有没有相同的用户名，没有就注册
	  //返回的res是一个数组  查询的返回值都是数组  新增的返回值才有affectedRows
	  if(res.length==0){
		  var user=await this.app.mysql.query(`insert into userinfo(phoneNumber,password,imgsrc) 
		  values ('${obj.phoneNumber}','${obj.password}','${obj.imgsrc}')`);
		  this.ctx.session.phoneNumber =obj.phoneNumber
		  this.ctx.session.password =obj.password
		  // console.log(this.ctx.session.user_name,1)已经缓存到本地了
		  return 'ok';
	  }else{
		  //说明查询到了用户名，用户名已存在
		  return 'no' ;
	  }
	

  }
}

module.exports = UserService;