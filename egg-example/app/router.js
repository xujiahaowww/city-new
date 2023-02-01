// app/router.js
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, io } = app;
  // console.log(io.controller,'ioio')
  router.post('/login', controller.login.login);
  // router.post('/verif', controller.verif.verif);// 验证码路由
  // router.post('/registered', controller.registered.regis);// 注册路由
};