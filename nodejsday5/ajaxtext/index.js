const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/jQueryAjax",(req,res) => {
    res.send(req.query);
});

app.listen(3000,err => {
    if(!err){
        console.log("服务器启动成功了~~")
    }
});