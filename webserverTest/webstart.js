var http=require('http');

var server=http.createServer();

var port=3000;
server.listen(port,function(){
    console.log('started:%d',port);
});

server.on('connection',function(socket){
    var addr=socket.address();
    console.log('client:%s',addr.address);
});

server.on('request',function(req,res){
    console.log('client request');
    res.write("<h1>hey</h1>")
    console.dir(req);
});

server.on('close',function(){
    console.log('server close');
});
