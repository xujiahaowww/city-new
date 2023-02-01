'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async sytupian() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.home.sytupian();
  }
  async dangji() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.home.dangji(ctx.request.query.id);
  }
  async fooddetail() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.home.fooddetail(ctx.request.query.id);
  }
  async search() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.home.search(this.ctx.request.query);
    //  console.log(this.ctx.request.query)
  }
  async cakedetail() {
    const { ctx } = this;
    console.log(ctx.request.query, 1111)
    ctx.body = await this.ctx.service.home.cakedetail(ctx.request.query.id);
  }
}

module.exports = HomeController;
