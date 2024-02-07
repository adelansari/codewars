/*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

// Method 1
function incrementString(inputString) {
  let num = '';
  let str = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    if (inputString[i] >= '0' && inputString[i] <= '9') {
      num = inputString[i] + num;
    } else {
      str = inputString.slice(0, i + 1);
      break;
    }
  }

  let newNum = '';
  let carry = 1;
  for (let i = num.length - 1; i >= 0; i--) {
    let sum = +num[i] + carry;
    if (sum === 10) {
      carry = 1;
      newNum = '0' + newNum;
    } else {
      carry = 0;
      newNum = sum.toString() + newNum;
    }
  }

  if (carry) newNum = '1' + newNum;

  return str + newNum;
}

// Method 2
function incrementString(inputString) {
  let hasNumbers = /\d/.test(inputString);
  if (hasNumbers) {
    let i = inputString.length;
    while (i-- && !isNaN(inputString[i]));
    let num = inputString.slice(i + 1);
    let str = inputString.slice(0, i + 1);
    let newNum = (parseInt(num) + 1).toString();
    while (newNum.length < num.length) {
      newNum = '0' + newNum;
    }
    return str + newNum;
  } else {
    return inputString + '1';
  }
}

console.log(incrementString('foobar000')); // foobar001
console.log(incrementString('foobar999')); // foobar1000
console.log(incrementString('foobar00999')); // foobar01000
console.log(incrementString('foobar1')); // foobar2
