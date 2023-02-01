'use strict';

const Controller = require('egg').Controller;
const path=require("path")
const fs=require("fs")
class UserInfoController extends Controller {
    //根据手机号拿用户表信息
    async userInfo() {
		const { ctx } = this;
		
		this.ctx.body = await this.ctx.service.userInfo.userInfo(ctx.request.body);
		
    }

    async getOrder() {
        const { ctx } = this;
        this.ctx.body = await this.ctx.service.userInfo.getOrder(ctx.request.body);
    }
    async setTotal() {
        const { ctx } = this;
        this.ctx.body = await this.ctx.service.userInfo.setTotal(ctx.request.body);
    }
    //上传图片
    async uploadImg() {
		const {
			ctx
		} = this;
		const dest = '/public/upload/';
		const file = ctx.request.files[0];
		//__dirname---egg-mysql/app/controller     
		//path.dirname(__dirname)---egg-mysql/app/
		let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
		// 处理文件，比如上传到云端  或 放到指定的目录
		await fs.copyFileSync(file.filepath, to);
		fs.unlinkSync(file.filepath);
		// 返回图片路径
		let cluster = this.app.config.cluster.listen;
		await this.ctx.service.userInfo.uploadImg( `http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`);
		ctx.body = {
			"code": 0,
			"msg": "",
			"data": {
				"src": `http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`
			}
		}

	}
	//得到用户消费金额
	async getTotal() {
        const { ctx } = this;
        this.ctx.body = await this.ctx.service.userInfo.getTotal(ctx.request.body);
	}
	
	
	async addOrder() {
		const { ctx } = this;
        this.ctx.body = await this.ctx.service.userInfo.addOrder(ctx.request.body.orderArr);
	}
	
	async deleteCar() {
		const { ctx } = this;
        this.ctx.body = await this.ctx.service.userInfo.deleteCar(ctx.request.body.orderArr);
	}
	

}

module.exports = UserInfoController;
