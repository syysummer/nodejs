//引入express模块
const express = require("express");
const app = express();


app.get('/',(req, res) => {
    //获取post请求请求参数
    throw('post路由出问题了');
});
app.use((err,req,res,next) => {
    res.status(500).send(err);
});
//监听端口号
app.listen(3000,err => {
    if(!err){
        console.log("服务器启动成功了~~")
    }
});