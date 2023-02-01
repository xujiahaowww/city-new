'use strict';

const Controller = require('egg').Controller;

class IncarController extends Controller {
	async incar() {
		const {
			ctx
		} = this;
		var obj = ctx.request.body;
		// console.log(obj, 1111111111111111)
		const res = await ctx.service.incar.incar(obj);
		if (res == "ok") {
			ctx.body = {
				code: 2000,
				info: "成功加入购物车",

			};

		}else if(res == "no"){
			ctx.body = {
				code: 4000,
				info: "加入购物车失败"
			};
		}else if(res == "exist"){
            ctx.body = {
				code: 4001,
				info: "已存在购物车"
			};
        }
	}
}

module.exports = IncarController;
