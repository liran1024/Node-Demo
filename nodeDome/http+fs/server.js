var http=require('http')
var fs=require('fs')

var server=http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    var fileName=req.url
    fs.readFile('index.html',function (err,data) {
        if(err){
            res.write('操作失败')
        }else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(9093)