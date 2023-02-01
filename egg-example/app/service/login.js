const Service = require('egg').Service;
  
class LoginService extends Service {
  async queryuser(obj) {
      // console.log(obj,"login服务层")
     var loginuser=await this.app.mysql.query(`select * from
     userinfo where phoneNumber='${obj.phoneNumber}'`);
     return loginuser;
    

  }
}

module.exports = LoginService;
