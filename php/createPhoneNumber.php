<?php

/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber($numbersArray)
{
    $numberString = join("", $numbersArray);
    return "(" . substr($numberString, 0, 3) . ") " . substr($numberString, 3, 3) . "-" . substr($numberString, 6, 4);
}

// or
function createPhoneNumberV2($numbersArray)
{
    return vsprintf("(%d%d%d) %d%d%d-%d%d%d%d", $numbersArray);
}

print createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) . "\n";  // "(123) 456-7890"
print createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) . "\n";  // "(111) 111-1111"