/*
https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
*/

const int32ToIp = (int32) => {
  let binary = int32.toString(2).padStart(32, '0');
  let octets = [];
  for (let i = 0; i < 32; i += 8) {
    octets.push(parseInt(binary.slice(i, i + 8), 2));
  }
  return octets.join('.');
};

console.log(int32ToIp(2154959208)); // "128.114.17.104"
console.log(int32ToIp(0)); // "0.0.0.0"
console.log(int32ToIp(2149583361)); // "128.32.10.1"
console.log(int32ToIp(2 ** 32 - 1)); // "255.255.255.255"
