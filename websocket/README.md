## HTTP协议：简易轮询，即浏览器定时想服务器发起http请求来查询数据是否有数据更新。
## TCP协议：WebSocket 使用套接字连接，基于tcp协议。在浏览器和服务器之间建立套接字连接，实现双向数据请求。
## H5：server-sent event h5规范，可以从服务器实时推送数据到客户端。

### 服务器端
#### 1.服务器代码头
```
header('Content-Type: text/event-stream');
```
#### 2. EventSource事件
事件 open  （服务器连接被打开）
    onmessage （服务器接收消息）
    onerror （发生错误）
