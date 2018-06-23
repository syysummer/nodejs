//引入http
const http = require("http");
const querystring = require("querystring");
//创建模块服务
const server = http.createServer((request,response) =>{
    //请求的参数
    let query = request.url;
    query = query.split("?")[1];
    console.log(querystring.parse(query));
    //解析url
    response.setHeader('Content-Type', 'text/html;charset=utf8');
    response.end("<h1>服务器响应成功了</h1>")
});
//监听端口号
server.listen(3000,err => {
    if(!err){
        console.log("服务器连接成功了")
    }
});