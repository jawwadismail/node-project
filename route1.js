var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(req,res){

    if(req.url === '/home' || req.url === '/'){

        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){

        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var ninjas = [{name:'Jawwad',age:18,roll:18},{name:'Younus',age:20,roll:29}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
 });

 server.listen(3000,'127.0.0.1');
 console.log('Yo now listening to port 3000')