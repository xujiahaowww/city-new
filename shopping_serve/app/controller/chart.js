'use strict';

const Controller = require('egg').Controller;

class CakeDetailController extends Controller {
  async chart() {
    const { ctx } = this;
	var detailsObj=this.ctx.request.query
    this.ctx.body=await this.ctx.service.chart.chart(detailsObj);
  }
  async foodchart() {
    const { ctx } = this;
  	var detailsObj=this.ctx.request.query
    this.ctx.body=await this.ctx.service.chart.foodchart(detailsObj);
  }
  
}

module.exports = CakeDetailController;