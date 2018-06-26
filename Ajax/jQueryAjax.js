const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/ajax",(req,res)=>{
   const {callback} = req.query;
   const data = {username:"sunwukong"};
   res.send(callback+"("+ JSON.stringify(data)+")");
});

app.listen(3000,(err) => {
 if(!err){
     console.log("服务器启动成功了~~")
 }
});