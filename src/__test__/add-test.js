const add = require('../add');

// add(1, 1) => 2
// add(100, 1000) => 1100

describe('add', ()=> {
  test('returns 2 when 1 and 1 is called', () => {
    let result = add(1, 1);
    let expected = 2;
    expect(result).toBe(expected);
  }
});
