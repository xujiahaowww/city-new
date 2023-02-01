/* eslint-disable strict */
const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class VerifService extends Service {
  async verif() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 43,
      bacground: '#cc9966',
    });
    this.ctx.session.verifText = captcha.text;

    return captcha;
  }
}
module.exports = VerifService;
