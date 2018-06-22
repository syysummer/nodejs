// 引入mongoose,连接数据库,创建数据库连接模块
const mongoose = require("mongoose");

//返回一个异步的promise
const promise = new Promise((resolve,reject) =>{
    mongoose.connect("mongodb://localhost:27017/study");
    mongoose.connection.once("open",err => {
        if(!err){
            console.log("数据库连接成功了");
            resolve();
        }else{
            console.log("数据库连接失败了");
            reject();
        }
    })
});

//将promise暴露出去
module.exports = promise;