var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Conent-Type':'plain/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('You are listening to port 3000');