const  fs = require("fs");
//console.log(fs);
fs.open("hello.txt","w",0o666,(err,fd) => {
 if(!err){
     console.log("open成功了");
     fs.write(fd,"今天又下雨了呢",0,"utf8",(err,written,string) =>{
         if(!err){
             console.log("write 成功了")
         }else{
             console.log("write 失败了")
         }
         fs.close( fd , err =>{
             if(!err){
                 console.log("文件执行完毕close");
             }else{
                 console.log(err);
             }
         })
     })
 }else{
     console.log("open失败了")
 }
});