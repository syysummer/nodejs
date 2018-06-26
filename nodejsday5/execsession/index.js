//连接数据库,引入db
const db = require("./dataBase/db");
//引入express
const express = require("express");
//引入body-parser模块
const bodyParser = require("body-parser");
//引入路由器模块
const userRouter = require("./router/userRouter");
//引入用户界面模块
const userFaceRouter = require("./router/userFaceRouter");

//引入session
const session = require("express-session");
//引入MongoStore
const MongoStore = require("connect-mongo")(session);

//创建应用对象
const app = express();

//使用ejs
app.set("views","views");
app.set("view engine","ejs");


//使用内置中间件,将public目录暴露出去
app.use(express.static("public"));
//引入第三方中间件解析请求体
app.use(bodyParser.urlencoded({extended:true}));

db
    .then(() => {
        //配置session的持久化存储
        app.use(session({
            secret: 'hello',
            saveUninitialized: false, // don't create session until something stored
            resave: false, //don't save session if unmodified
            store: new MongoStore({
                url: 'mongodb://localhost:27017/users',
                ttl:3600*24*7
            })
        }));

        //使用用户界面路由器模块
        app.use(userFaceRouter);
        //使用路由器模块
        app.use(userRouter);
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