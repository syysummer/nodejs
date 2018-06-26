//引入express
const express = require("express");
//引入路径path
const path = require("path");
//创建路由
const router = express.Router();

//创建登录页面
router.get("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname,"../public/login.html"));
});

//创建注册页面
router.get("/register",(req,res) => {
    res.sendFile(path.resolve(__dirname,"../public/register.html"));
});

//将模块暴露出去
module.exports = router;