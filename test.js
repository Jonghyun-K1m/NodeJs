const req=require('request');
//https://api.neople.co.kr/df/servers/all/characters?characterName=%EC%9E%BC%EC%9E%BC%EC%BF%A0%ED%82%A4&jobId=<jobId>&jobGrowId=<jobGrowId>&limit=<limit>&wordType=<wordType>&apikey=5UJ9dFEJCBFcB3VnvATewH6I3YqVY4sx
//기본 https://api.neople.co.kr/df/servers?apikey=5UJ9dFEJCBFcB3VnvATewH6I3YqVY4sx
req('https://api.neople.co.kr/df/servers/prey/characters?characterName=%EC%9E%BC%EC%9E%BC%EC%BF%A0%ED%82%A4&apikey=5UJ9dFEJCBFcB3VnvATewH6I3YqVY4sx',function(error,res,body){

    var data=JSON.parse(body);
    console.log(data);
})
