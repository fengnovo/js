const express = require('express');
const app = express();
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});
app.get('/user',(req, res) => {
    res.end('这是user接口');
});
app.get('/list',(req, res) => {
    res.end('这是list接口');
});
app.post('/user',(req, res) => {
    res.end('post user接口');
});
app.all('*', (req, res) => {
    res.end('你输入的地址有误。');
});
app.listen(3000,()=> {
    console.log(`server listening 3000`);
});