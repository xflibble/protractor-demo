helper = require('./helper.js');

var addition = function () {
    this.first = helper.randomInt(1000); 
    this.second = helper.randomInt(1000);
    this.result = Math.floor(this.first+this.second)+'';
    }

var subtraction = function () {
    this.first = helper.randomInt(1000); 
    this.second = helper.randomInt(1000);
    this.result = Math.floor(this.first-this.second)+'';
    }

var multiplication = function () {
    this.first = helper.randomInt(1000); 
    this.second = helper.randomInt(1000);
    this.result = Math.floor(this.first*this.second)+'';
    }

var division = function () {
    this.first = helper.randomInt(1000); 
    this.second = helper.randomInt(1000);
    this.result = (this.first/this.second)+'';
    }

var modulo = function () {
    this.first = helper.randomInt(1000); 
    this.second = helper.randomInt(1000);
    this.result = (this.first%this.second)+'';
    }

module.exports.addition = addition;
module.exports.subtraction = subtraction;
module.exports.multiplication = multiplication;
module.exports.division = division;
module.exports.modulo = modulo;
