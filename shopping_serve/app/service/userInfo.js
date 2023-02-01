const Service = require('egg').Service;
class UserInfoService extends Service {
    //根据手机号拿用户表信息
    async userInfo(obj) {
        const { ctx } = this;
        this.ctx.session.phoneNumber = obj.phoneNumber;
        if (obj.password === undefined) {
            const data = await this.app.mysql.query(`select * from userinfo where phoneNumber='${obj.phoneNumber}'`);
            return data[0];//返回的直接是用户的信息的对象
        } else {
            var sql = `select password from userinfo where phoneNumber='${obj.phoneNumber}'`
            const data1 = await this.app.mysql.query(sql)
            if (data1[0].password !== obj.password) {
                return {
                    code: 420,
                    info: "原密码错误"
                };
            }
            const data2 = await this.app.mysql.query(` update userinfo set password = '${obj.newpassword}' where phoneNumber='${obj.phoneNumber}'`)
            if (data2.affectedRows != 0) {
                return {
                    code: 200,
                    info: "修改密码成功"
                };
            }

        }
    }

    async getOrder(obj) {
        const { ctx } = this;
        const data = await this.app.mysql.query(`select * from ordertable where phoneNumber='${obj.phoneNumber}'`);
        var cakeData = [];
        var foodData = [];
        for (let i = 0; i < data.length; i++) {
            cakeData.push(await this.app.mysql.query(`select * from caketable where cakeID='${data[i].cakeID}'`));
            foodData.push(await this.app.mysql.query(`select * from foodtable where foodID='${data[i].foodID}'`));
        }
        //去掉空数组
        function removeEmptyArrayEle(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].length === 0) {
                    arr.splice(i, 1);
                    i = i - 1
                }
            }
            return arr;
        };
        cakeData = removeEmptyArrayEle(cakeData)
        foodData = removeEmptyArrayEle(foodData)

        //删掉RowDataPacket
        var dataString1 = JSON.stringify(cakeData);
        cakeData = JSON.parse(dataString1);
        var dataString2 = JSON.stringify(foodData);
        foodData = JSON.parse(dataString2);

        for (let i = 0; i < data.length; i++) {
            if (data[i].cakeID !== null) {
                cakeData[i][0].cakeNumber = data[i].cakeNumber
            }
            if (data[i].foodID !== null) {
                foodData[i][0].foodNumber = data[i].foodNumber
            }
        }
        // console.log(cakeData);


        return { cakeData, foodData };

    }

    async setTotal(obj) {
        const { ctx } = this;
        if (obj.total === null || obj.total === undefined) {
            obj.total = 0;
        }
        const data = await this.app.mysql.query(`update userinfo set total = ${obj.total} where phoneNumber='${obj.phoneNumber}'`);
        return {
            code: 200,
            info: "用户花费金额已计算成功"
        }
    }

    async uploadImg(img) {
        const { ctx } = this;
        const data = await this.app.mysql.query(`update userinfo set imgsrc = "${img}"`);

    }

    async getTotal(obj) {
        const { ctx } = this;
        if (obj.total === null || obj.total === undefined) {
            obj.total = 0;
        }
        const data = await this.app.mysql.query(`select * from userinfo where phoneNumber='${obj.phoneNumber}'`);
        return data
    }

    async addOrder(obj) {
        const { ctx } = this;
        console.log([...obj]);
        console.log(this.ctx.session.phoneNumber, 1111144);
        var arr = [...obj]
        for (let i = 0; i < arr.length; i++) {
            await this.app.mysql.query(`insert into ordertable(cakeID,cakeNumber,foodID,foodNumber,phoneNumber) 
                values (${arr[i].cakeID},${arr[i].cakeNumber},${arr[i].foodID},${arr[i].foodNumber},'${this.ctx.session.phoneNumber}')`);
        }
        return {
            code:200,
            info:"添加成功"
        }
    }
    
    async deleteCar(obj) {
        const { ctx } = this;
        var arr = [...obj]
        for (let i = 0; i < arr.length; i++) {
            await this.app.mysql.query(`delete from cartable where foodID = ${arr[i].foodID}`);
            await this.app.mysql.query(`delete from cartable where cakeID = ${arr[i].cakeID}`);

        }
        return  {
            code:200,
            info:"删除成功"
        }
    }
}
module.exports = UserInfoService;