const express = require("express");
const app = express();


//使用内置中间件sendAjax()
app.use(express.static('public'));

//创建路由
app.get("/ajax",(req,res) => {
    res.send(req.query);
});

app.listen(3000,err => {
   if(!err){
       console.log("服务器启动成功了~~");
   }
});