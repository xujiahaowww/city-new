/* eslint-disable no-unused-vars */
'use strict';

module.exports = app => {
  return async (ctx, next) => {
    // 通知全体
    ctx.socket.emit('res', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};

