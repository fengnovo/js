var path = require("path");  
var logger = require("morgan");  
var cookieParser = require("cookie-parser");  
var bodyParser = require('body-parser');  
var express = require("express");  
var qiniu = require("qiniu");
var app = express();  
var config = require('./config');  

app.set('port',process.env.PORT || 3001);  

app.use(logger("dev"));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: false}));  
app.use(cookieParser());  
// 跨域设置
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

app.post('/upload', function(req, res) {
  var scopeVal = req.query.scopeVal;
  var accessKey = req.query.accessKey;
  var secretKey = req.query.secretKey;
  console.log('----------------------------------------------------');
  console.log({
    accessKey: accessKey,
    secretKey: secretKey,
    scopeVal: scopeVal,
  });
  
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
 
  var options = {
    scope: scopeVal,
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken=putPolicy.uploadToken(mac);
  var dataList = {
    token : uploadToken,
    bucketLists : config.bucket_lists
  }
  res.send(dataList);      // 依据传过来的上传空间生成token并返回
});




//catch 404 and forward to error handler  
app.use(function(req, res, next) {  
  var err = new Error('Not Found');  
  err.status = 404;  
  next(err);  
});  
  
// error handlers  
// development error handler  
// will print stacktrace  
if (app.get('env') === 'development') {  
  app.use(function(err, req, res, next) {  
    res.status(err.status || 500);  
    res.render('error', {  
      message: err.message,  
      error: err  
    });  
  });  
}  
  
// production error handler  
// no stacktraces leaked to user  
app.use(function(err, req, res, next) {  
  res.status(err.status || 500);  
  res.render('error', {  
    message: err.message,  
    error: {}  
  });  
});  
  
app.listen(app.get('port'));  
console.log("listen on port:" + app.get('port'));  
module.exports = app;  



