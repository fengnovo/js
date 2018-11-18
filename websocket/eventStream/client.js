var express = require('express');
var app = express();
app.use(express.static('./'));
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); 
});
app.listen(8002);