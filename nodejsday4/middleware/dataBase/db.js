//引入mongoose 
const mongoose = require("mongoose");
//创建promise对象
const promise = new Promise((resolve,reject) => {
    mongoose.connect("mongodb://localhost:27017/users");
    mongoose.connection.once("open",err => {
        if(!err){
            console.log("数据库连接成功了");
            resolve();
        }else{
            reject();
        }
    })
});
//暴露Promise对象
module.exports = promise;