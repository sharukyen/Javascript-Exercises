const sumAll = require('./sumAll')

describe('sumAll', () => {
  test('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);
  });
  test('works with large numbers', () => {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  test('works with larger number first', () => {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  test('returns ERROR with negative numbers', () => {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
<<<<<<< HEAD
  test('returns ERROR with non-number parameters', () => {
=======
  test.skip('returns ERROR with non-integer parameters', () => {
    expect(sumAll(2.5, 4)).toEqual('ERROR');
  });
  test.skip('returns ERROR with non-number parameters', () => {
>>>>>>> 7ff69d817d50bc08c5e924fbee1cb0cd5c43ad53
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  test('returns ERROR with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});