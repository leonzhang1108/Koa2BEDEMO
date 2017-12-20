import http from 'http'

let server = http.createServer((req, res) => {
  // 发送 HTTP 头部   
  // HTTP 状态值: 200 : OK  
  // 内容类型: text/plain  
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // 发送响应数据 "Hello World"  
  res.end('Hello,NodeJS');
})

server.listen(3000)
console.log('Server running at http://localhost:3000/')