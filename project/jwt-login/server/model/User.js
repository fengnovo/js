const  mongoose = require('mongoose');
const { dbUrl } = require('../config');
const connect = mongoose.createConnection(dbUrl,{ useNewUrlParser: true });
let UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
exports.User = connect.model('User', UserSchema);