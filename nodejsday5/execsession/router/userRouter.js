//引入express
const express = require("express");
//创建路由器对象
const router = express.Router();
//引入模块对象
const users = require("../model/users");
//引入sha1
const sha1 = require("sha1");

//编辑路由器相关逻辑
//使用中间件将正则验证部分的代码抽取出来
function middleWare(req,res,next){
    //1.获取到用户的信息
    const {username,password,rePassword,email} = req.body;
    let errMsg = {
        username,
        email
    };
    //2.验证两次输入的密码是否一致
    if(rePassword && password !== rePassword){
        errMsg.rePasswordErr = "两次输入的密码不一致,请重新输入";
    }
    //3.正则验证用户名,密码,邮箱是否符合基本要求
    //验证用户名(用户名包含5到15位大小写字母,数字,下划线)
    const usernameReg = /^[a-zA-Z0-9_]{5,15}$/;
    if(!usernameReg.test(username)){
        errMsg.usernameErr = "您的用户名不符合要求,用户名包含5到15位大小写字母,数字,下划线";
    }
    //验证密码(密码包含6到18位大小写字母,数字)
    const passwordReg = /^[a-zA-Z0-9]{6,18}$/;
    if(!passwordReg.test(password)){
        errMsg.passwordErr = "您的密码不符合要求,密码包含6到18位大小写字母,数字";
    }
    //验证邮箱
    const emailReg = /^[a-zA-Z0-9_-]{3,15}@[a-zA-Z0-9_-]{2,15}\.com$/;
    if(!emailReg.test(email)){
        errMsg.emailErr = "您的密码不符合要求,密码包含6到18位大小写字母,数字";
    }
    res.errMsg = errMsg;
    next();
}

//注册的路由
router.post("/register",middleWare,(req,res) => {
    const {username,password,email} = req.body;
    const errMsg = res.errMsg;
    //4.查找数据库,查看用户名是否已经注册过
    //5.将用户信息保存到数据库中
    if(errMsg.usernameErr || errMsg.passwordErr || errMsg.rePasswordErr || errMsg.emailErr){
        res.render("register",{errMsg});
        return;
    }
    users.findOne({username},(err,data) => {
        if(!err){
            if(!data){
                users.create({
                    username,
                    password:sha1(password),
                    email
                },err => {
                    if(!err){
                        res.redirect("/login")
                    }else{
                        errMsg.err = "发现未知错误,注册失败";
                        res.render("register",{errMsg})
                    }
                })
            }else{
                errMsg.err = "发现未知错误,注册失败";
                res.render("register",{errMsg})
            }
        }else{
            //findOne方法失败
            errMsg.err = "网络出现错误,注册失败";
            res.render("register",{errMsg})
        }
    })
});

//登录的路由
router.post("/login",middleWare,(req,res) => {
    const {username,password} = req.body;
    //3.查看数据库中是否用用户信息,有则登录,没有则给出相应提示
    const errMsg = res.errMsg;
    if(errMsg.usernameErr || errMsg.passwordErr){
        res.render("login",{errMsg});
        return;
    }
    users.findOne({username},(err,data)=>{
        if(!err && data && data.password === sha1(password)){
            // res.cookie("_id",data.id,{maxAge:1000*3600*24*7});
            //创建session对象
            req.session._id = data.id;
            res.redirect("/userCenter");
        }else{
            errMsg.err = "您的账号或密码错误";
            res.render("login",{errMsg});
        }
    })
});

//将路由器暴露出去
module.exports = router;