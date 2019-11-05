var fs=require('fs');
fs.readFile(`syntax/text`,'utf8',function(err,data){

    console.log(data);

});