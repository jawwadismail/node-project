var events = require('events');
var util   = require('util');

var person = function(name)
{
    this.name = name ;
};

util.inherits(person,events.EventEmitter)

var jawwad  = new person('jawwad');
var pagals  = new person('pagals');
var sagals  = new person('sagals');

var people  = [jawwad,pagals,sagals];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' says: '+ msg)
    });
});
jawwad.emit('speak','Hi i am jawwad');
pagals.emit('speak','Hi i am pagals');
sagals.emit('speak','Hi i am sagals');

var fs = require('fs')

