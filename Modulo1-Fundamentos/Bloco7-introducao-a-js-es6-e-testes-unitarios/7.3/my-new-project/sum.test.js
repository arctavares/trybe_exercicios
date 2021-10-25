// sum.test.js
const sum = require('./sum');

test('sums 4 + 5', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sums 0 + 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('test error throw', () => {
  expect(() => {sum(4, "5")}).toThrow();
});

test('test error throw message', () => {
  expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'));
});
