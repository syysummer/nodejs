const express = require("express");
const db = require("./dataBase/db");
const cities = require("./model/cities");
const app = express();
app.use(express.static("public"));

db
  .then(()=>{
      //创建省份的路由
      app.get("/province",(req,res)=>{
          cities.find({level:1},{_id:0,code:0,level:0},(err,data) => {
              if(!err && data.length){
                  res.send({status:"ok",data});
              }else{
                  res.send({status:"err"});
              }
          })
      });
      //创建市的路由
      app.get("/city",(req,res)=>{
          const {province} = req.query;
          if(!province){
              res.send({status:"数据相应失败"});
              return;
          }
          cities.find({province,level:2},{_id:0,code:0,level:0},(err,data) => {
              if(!err && data.length){
                  res.send({status:"ok",data});
              }else{
                  res.send({status:"err"});
              }
          })
      });
      //创建区县的路由
      app.get("/county",(req,res)=>{
          const {province,city} = req.query;
          if(!province && !city){
              res.send({status:"数据相应失败"});
              return;
          }
          cities.find({province,city,level:3},{_id:0,code:0,level:0},(err,data) => {
              if(!err && data.length){
                  res.send({status:"ok",data});
              }else{
                  res.send({status:"err"});
              }
          })
      })
  })
  .catch(err =>{
      console.log(err)
  });


app.listen(3000,err => {
    if(!err){
        console.log("服务器连接成功了~~")
    }
})