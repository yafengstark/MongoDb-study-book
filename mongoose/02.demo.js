/**
 * Created by fengfeng043 on 2019/7/30.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

mongoose.connection.once("open", function () {
  console.log("数据库连接成功")
});


var Schema = mongoose.Schema;

// 创建Scheme(约束）对象
var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: "female"
  },
  address: String,

});

// 通过Schema来创建Model
// Model代表的是数据库中的集合，通过Model才能对数据库进行操作
// mongoose自动将集合名变复数，本身是复数就不管了
var StuModel = mongoose.model("student", stuSchema);

/**
 * 有了model就可以进行crud
 *
 */

// 向数据库中插入一个文档
// StuModel.create({
//   name:"白骨精",
//   age:18,
//   address:"花果山"
// }, function (err) {
//   if(!err){
//     console.log("插入成功");
//   }
// });
// StuModel.create([{
//   name: "猪八戒",
//   age: 18,
//   gender: "male",
//   address: "花果山"
// }, {
//   name: "沙和尚",
//   age: 18,
//   gender: "male",
//   address: "花果山"
// }], function (err) {
//   if (!err) {
//     console.log(arguments);
//   }
// });

// 查询
// filter «Object»
// [projection] «Object|String» optional fields to return, see Query.prototype.select()
//   [options] «Object» optional see Query.prototype.setOptions()
//   [callback] «Function»

/**
 * 修改
 */
StuModel.updateOne({})


/**
 * 删除
 *
 */




StuModel.find({name: "孙悟空"}, "name age -_id", function (err, docs) {
  if (!err) {
    console.log(docs)
  }
});
