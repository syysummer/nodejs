//引入mongoose
const mongoose = require("mongoose");
//创建promise对象
const promise = new Promise(function (resolve,reject){
    mongoose.connect("mongodb://localhost:27017/study");
    mongoose.connection.once('open', err => {
        if (!err) {
            console.log('数据库连接成功了~~~');
            resolve();
        }else{
            reject(err);
        }
    });
});
promise
    .then(() => {
        const Schema = mongoose.Schema;
        // const StudentsSchema = new Schema({
        //     name:String,
        //     age:Number,
        //     sex:String,
        //     info:Schema.Types.Mixed,
        //     phone:{
        //         type:String,
        //         unique:true,
        //         required:true
        //     },
        //     hobby:[String],
        //     address:String,
        //     meta:{
        //         createDate:{
        //             type:Date,
        //             default: Date.now()
        //         },
        //         updateDate:{
        //             type:Date,
        //             default: Date.now()
        //         }
        //     }
        // });
        const FriendsSchema = new Schema({
            name:String,
            age:Number,
            sex:String,
            info:Schema.Types.Mixed,
            phone:{
                type:String,
                unique:true,
                required:true
            },
            hobby:[String],
            address:String,
            meta:{
                createDate:{
                    type:Date,
                    default: Date.now()
                },
                updateDate:{
                    type:Date,
                    default: Date.now()
                }
            }
        });
        // const Students = mongoose.model("Students",StudentsSchema);
        const Friends = mongoose.model("Friends",FriendsSchema);

        //创建文档
        // Students.create({
        //     name : "qqBoy",
        //     age :26,
        //     sex:"男",
        //     phone:"13567588965",
        //     address:"深圳",
        //     hobby:["打游戏","敲代码"],
        //     info:"一个阳光帅气的男生"
        // },err =>{
        //     if(!err){
        //         console.log("文档添加成功了")
        //     }else{
        //         console.log(err)
        //     }
        // });

        // Students.create({
        //     name : "hello",
        //     age :24,
        //     sex:"男",
        //     phone:"13566784965",
        //     address:"深圳",
        //     hobby:["打游戏","敲代码"],
        //     info:"一个阳光帅气的男生"
        // },err =>{
        //     if(!err){
        //         console.log("文档添加成功了")
        //     }else{
        //         console.log(err)
        //     }
        // });

        //查找文档
        // Students.find({name:"summer"},{ phone: 0},(err,data) => {
        //     if(!err){
        //         console.log(data);
        //     }else{
        //         console.log(err);
        //     }
        // });

        //查找文档,findOne回调函数返回的data是一个对象
        // Students.findOne({name:"summer"},(err,data) => {
        //     if(!err){
        //         console.log(data);
        //         console.log(data.id);
        //         console.log(data._id);
        //         console.log(data.isNew);
        //         data.update({$set:{address:"厦门"}},err =>{
        //             if(!err){
        //                 console.log("文档更新成功了")
        //             }else{
        //                 console.log(err)
        //             }
        //         });
        //     }else{
        //         console.log(err);
        //     }
        // });


        //更新文档
        // Students.update({name:"qqBoy"},{$inc:{age:1}},(err) => {
        //     if(!err){
        //        console.log("文档更新成功了")
        //     }else{
        //         console.log(err);
        //     }
        // })

        // 删除文档(未执行)
        Friends.remove({name:"小恺"},(err) => {
            if(!err){
                console.log("文档删除成功了")
            }else{
                console.log(err);
            }
        })
    })
    .catch(err => {
        console.log(err)
    });
