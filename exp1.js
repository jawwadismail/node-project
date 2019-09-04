var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Conent-Type':'plain/text'});
    var myReadStream = fs.createReadStream(__dirname + '/readServer.txt','utf8');
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('You are listening to port 3000');