'use strict';
const Controller = require('egg').Controller;
class VerifController extends Controller {
  async verif() {
    const { ctx } = this;
    var captcha=await ctx.service.verif.verif()
    // this.ctx.session.verifText=captcha.text
    ctx.body =captcha;
  }
}
module.exports = VerifController;