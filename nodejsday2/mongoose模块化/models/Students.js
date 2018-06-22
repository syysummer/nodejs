//引入mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentsSchema = new Schema({
    name:String,
    age:Number,
    sex:String,
    address:String,
    info:Schema.Types.Mixed,
    phone:{
        type:String,
        unique:true,
        required:true
    },
    hobby:[String],
    meta:{
        createTime:{
            type:Date,
            default:Date.now()
        },
        updateTime:{
            type:Date,
            default:Date.now()
        }
    }
});
//设定预设函数更新相应的时间
studentsSchema.pre("save",function (next){
if(!this.isNew){
    console.log("该文档已经更新了");
    this.meta.updateDate = Date.now();
}
next();
});
const Students = mongoose.model("Students",studentsSchema);
//将Students集合暴露出去
module.exports = Students;