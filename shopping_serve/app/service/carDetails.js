const Service = require('egg').Service;

class CarDetailsService extends Service {
  async carDetails(obj) {

    
      var res=await this.app.mysql.query(`select * from cartable where phoneNumber='${obj.phoneNumber}'`);
  
    var foodIDArr=[]
    var cakeIDArr=[]
    var dataArr=[]
    for(let i=0;i<res.length;i++){
       
        if(res[i].foodID!=null){
          foodIDArr=await this.app.mysql.query(`select * from cartable inner join foodtable on foodtable.foodID=cartable.foodID where cartable.phoneNumber='${obj.phoneNumber}'`)
          
        }
        if( res[i].cakeID!=null){
          cakeIDArr=await this.app.mysql.query(`select * from cartable inner join caketable on caketable.cakeID=cartable.cakeID where cartable.phoneNumber='${obj.phoneNumber}'`)
        }
        
    }
    dataArr=dataArr.concat(foodIDArr).concat(cakeIDArr)

return dataArr
    
  }
}

module.exports = CarDetailsService;