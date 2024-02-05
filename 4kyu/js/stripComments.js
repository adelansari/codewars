/*
https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:
*/

const solution = (input, markers) => {
  if (markers.length === 0) {
    return input
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n');
  } else {
    return input
      .split('\n')
      .map((line) => {
        let newLine = '';
        for (let char of line) {
          if (!markers.includes(char)) {
            newLine += char;
          } else {
            break;
          }
        }
        return newLine.trim();
      })
      .join('\n');
  }
};

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])); // "apples, pears\ngrapes\nbananas"
console.log(solution('aa bb cc', [])); // "aa bb cc"
console.log(solution(' aa # bb # cc', [])); // " aa # bb # cc"
console.log(solution('e*bCo/$tcWiKL\nS*X C\n', [])); // "e*bCo/$tcWiKL\nS*X C\n"
console.log(solution(' kSQDDpkxKboeqJN\nxu\nWUa$Aa~PttQ\\pP-SaJGUCtT^NH/NQ', ['-', '\\', '@', '#'])); // "kSQDDpkxKboeqJN\nxu\nWUa$Aa~PttQ' to equal ' kSQDDpkxKboeqJN\nxu\nWUa$Aa~PttQ"
