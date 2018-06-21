const fs = require("fs");
//fs.readFile(path[, options], callback)
fs.readFile("package.json",(err,data) => {
    if(!err){
        console.log("读取成功了");
        console.log(data.toString());
    }else{
        console.log(err);
    }
});
