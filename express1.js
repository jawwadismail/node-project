var express  = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',function(req,res){  
    res.send('This is the homepage'); 
});

app.get('/homepage', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// app.use('/assets',function(req,res,next){
//     console.log(req.url)          no neeed 
//     next();
// }); USE below

app.use('/assets', express.static('assets'));
app.get('/profile/:id', function(req,res){
    res.send('You are requested to see the profile of id: '+req.params.id);
});

app.get('/profile1/:name', function(req,res){
    var data = {age: 29,job:'ninjas',hobbies:['sleeping','fighting']};
    res.render('profile1', {person: req.params.name,data:data});
});

app.get('/contact1', function(req,res){
    console.log(req.query);
    res.render('contact1',{qs:req.query});
});

app.post('/contact1',urlEncodedParser,function(req ,res){
    console.log(req.body);
    res.render('contact-success',{qs: req.body})
});






app.listen(3001);
