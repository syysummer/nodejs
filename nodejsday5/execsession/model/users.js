//引入mongoose
const mongoose = require("mongoose");
//创建约束对象
const Schema = mongoose.Schema;
const usersSchema = new Schema({
   username : {
       type:String,
       unique:true,
       required:true
   },
    password : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    }
});
//创建模型对象,集合
const users = mongoose.model("users",usersSchema);
//将创建的模型对象暴露出去
module.exports = users;
