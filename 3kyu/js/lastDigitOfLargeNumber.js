/*
https://www.codewars.com/kata/5518a860a73e708c0a000027
For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
*/

const lastDigit = (as) => {
  if (as.length === 0) return 1;
  let result = 1;
  for (let i = as.length - 1; i >= 0; i--) {
    result = as[i] ** (result % 4);
  }
  return result % 10;
};

console.log(lastDigit([])); // 1
console.log(lastDigit([0, 0])); // 1
console.log(lastDigit([2, 2, 2, 0])); // 4
console.log(lastDigit([937640, 767456, 981242])); // 0
console.log(lastDigit([7, 6, 21])); // 1
