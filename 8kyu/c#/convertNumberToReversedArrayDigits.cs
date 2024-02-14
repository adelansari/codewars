/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

using System;
using System.Collections.Generic;

namespace Solution
{
    class Digitizer
    {
        public static long[] Digitize(long n)
        {
            string numberString = n.ToString();
            long[] digits = new long[numberString.Length];

            for (int i = 0; i < numberString.Length; i++)
            {
                digits[i] = long.Parse(numberString[numberString.Length - 1 - i].ToString());
            }

            return digits;
        }
    }
}