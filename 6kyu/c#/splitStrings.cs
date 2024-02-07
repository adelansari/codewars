/*
Splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

Example:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

using System;
using System.Collections.Generic;
using NUnit.Framework;

public class SplitString
{
    public static string[] Solution(string str)
    {
        List<string> stringPairs = new List<string>();
        if (str.Length % 2 == 1) 
        {
            str += "_";
        }
		    
        for (int i = 0; i < str.Length; i += 2)
        {

            stringPairs.Add(str[i].ToString() + str[i+1]);
        }
        return stringPairs.ToArray();
    }
}

public static void Main(string[] args)
{
    var result1 = SplitString.Solution("abcdef");
    var result2 = SplitString.Solution("abcdefg");
    var result3 = SplitString.Solution("");

    Console.WriteLine(string.Join(", ", result1)); // ['ab', 'cd', 'ef']
    Console.WriteLine(string.Join(", ", result2)); // ['ab', 'cd', 'ef', 'g_']
    Console.WriteLine(string.Join(", ", result3)); // []
}
