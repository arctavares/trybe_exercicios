const myFizzBuzz = require('./myFizzBuzz');

test('verify return with input 15 equal to fizzbuzz', () => {
  expect('fizzbuzz').toEqual(myFizzBuzz(15));
});

test('verify return with input 9 equal to fizz', () => {
  expect('fizz').toEqual(myFizzBuzz(9));
});

test('verify return with input 20 equal to buzz', () => {
  expect('buzz').toEqual(myFizzBuzz(20));
});

test('verify return with input 22 to equal 22', () => {
  expect(22).toEqual(myFizzBuzz(22));
});

test('verify wrong input type', () => {
  expect(false).toEqual(myFizzBuzz("10"));
});