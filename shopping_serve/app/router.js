'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // socket.io
  io.of('/').route('visitedServer', io.controller.visited.server);
  router.post('/userInfo', controller.userInfo.userInfo); // 根据手机号拿用户表信息
  router.post('/getOrder', controller.userInfo.getOrder); // 根据手机号拿订单信息
  router.post('/setTotal', controller.userInfo.setTotal); // 根据手机号算共花费了多少钱
  router.post('/uploadImg', controller.userInfo.uploadImg); // 上传图片
  router.post('/getTotal', controller.userInfo.getTotal); // 上传图片
  router.post('/addOrder', controller.userInfo.addOrder); // 上传图片
  router.post('/deleteCar', controller.userInfo.deleteCar); // 上传图片


  router.post('/login', controller.login.login);// 登录路由
  router.post('/verif', controller.verif.verif);// 验证码路由
  router.post('/registered', controller.registered.regis);// 注册路由
  router.post('/home', controller.home.sytupian);// 验证码路由
  router.post('/dangji', controller.home.dangji);// 当季图片
  router.post('/uploadImg', controller.fileUpload.uploadImg);// 上传图片路由没实现
  router.post('/incar', controller.incar.incar);// 加入购物车按钮
  router.post('/carDetails', controller.carDetails.carDetails);// 购物车内部商品数据
  router.post('/updatefoodNumber', controller.updatefoodNumber.updatefoodNumber);// 修改food的数量
  router.post('/updatecakeNumber', controller.updatecakeNumber.updatecakeNumber);// 修改cake的数量

  router.get('/search', controller.home.search);
};
