var open = function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

var calculate = function () {
        return element(by.id('gobutton')).click();
    }

var set_first = function (first) {
        element(by.model('first')).sendKeys(first);
    } 

var set_second = function (second) {
        element(by.model('second')).sendKeys(second);
    }

var operation = function (first, second, operation) {
        set_first(first);
        set_second(second);
        element(by.model('operator')).$('[value="' + operation + '"]').click();  
        calculate();
    } 

var add = function (first, second) {
    operation(first,second,'ADDITION');
}

var subtract = function (first, second) {
    operation(first,second,'SUBTRACTION');
}
 
var multiply = function (first, second) {
    operation(first,second,'MULTIPLICATION');
}

var divide = function (first, second) {
    operation(first,second,'DIVISION');
}

var modulo = function (first, second) {
    operation(first,second,'MODULO');
}

var last_calculation = function () {
        return element(by.binding('latest')).getText();
    }

module.exports.open = open
module.exports.calculate = calculate;
module.exports.set_first = set_first;
module.exports.set_second = set_second;
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.modulo = modulo;
module.exports.last_calculation = last_calculation;