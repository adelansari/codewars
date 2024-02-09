/*
https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
You may assume that the input will always be valid.

Examples
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n
*/

const lastDigit = (n, m) => {
  if (m === 0n) return 1n;

  // last digit patterns repeat every 4, so take modulo 4 of the exponent
  const exp = Number(m % 4n);
  if (exp === 0) return n ** 4n % 10n;

  return n ** BigInt(exp) % 10n;
};

// // testing
// for (let i = 0; i < 20; i++) {
//   console.log(2 ** i % 10);
// }
// // the results start repeating after the 4th power.

console.log(lastDigit(4n, 1n), 4n); // returns 4n
console.log(lastDigit(4n, 2n), 6n); // returns 6n
console.log(lastDigit(9n, 7n), 9n); // returns 9n
console.log(lastDigit(10n, 10000000000n), 0n); // returns 0n
