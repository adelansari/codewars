/*
https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
Next bigger number with the same digits

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1

*/

// My Code

// Test Cases
const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(nextBigger(12), 21);
    Test.assertEquals(nextBigger(513), 531);
    Test.assertEquals(nextBigger(2017), 2071);
    Test.assertEquals(nextBigger(414), 441);
    Test.assertEquals(nextBigger(144), 414);
  });
});
