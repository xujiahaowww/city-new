/* eslint-disable strict */
/* eslint-disable no-unused-vars */
module.exports = app => {
  return async (ctx, next) => {
    // console.log(ctx.packet);
    await next();
    // execute when disconnect.
    console.log('socket 收到了些参数都会走这里!');
  };
};
