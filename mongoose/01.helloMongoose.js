/**
 * Created by fengfeng043 on 2019/7/30.
 *
 * 1、下载mongoose ： npm i mongoose --save
 * 2、引入mongoose ： var mongoose = request("mongoose")
 *
 *
 *
 * 3、连接数据库
 *
 * const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


 Scheme
 Model
 Document


 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

mongoose.connection.once("open", function () {
  console.log("数据库连接成功")
});

mongoose.connection.once("close", function () {
  console.log("数据库关闭");
});

// mongodb一般情况下只需要连接一次，连接一次以后，除非项目停止服务器关闭，
// 连接不会断开。
mongoose.disconnect();





