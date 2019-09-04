var fs = require('fs')
var myreadStream = fs.createReadStream(__dirname + '/readServer.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeServer.txt');

myreadStream.pipe(mywriteStream);