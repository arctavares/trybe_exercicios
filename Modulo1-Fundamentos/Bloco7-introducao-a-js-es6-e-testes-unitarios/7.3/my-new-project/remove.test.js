const myRemove = require('./remove');

test('remove number 3 from array [1, 2, 3, 4] ', () => {
  expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
});

test('remove number 3 from array [1, 2, 3, 4] ', () => {
  expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
});

test('remove number 3 from array [1, 2, 3, 4] ', () => {
  expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
});