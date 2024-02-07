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

// Attempt 03
const nextBigger = (n) => {
  let digits = n.toString().split('').map(Number);
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      for (let j = digits.length - 1; j > i; j--) {
        if (digits[j] > digits[i]) {
          [digits[i], digits[j]] = [digits[j], digits[i]];
          let sortedDigits = digits.slice(i + 1).sort((a, b) => a - b);
          let result = digits.slice(0, i + 1).concat(sortedDigits);
          return Number(result.join(''));
        }
      }
    }
  }
  return -1;
};
// Attempt 02
const nextBigger = (n) => {
  let digits = n.toString().split('').map(Number);
  let pivotIndex = -1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      pivotIndex = i - 1;
      break;
    }
  }

  if (pivotIndex === -1) return -1;

  let digitToSwapIndex = -1;
  for (let i = digits.length - 1; i > pivotIndex; i--) {
    if (digits[i] > digits[pivotIndex]) {
      digitToSwapIndex = i;
      break;
    }
  }

  [digits[pivotIndex], digits[digitToSwapIndex]] = [digits[digitToSwapIndex], digits[pivotIndex]];
  let digitsAfterPivot = digits.splice(pivotIndex + 1).sort((a, b) => a - b);
  let result = parseInt([...digits, ...digitsAfterPivot].join(''));

  return result;
};

// Attempt 01
const nextBigger = (n) => {
  let digits = n.toString().split('').map(Number);
  let i = digits.length - 1;
  while (i > 0 && digits[i] <= digits[i - 1]) i--;
  if (i === 0) return -1;
  let pivot = i - 1;
  let j = digits.length - 1;
  while (digits[j] <= digits[pivot]) j--;
  [digits[pivot], digits[j]] = [digits[j], digits[pivot]];
  let left = pivot + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }
  return parseInt(digits.join(''));
};

// Attempt 00
function nextBigger(n) {
  let digits = n.toString().split('').map(Number);
  let permutations = permute(digits);
  let numbers = permutations.map((perm) => parseInt(perm.join('')));

  numbers = numbers.filter((num) => num > n);

  if (numbers.length === 0) return -1;
  return Math.min(...numbers);
}

function permute(arr) {
  if (arr.length <= 1) return [arr];
  let permutations = [];
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    for (let perm of permute(rest)) {
      permutations.push([arr[i]].concat(perm));
    }
  }
  return permutations;
}

// Test Cases
console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414
console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
console.log(nextBigger(9504192944394)); // 9504192944439
console.log(nextBigger(60571287142)); // 60571287214
console.log(nextBigger(3744)); // 4347
