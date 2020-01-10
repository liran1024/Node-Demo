var fs=require('fs')
fs.writeFile('bbb.txt','123',function (err) {
    if(err){
        console.log('写入失败')
    }
})