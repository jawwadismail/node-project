var http = require('http');

// var server = http.createServer(function(req,res){
//     console.log('request was made '+ req.url);
//     res.writeHead(200,{'Content-Type':'test/plain'});
//     res.end('Hey Nijas');
//  });

//  server.listen(3000,'127.0.0.1');
//  console.log('Yo now listening to port 3000')
var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/readServer.txt','utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeServer.txt');


readStream.on('data',function(chunk){
    console.log('new chunk recieved');
    writeStream.write(chunk);
});