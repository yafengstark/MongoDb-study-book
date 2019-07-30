/**
 * Created by fengfeng043 on 2019/7/30.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

mongoose.connection.once("open", function () {
  console.log("数据库连接成功")
});
