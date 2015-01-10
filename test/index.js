'use strict';

var expect = require("chai").expect;

describe('arithmetic expression', function(){

  var arithmetic = require('../lib');

  describe('when adding two numbers', function(){
    var expression = arithmetic
                .select(1)
                .add(1)
                .build();

    //console.log(expression);

    it('should contain 3 parts', function(){
      expect(expression.parts.length).equal(3);
      expect(expression.parts[0]).equal(1);
      expect(expression.parts[1]).equal('+');
      expect(expression.parts[2]).equal(1);
    });

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

    //console.log(expression);

    it('should contain 3 parts', function(){
      expect(expression.parts.length).equal(3);
      expect(expression.parts[0]).equal(5);
      expect(expression.parts[1]).equal('-');
      expect(expression.parts[2]).equal(1);
    });

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

    //console.log(expression);

    it('should contain 3 parts', function(){
      expect(expression.parts.length).equal(3);
      expect(expression.parts[0]).equal(10);
      expect(expression.parts[1]).equal('*');
      expect(expression.parts[2]).equal(10);
    });


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

    //console.log(expression);

    it('should contain 3 parts', function(){
      expect(expression.parts.length).equal(3);
      expect(expression.parts[0]).equal(10);
      expect(expression.parts[1]).equal('/');
      expect(expression.parts[2]).equal(2);
    });

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

    //console.log(table);

    it('should return a table', function(){
      for (var ex = 1; ex === 10; i++) {  
        expect(table[ex].parts.length).equal(3);
        expect(table[ex].question).equal('1 + ' + ex);
        expect(table[ex].answer).equal(1 + ex);
      }      
    });
  });

  describe('when generating 1 x table', function(){

    var table = arithmetic
                  .tables(1, '*', 1)
                  .build(10);

    //console.log(table);

    it('should return a table', function(){
      for (var ex = 1; ex === 10; i++) {  
        expect(table[ex].parts.length).equal(3);
        expect(table[ex].question).equal('1 * ' + ex);
        expect(table[ex].answer).equal(1 * ex);
      }      
    });
  });
});