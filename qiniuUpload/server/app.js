var path = require("path");  
var logger = require("morgan");  
var cookieParser = require("cookie-parser");  
var bodyParser = require('body-parser');  
var express = require("express");  
var qiniu = require("qiniu");
var app = express();  
var config = require('./config');  

app.set('port',process.env.PORT || 3000);  

app.use(logger("dev"));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: false}));  
app.use(cookieParser());  
app.use(express.static(__dirname + '/../public'));  


app.post('/upload', function(req, res) {
  var scopeVal = req.body.scopeVal;
  var accessKey = req.body.accessKey;
  var secretKey = req.body.secretKey;
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



app.use("/", require("./route.js"));  

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



