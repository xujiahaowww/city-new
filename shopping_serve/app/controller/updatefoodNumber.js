'use strict';

const Controller = require('egg').Controller;

class updatefoodNumberController extends Controller {
	
	
	async updatefoodNumber(){
		  var obj=this.ctx.request.body;
		  var result=await this.ctx.service.updatefoodNumber.updatefoodNumber(obj);
		  
		  if(result.affectedRows!=0){
		  	var resData={
		  		info:"编辑成功",
		  		code:1
		  	}
		  	
		  	this.ctx.body=resData;
		  }else{
		  	
		  	this.ctx.body={
		  		info:"编辑失败",
		  		code:0
		  	}
		  }
		  
	}
	
	
}


module.exports = updatefoodNumberController;