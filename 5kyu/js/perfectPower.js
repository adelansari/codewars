/*
https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript
A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that m^k = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with m^k = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

*/

const isPP = (n) => {
  // 1 to the power of anything is 1 so we start from 2
  for (let m = 2; m * m <= n; ++m) {
    // any number to the power of 1 is itself so we start from 2
    for (let k = 2; Math.pow(m, k) <= n; ++k) {
      if (Math.pow(m, k) === n) {
        return [m, k];
      }
    }
  }
  return null;
};

describe('perfect powers', function () {
  it('should work for some examples', function () {
    Test.assertSimilar(isPP(4), [2, 2], '4 = 2^2');
    Test.assertSimilar(isPP(9), [3, 2], '9 = 3^2');
    Test.assertEquals(isPP(5), null, "5 isn't a perfect number");
  });
  it('should work for the first perfect powers', function () {
    var pp = [
        4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81, 100, 121, 125, 128, 144, 169, 196, 216, 225, 243, 256, 289, 324, 343,
        361, 400, 441, 484,
      ],
      i;
    for (i = 0; i < pp.length; ++i) {
      Test.expect(isPP(pp[i]) !== null, 'the perfect power ' + pp[i] + " wasn't recognized as one");
    }
  });
  it('should work for random perfect powers', function () {
    var k, m, i, r, l;
    for (i = 0; i < 100; ++i) {
      (m = (2 + Math.random() * 0xff) | 0), (k = (2 + (Math.random() * Math.log(0x0fffffff)) / Math.log(m)) | 0);
      l = Math.pow(m, k);
      r = isPP(l);
      if (r === null) {
        Test.expect(r !== null, l + ' is a perfect power');
        break;
      } else if (Math.pow(r[0], r[1]) !== l) {
        Test.assertEquals(Math.pow(r[0], r[1]), l, 'your pair (' + r[0] + ', ' + r[1] + ") doesn't work for " + l);
        break;
      }
    }
  });
  it('should return valid pairs for random inputs', function () {
    var i, r, l;

    for (i = 0; i < 100; ++i) {
      l = (Math.random() * 0x0000ffff) | 0;
      r = isPP(l);
      if (r !== null && Math.pow(r[0], r[1]) !== l) {
        Test.assertEquals(Math.pow(r[0], r[1]), l, 'your pair (' + r[0] + ', ' + r[1] + ") doesn't work for " + l);
        break;
      }
    }
  });
});
