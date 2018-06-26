//连接数据库,引入db
const db = require("./dataBase/db");
//引入模块对象
const users = require("./model/users");
//引入express
const express = require("express");
//引入body-parser模块
const bodyParser = require("body-parser");

//引入sha1
const sha1 = require("sha1");

//创建应用对象
const app = express();

db
    .then(() => {
        // console.log(db);
        //使用内置中间件,将public目录暴露出去
        app.use(express.static("public"));
        //引入第三方中间件解析请求体
        app.use(bodyParser.urlencoded({extended:true}));

        //使用中间件将正则验证部分的代码抽取出来
        function middleWare(req,res,next){
            //1.获取到用户的信息
            const {username,password,rePassword,email} = req.body;
            //2.验证两次输入的密码是否一致
            if(rePassword && password !== rePassword){
                res.send("两次输入的密码不一致,请重新输入");
                return;
            }
            //3.正则验证用户名,密码,邮箱是否符合基本要求
            //验证用户名(用户名包含5到15位大小写字母,数字,下划线)
            const usernameReg = /^[a-zA-Z0-9_]{5,15}$/;
            if(!usernameReg.test(username)){
                res.send("您的用户名不符合要求,用户名包含5到15位大小写字母,数字,下划线");
                return;
            }
            //验证密码(密码包含6到18位大小写字母,数字)
            const passwordReg = /^[a-zA-Z0-9]{6,18}$/;
            if(!passwordReg.test(password)){
                res.send("您的密码不符合要求,密码包含6到18位大小写字母,数字");
                return;
            }
            //验证邮箱
            const emailReg = /^[a-zA-Z0-9_-]{3,15}@[a-zA-Z0-9_-]{2,15}\.com$/;
            if(email && !emailReg.test(email)){
                res.send("您的邮箱不符合要求,格式不正确");
            }
            next();
        }

        //注册的路由
        app.post("/register",middleWare,(req,res) => {
            const {username,password,email} = req.body;
            //4.查找数据库,查看用户名是否已经注册过
            //5.将用户信息保存到数据库中
            users.findOne({username},(err,data) => {
                if(!err){
                    if(!data){
                        users.create({
                            username,
                            password:sha1(password),
                            email
                        },err => {
                            if(!err){
                                res.send("用户注册成功了")
                            }else{
                                res.send("发现未知错误,注册失败")
                            }
                        })
                    }else{
                        res.send("您的用户名已经被注册,请确认后再注册")
                    }

                }else{
                    //findOne方法失败
                    res.send("发现未知错误,注册失败")
                }
            })
        });

        //登录的路由
        app.post("/login",middleWare,(req,res) => {
            const {username,password} = req.body;
         //3.查看数据库中是否用用户信息,有则登录,没有则给出相应提示
            users.findOne({username},(err,data)=>{
                console.log(sha1(password));
                if(!err && data && data.password === sha1(password)){
                      res.send("恭喜您登录成功");
                  }else{
                      res.send("您的账号或密码错误");
                  }
            })
        });
    })
    .catch(err => {
        console.log("数据库连接失败了")
    });

//监听端口号
app.listen(3000,err => {
   if(!err){
       console.log("服务器成功启动了")
   }
});