var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type":"text/event-stream; charset=utf-8",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
    });

    let interval = setInterval(function () {
        // 必须data: 开头
      res.write('data:中文' + (new Date().toString()) + '\n\n');
    }, 1000);

    // res.write('event:sentMessage  这是条消息\n');

    req.connection.addListener('close', function () {
      clearInterval(interval);
    }, false);
}).listen(8001);