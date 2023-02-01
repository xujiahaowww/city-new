/* eslint-disable strict */
/* eslint-disable no-unused-vars */

const { Controller } = require('egg');

class VisitedController extends Controller {
  async server() {
    const { ctx, app } = this;
    const visitedCount = await ctx.service.app.get();
    const visited = Number(visitedCount[0].visited) + 1;
    const result = await ctx.service.app.set(visited);
    // 默认调用一次controller，将访问量传递给前端
    // 前端页面访问时，调用visitedServer继续调用本控制器，更新visited访问量
    await ctx.socket.server.emit('CustomVisited', visited);
  }
}

module.exports = VisitedController;
