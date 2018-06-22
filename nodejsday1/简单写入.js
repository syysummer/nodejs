
const fs = require("fs");
// let w = fs.writeFile("write.txt","今天是个好日子,气温刚刚好",err => {
//     if(!err){
//         console.log("write成功了")
//     }else{
//         console.log(err);
//     }
// });

let buf = Buffer.from("you are a beautiful girl");
//在解析过程中,自动执行了buf.toString();
fs.writeFile("write.txt",buf,err => {
    if(!err){
        console.log(err);
        console.log("write成功了")
    }else{
        console.log(err);
    }
});