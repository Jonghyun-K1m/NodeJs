var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');  
var port=3000;
/*post형식데이터 응답 */
var server=http.createServer(function(req,res){

    var postdata='';
    req.on('data',function(data){
        postdata=postdata+data;
    })
    req.on('end',function(){

        var parsedQuery=qs.parse(postdata);
        console.log(parsedQuery);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('ss');
    });
});

server.listen(port,function(){
    console.log('st');
});
