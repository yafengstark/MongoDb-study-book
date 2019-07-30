/**
 * Created by fengfeng043 on 2019/7/30.
 */


var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// 创建Scheme(约束）对象
var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: "female"
  },
  address: String

});

// 定义模型

var StuModel = mongoose.model("student", stuSchema);

// exports.model = StuModel;
module.exports = StuModel;
