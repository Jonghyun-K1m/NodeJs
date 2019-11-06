var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request,response){
 
    
    response.writeHead(200);
    response.end('hey');
});
app.listen(3000);