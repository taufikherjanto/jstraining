// @flow

import add from '../add';

// add(1, 1) => 2
// add(100, 1000) => 1100

describe('add', ()=> {
  test('returns 2 when 1 and 1 is called', () => {
    let result = add(1, 1)
    let expected = 2;
    expect(result).toBe(expected);
  });

  test('return -2 when -1 and -1 is called', () => {
    let result = add(-1, -1);
    let expected = -2;
    expect(result).toBe(expected);
  });

  test('the first argument if the second one is not provided', () => {
    let result = add(1);
    let expected = 1;
    expect(result).toBe(expected);
  });

  test('no argument is provided, return 0 instead', () => {
    let result = add();
    let expected = 0;
    expect(result).toBe(expected);
  })
});
