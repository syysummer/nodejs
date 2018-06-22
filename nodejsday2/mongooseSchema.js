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

        //预设函数,该函数中的回调函数会在,save的回调函数执行之前执行
        //需要在文档进行了更新才会updateDate
        //通过 const s1 =  new Students({ ...}); s1.save()来保存的文档对象
        //不会updateDate
        StudentsSchema.pre("save",function (err){
        if(!this.isNew){
            //数据更新过了
            console.log("数据更新过了");
            this.meta.updateDate = Date.now();
            console.log(this);
        }else{
            console.log(err);
        }
        });

        const Students = mongoose.model("Students",StudentsSchema);

        Students.findOne({name:"jack"},(err,data) =>{
            if(!err){
                data.hobby = "敲代码";
                data.save(err =>{
                    if(!err){
                        console.log("文档更新成功了")
                    }else{
                        console.log("文档更新失败了")
                    }
                })
            }
        })

    })
    .catch(err => {
        console.log(err)
    });