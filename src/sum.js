// @flow

// add(a: number, b: number) => number
function sum(x?: number, y?: number): ?number {
  // TODO: do the function  implementasion here
  if (typeof x === 'undefined') {
    return 0;
  } else if (typeof y === 'undefined') {
    return x;
  }

  return x + y;
}

export default sum;
