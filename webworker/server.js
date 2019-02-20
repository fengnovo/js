const express = require('express');
const app = express();
app.use(express.static('./web'));
app.listen('8080',() => {
    console.log('server listening 8080...');
});