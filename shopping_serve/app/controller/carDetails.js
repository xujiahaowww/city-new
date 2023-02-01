'use strict';

const Controller = require('egg').Controller;

class CarDetailsController extends Controller {
	async carDetails() {
		const {
			ctx
		} = this;
		var obj = ctx.request.body;
		// console.log(obj, 1111111111111111)
        const res = await ctx.service.carDetails.carDetails(obj);
        console.log(res,"购物车控制层")
        ctx.body=res

	}
}

module.exports = CarDetailsController;
