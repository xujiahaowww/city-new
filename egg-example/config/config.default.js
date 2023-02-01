/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 数据库配置
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      database: '2022shoping',
    },
  };
  // 跨域的配置
  config.cors = {
    origin: 'http://localhost:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true, // important!!!!!!!!!
  };
  // post请求的安全性配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  config.multipart = {
    mode: 'file',
  };
  // session配置
  config.session = {
    key: 'EGG_SESS',
    maxAge: 1000 * 3600 * 24, // 过期时间
    httpOnly: true, // 防止XSS攻击，窃取cookie内容，增加cookie的安全性。
    encrypt: true, // 对cookie进行加密，获取时要对cookie进行解密操作。
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_';

  // add your middleware config here
  // config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
