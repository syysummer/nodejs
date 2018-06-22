//index.js为主文件,入口文档
//引入数据连接模块
const db = require("./dataBase/db");
const Students = require("./models/Students");
const Friends = require("./models/Friends");

db.then(() => {
    const stu = new Students({
        name:"小米",
        age:20,
        sex:"女",
        address:"云南",
        info:"一个藏族菇凉",
        phone:"13078956345",
        hobby:["运动"],
    });
    stu.save( err => {
        if(!err){
           console.log("Students添加成功了")
        }else{
            console.log("Students添加失败了")
        }
    });
    Friends.create({
        name:"小恺",
        age:22,
        sex:"男",
        address:"北京",
        info:"一个北京男孩",
        phone:"13157869786",
        hobby:["阅读","唱歌"],
    },err => {
        if(!err){
            console.log("Friends文档添加成功了")
        }else{
            console.log("Friends文档添加失败了")
        }
    })
}).catch(err => {
    console.log(err);
});
