// @flow

// add(a: number, b: number) => number
function sum(...args?: Array<number>): number {
  return args.reduce(function(a: number, b: number): number {
    if (typeof a === 'undefined') {
      return 0;
    }

    if (typeof b === 'undefined') {
      return a;
    }
    return a + b;
  }, 0);
}

export default sum;
