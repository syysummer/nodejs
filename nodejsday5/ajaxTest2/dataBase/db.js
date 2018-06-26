const mongoose = require("mongoose");
const promise = new Promise((resolve,reject) => {
    mongoose.connect("mongodb://localhost:27017/ajax");
    mongoose.connection.once("open",err => {
        if(!err){
            console.log("数据库连接成功了~~");
            resolve();
        }else{
            console.log("数据库连接失败了~~");
            reject(err);
        }
    })
});
module.exports = promise;