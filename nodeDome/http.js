//测试node运行
console.log('李冉')
//http协议
//引入http模块
var http=require('http')
//创建服务内含回调函数
var server=http.createServer(function (req,res) {
    console.log('node服务')
    //request   请求  输入给服务器的参数
    //response  响应  响应给浏览器的信息
    res.write('node')//输出
    switch (req.url){
        case '/1.html':
            res.write('111')
        break;
        case  '/2.html':
            res.write('222')
            break;
        default:
            res.write('404')
            break;
    }
    res.end()//结束操作

})
//监听 --  端口
server.listen(9092)
