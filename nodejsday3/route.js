//引入express
const express = require("express");
//创建应用对象
const app = express();
//创建路由
//根路由
app.get('/',(req,res) => {
    // const query = req.query;
    // console.log(query);
    // console.log(req.headers);
    // console.log(req.get('cookie'));
    // console.log(req.get('cookie'));
    //Webstorm-a327319a=f45c9fe1-6325-46f2-b8de-a8cece75f3bc; _ga=GA1.1.873968395.1527065230


    // res.download(__dirname + '/async.html');
    res.sendFile(__dirname + '/async.html');



    // res.status(400);
    // res.redirect("http://www.baidu.com");
    // res.json(req.query);
    // res.set('Content-Type', 'text/html;charset=utf8');
    // console.log(res.get('Content-Type'));
    // res.send("您的服务器已经响应成功了")
});
app.get('/hello',(req,res) => {
    const query = req.query;
    console.log(query);
    res.send("您的hello服务器已经响应成功了")
});

//指定响应id内容的路由
app.get('/food/:id',(req,res) => {
    const params = req.params;
    console.log(params);
    res.send("您的food服务器已经响应成功了")
});


//通过正则表达式指定内容的路由
app.get(/^\/(meishi)\/\d+/,(req,res) => {
    const params = req.params;
    console.log(params);
    res.send("您的正则表达式meishi服务器已经响应成功了")
});


//监听端口号
app.listen(3000,err => {
  if(!err) {
      console.log("服务器连接成功了")
  }
});