var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Conent-Type':'application/json'});
    var obj = {
        name:'jawwad',
        age:20,
        passion:'coding'
    }
    res.end(JSON.stringify(obj));

});

server.listen(3000,'127.0.0.1');
console.log('You are listening to port 3000');