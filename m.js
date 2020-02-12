
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var port=3000;

var server=http.createServer(function(req,res){

    var postdata='';
    req.on('data',function(data){
        postdata=postdata+data;
       // console.log(postdata);
   })
    req.on('end',function(){

        var parsedQuery=qs.parse(postdata);
        console.log(parsedQuery);
        res.writeHead(200,{'Content-Type':'text/html'});
        //res.end('ss');
        //res.write('ss');
     
    });
});

server.listen(port,function(){
    console.log('st');
});