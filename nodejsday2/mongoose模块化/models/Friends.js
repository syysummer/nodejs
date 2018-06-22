//引入mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const friendsSchema = new Schema({
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
friendsSchema.pre("save",function (next){
    if(!this.isNew){
        console.log("该文档已经更新了");
        this.meta.updateDate = Date.now();
    }
    next();
});
const Friends = mongoose.model("Friends",friendsSchema);
//将Friends集合暴露出去
module.exports = Friends;