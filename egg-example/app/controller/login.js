/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable eqeqeq */
'use strict';

const Controller = require('egg').Controller;

class UserloginController extends Controller {
  async login() {
    const { ctx } = this;

  	const that = this;
    const obj = ctx.request.body;
    //   console.log(obj,1111)
    const res = await ctx.service.login.queryuser(obj);
    console.log(obj,"login控制层")
  	if (res.length == 0) {
  		ctx.body = { code: 4001, info: '用户名不存在' };
  	} else {

      //  if(res[0].user_type==1){
      // 	ctx.body={code:4002,info:"该用户被禁用，请联系管理员解禁"}
      // 	return ;
      // }

  		if (res[0].password != obj.password) {
  			ctx.body = { code: 4003, info: '密码或用户名错误' };
  		} else {
  			this.ctx.session.phoneNumber = obj.phoneNumber;
  			ctx.body = { code: 2001, info: '登录成功', imgsrc: res[0].imgsrc, phoneNumber: res[0].phoneNumber, userID: res[0].userID };
  		}
  	}


  }
}

module.exports = UserloginController;

