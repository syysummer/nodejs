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
        const StudentsSchema = new Schema({
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
        const Students = mongoose.model("Students",StudentsSchema);
        const s1 = new Students({
            name:"summer",
            age:25,
            sex:"女",
            address:"jiangxi",
            info:"a beautiful girl",
            phone:"12366685557",
            hobby:["看书","学编程"]
        });
        s1.save(err => {
            if(!err){
                console.log("数据库添加成功了");
            }
        });

    })
    .catch(err => {
        console.log(err)
    });





