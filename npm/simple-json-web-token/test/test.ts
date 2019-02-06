import * as jwt from '../lib/index.js'; 

var secret:string = 'test-secret-string';
var data: object = {
    text: 'test',
    exp: new Date(Date.now() + 10 * 60 * 1000).getTime() / 1000
};

console.log('before jwtEncode------------>', data);
var token:string = jwt.encode(data, secret);
console.log('jwtEncode token------------>', token);
var decodedData: object = jwt.decode(token, secret);
console.log('jwtDecoded data------------>', decodedData);
