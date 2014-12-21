arithmetic-expressions
==================

arithmetic-expressions is a simple, fluent interface but building arithmetic expressions.

[![build status](https://travis-ci.org/AndrewKeig/arithmetic-expressions.svg)](http://travis-ci.org/andrewkeig/arithmetic-expressions)

#install

```
npm install arithmetic-expressions --save
```


#use


##generate an expression 1 + 1
```
var expression = arithmetic
                .select(1)
                .add(1)
                .build();
                
response:

{ question: '1 + 1', answer: 2 }
```

##generate an expression 1 + 1
```
var expression = arithmetic
                .select(5)
                .subtract(1)
                .build();
                
response: 

{ question: '5 - 1', answer: 4 }
```


##generate a 1 * table
```
var table = arithmetic
            .tables(1, '*', 1)
            .build(10);
                
response:

[ { question: '1 * 1', answer: 1 },
  { question: '1 * 2', answer: 2 },
  { question: '1 * 3', answer: 3 },
  { question: '1 * 4', answer: 4 },
  { question: '1 * 5', answer: 5 },
  { question: '1 * 6', answer: 6 },
  { question: '1 * 7', answer: 7 },
  { question: '1 * 8', answer: 8 },
  { question: '1 * 9', answer: 9 },
  { question: '1 * 10', answer: 10 } ]

```
