'use strict';

var expect = require("chai").expect;

describe('arithmetic expression', function(){

  var arithmetic = require('../lib');

  describe('when adding two numbers', function(){
    var expression = arithmetic
                .select(1)
                .add(1)
                .build();

    it('should contain question', function(){
      expect(expression.question).equal('1 + 1');
    });

    it('should return answer', function(){
      expect(expression.answer).equal(2);
    });
  });

  describe('when subtracting using two numbers', function(){
    var expression = arithmetic
                .select(5)
                .subtract(1)
                .build();

    it('should contain question', function(){
      expect(expression.question).equal('5 - 1');
    });

    it('should return answer', function(){
      expect(expression.answer).equal(4);
    });
  });

  describe('when multiplying two numbers', function(){
    var expression = arithmetic
                .select(10)
                .multiply(10)
                .build();

    it('should contain question', function(){
      expect(expression.question).equal('10 * 10');
    });

    it('should return answer', function(){
      expect(expression.answer).equal(100);
    });
  });

  describe('when dividing two numbers', function(){
    var expression = arithmetic
                .select(10)
                .divide(2)
                .build();

    it('should contain question', function(){
      expect(expression.question).equal('10 / 2');
    });

    it('should return answer', function(){
      expect(expression.answer).equal(5);
    });
  });

  describe('when generating 1 + table', function(){
    var table = arithmetic
                  .tables(1, '+', 1)
                  .build(10);

    it('should return a table', function(){
      for (var ex = 1; ex === 10; i++) {  
        expect(table[ex].question).equal('1 + ' + ex);
        expect(table[ex].answer).equal(1 + ex);
      }      
    });
  });

  describe('when generating 1 x table', function(){

    var table = arithmetic
                  .tables(1, '*', 1)
                  .build(10);

    it('should return a table', function(){
      for (var ex = 1; ex === 10; i++) {  
        expect(table[ex].question).equal('1 * ' + ex);
        expect(table[ex].answer).equal(1 * ex);
      }      
    });
  });
});