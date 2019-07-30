/**
 * Created by fengfeng043 on 2019/7/30.
 */


require("./tools/conn_mongo");

var Student = require("./models/student");

Student.find({}, function (err,docs) {
  if(!err){
    console.log(docs);
  }
});
