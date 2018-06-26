const express = require("express");
//引入请求体解析模块
const bodyParser = require("body-parser");
const app = express();

//第三方中间件
app.use(bodyParser.urlencoded({extended: true}));

app.post('/',(req,res) =>{
    console.log(req.body);
    res.send("服务器响应成功了")
});

app.listen(3000,err => {
  if(!err){
      console.log("服务器启动成功了")
  }
  });