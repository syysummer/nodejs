const express = require("express");
const app = express();

//内置路由
app.use(express.static("public"));

//配置路由
app.get("/ajax",(req,res) =>{
    res.send("get路由打开了")
});

app.listen(3000,err => {
    if(!err){
        console.log("服务器启动成功了~~")
    }
});
