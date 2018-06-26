const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citiesSchema = new Schema({
    _id:String,
    code:String,
    province:String,
    city:String,
    county:String,
    name:String,
    level:Number
});
//创建模型对象
const cities = mongoose.model("cities",citiesSchema);
//暴露出去
module.exports = cities;