// spec.js
calculator=require('./libs/calculator.js');
data = require('./libs/calc_data.js');

describe('Integer math', function() {
    
  beforeEach(function() {
    calculator.open();
  });

  it('should add two integers', function() {
    addition= new data.addition;
    calculator.add(addition.first,addition.second);
    expect(calculator.last_calculation()).toEqual(addition.result);
  });
    
  it('should subtract two integers', function() {
    subtraction= new data.subtraction;
    calculator.subtract(subtraction.first,subtraction.second);
    expect(calculator.last_calculation()).toEqual(subtraction.result);      
  });
    
  it('should multiply two integers', function() {
    multiplication = new data.multiplication;
    calculator.multiply(multiplication.first,multiplication.second);
    expect(calculator.last_calculation()).toEqual(multiplication.result);      
  });

  it('should divide two integers', function() {
    division = new data.division;
    calculator.divide(division.first,division.second);
    expect(calculator.last_calculation()).toEqual(division.result);      
  });

  it('should get modulus of two integers', function() {
    modulo = new data.modulo;
    calculator.modulo(modulo.first,modulo.second);
    expect(calculator.last_calculation()).toEqual(modulo.result);      
  });
    
});

