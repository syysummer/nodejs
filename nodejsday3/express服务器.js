//引入express
const express = require("express");
//创建应用app对象
const app = express();
//配置路由
app.get("/",(request,response) => {
    const query = request.query;
    console.log(query);
    response.send("<h1>express响应成功了</h1>")
});
app.listen(3000,err => {
    if(!err){
        console.log("express服务器连接成功了")
    }
});