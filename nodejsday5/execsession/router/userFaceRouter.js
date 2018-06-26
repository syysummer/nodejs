//引入express
const express = require("express");
//引入路径path
const path = require("path");
//创建路由
const router = express.Router();
//引入几个模块
const users = require("../model/users");
//引入cookie
const cookieParser = require("cookie-parser");
//使用第三方中间件
router.use(cookieParser());

//创建登录页面
router.get("/login",(req,res) => {
    res.render('login',{errMsg:{}});
});

//创建注册页面
router.get("/register",(req,res) => {
    res.render('register',{errMsg:{}});
});

//创建个人页面
router.get("/userCenter",(req,res) => {
    // const {_id} = req.cookies;
    const {_id} = req.session;
    if(_id){
        users.findOne({_id},(err,data) =>{
            if(!err){
                res.render("userCenter",{username:data.username});
            }else{
                res.redirect("/login");
            }
        })
    }else{
        res.redirect('/login');
    }
});

//将模块暴露出去
module.exports = router;