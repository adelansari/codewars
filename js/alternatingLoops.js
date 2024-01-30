/*
Write `function combine()`
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
*/

const combine = (...argument) => {
  let maxLength = 0;
  argument.forEach((array) => {
    if (array.length > maxLength) {
      maxLength = array.length;
    }
  });

  let result = [];
  for (let i = 0; i < maxLength; i++) {
    for (let array of argument) {
      if (i < array.length) {
        result.push(array[i]);
      }
    }
  }

  return result;
};

console.log(combine(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 4, 5]
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])); // ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
