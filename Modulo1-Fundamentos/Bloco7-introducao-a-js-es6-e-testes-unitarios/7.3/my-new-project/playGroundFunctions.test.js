const functions = require('./playGroundFunctions');
const encodeFunction = functions.encode;
const decodeFunction = functions.decode;

test('test if encode is a function', () => {
  expect('function').toBe(typeof(encodeFunction));
})

test('test if decode is a function', () => {
  expect('function').toBe(typeof(decodeFunction));
})

test('test encode with input aeiou is converted to 12345', () => {
  expect("12345").toBe(encodeFunction('aeiou'));
})

test('test decode with input 12345 is converted to aeiou', () => {
  expect("aeiou").toBe(decodeFunction('12345'));
})

test('test case: encode armando converted to 1rm1nd4', () => {
  expect("1rm1nd4").toBe(encodeFunction('armando'));
})

test('test case: decode 1rm1nd4 converted to 1rm1nd4', () => {
  expect("armando").toBe(decodeFunction('1rm1nd4'));
})