'use strict';

function Arithmetic() {
  this.operators = {
    add      : '+',
    subtract : '-',
    multiply : '*',
    divide   : '/',
    modulus  : '%'
  };

  this.variable  = 'n';
  this.randomMax = 10;
  this.terms     = [];
  this.increment = 0;
}

module.exports = new Arithmetic();

Arithmetic.prototype._reset = function () {
  this.max       = 10;
  this.terms     = [];
  this.increment = 0;
};

Arithmetic.prototype.rand = function (max) {
  this.randmmMax = max;
  return this;
};

Arithmetic.prototype._parse = function (fn) {
  /*jshint -W054 */
  return new Function('return ' + fn)();
};

Arithmetic.prototype._isNumber = function (number, message) {
  //parseInt
  if (number && typeof number !== "number") { 
    this._reset();
    throw new Error(message); }
};

Arithmetic.prototype._findOperator = function (operator, message) {
  for (var op in this.operators) {
    if (this.operators[op] === operator) {
      return;   
    }
  }

  this._reset();
  throw new Error(message);
};

Arithmetic.prototype._random = function () {
  if (this.increment > 0) { 
    return this.increment ++; 
  }

  return Math.floor(Math.random() * this.randmmMax);
};

Arithmetic.prototype.select = function (number) {
  this._isNumber(number, 'input is not a number');

  if (!number) { 
    this.terms.push(this.variable); 
  } else {
    this.terms.push(number);
  }
  return this;
};

Arithmetic.prototype.add = function (number) {
  this.terms.push(this.operators.add); 
  this.select(number);
  return this;
};

Arithmetic.prototype.tables = function (number, operator, inc) {
  this._isNumber(number, 'input is not a number');
  this._isNumber(inc, 'inc is not a number');
  this._findOperator(operator, 'operator is not supported');
  
  this.select(number);
  this.terms.push(operator); 
  this.increment = inc;
  this.select();
  return this;
};

Arithmetic.prototype.subtract = function (number) {
  this.terms.push(this.operators.subtract); 
  this.select(number);
  return this;
};

Arithmetic.prototype.multiply = function (number) {
  this.terms.push(this.operators.multiply); 
  return this.select(number);
};

Arithmetic.prototype.divide = function (number) {
  this.terms.push(this.operators.divide); 
  return this.select(number);
};

Arithmetic.prototype.modulus = function (number) {
  this.terms.push(this.operators.modulus); 
  return this.select(number);
};

Arithmetic.prototype.build = function (count) {
  var response = [];

  if (!count) { count = 1; }

  for (var i = 0; i < count; i++) {
    var term = this.terms.slice(0);

    for (var x = 0; x < term.length; x++) {
      if (term[x] === this.variable) {
        term[x] = this._random();
      }
    }

    response.push({ 
      question : term.join(' '), 
      answer : this._parse(term.join(''))
    });
  }

  this._reset();

  if (response.length === 1 ) {
    return response[0];
  } else {
    return response;
  }
};