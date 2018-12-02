const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const {User} = require('./model/User');
const auth = require('./auth');
const {
    secret
} = require('./config');

const app = express();
// 将 application/x-www-form-urlencoded 进行序列化给req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
// 将 application/json请求转化成json 进行序列化给req.body
app.use(bodyParser.json());

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
})

// app.get('/', function (request, response) {
//     response.end('你好');
// });
// 注册
app.post('/signup', async function (request, response) {
    let user = request.body;
    let result = await User.create(user);
    if (result) {
        response.json({
            errCode: 0,
            data: {
                id: result._id,
                username: result.username
            }
        });
    } else {
        response.json({
            errCode: 1,
            data: '注册失败！'
        });
    }
});
// 登录
app.post('/signin', async function (request, response) {
    let user = request.body;
    let result = await User.findOne(user);
    if (result) {
        let token = jwt.encode({
            user: {
                id: result._id,
                username: result.username
            },
            exp: new Date(Date.now() + 10 * 60 * 1000).getTime() / 1000
        }, secret);
        response.json({
            errCode: 0,
            data: {
                token
            }
        });
    } else {
        response.json({
            errCode: 1,
            data: '登录失败！'
        });
    }
});
// 获取用户信息(受保护的)
app.get('/user', auth, function (request, response) {
    let user = request.user;
    if (user) {
        response.json({
            errCode: 0,
            data: {
                user
            }
        });
    } else {
        response.status(401).send('Not Allowed');
    }
});


app.listen(8001, function () {
    console.log('listening http://localhost:8001 ...');
});