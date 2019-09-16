var express = require('express')
  , http = require('http');
 
var app=express();

app.set('port',process.env.PORT||3000);

http.createServer(app).listen(app.get('port'),function(){
    console.log('se');
});

app.use(function(req,res,next){
    console.log('first');
    res.writeHead('200',{'Context-Type':'text/html;charset=utf8'});
    res.end('<h1> response</h1>');
});