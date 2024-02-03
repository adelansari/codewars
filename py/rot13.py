'''
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
'''

def rot13(message):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[13:] + alphabet[:13]

    ciphered_message = ''

    for char in message:
        char_lower = char.lower()
        if char_lower not in alphabet:
            ciphered_message += char
            continue

        is_upper_case = char.isupper()
        char_index = alphabet.index(char_lower)
        shifted_char = shifted_alphabet[char_index].upper() if is_upper_case else shifted_alphabet[char_index]

        ciphered_message += shifted_char

    return ciphered_message


print(rot13('test'))  # grfg
print(rot13('Test'))  # Grfg
