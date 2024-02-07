/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').


Example:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  stringPairs = [];
  if (str.length % 2) {
    str += '_';
  }
  for (let i = 0; i < str.length; i += 2) {
    stringPairs.push(str[i] + str[i + 1]);
  }
  return stringPairs;
}

console.log(solution('abcdef')); // ['ab', 'cd', 'ef']
console.log(solution('abcdefg')); // ['ab', 'cd', 'ef', 'g_']
console.log(solution('')); // []
