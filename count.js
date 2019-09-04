module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements  in this array ';
};

module.exports.adder = function(a,b){
    return `The sum of two numbers is ${a+b}`;
};

// ALTERNATIVE

module.exports = {
    counter: this.counter,
    adder:this.adder,
};