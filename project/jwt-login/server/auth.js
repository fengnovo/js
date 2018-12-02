const jwt = require('simple-json-web-token');
const { secret } = require('./config');
module.exports = function (request, response, next) {
    // 注意是request.headers不是equest.header
    let authorization = request.headers.authorization;
    if(authorization) {
        try {
            let decoded = jwt.decode(authorization.split(' ')[1], secret);
            request.user = decoded.user; // 过期了
            next();
        } catch (error) {
            response.status(401).send('Not Allowed');
        }
    } else {
        response.status(401).send('Not Allowed');
    }
}