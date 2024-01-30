'''
Write `function combine()`
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
'''

def combine(*argument):
  result = []
  maxLength = 0
  for lst in argument:
    maxLength = max(maxLength, len(lst))
  for i in range(maxLength):
    for lst in argument:
      if i < len(lst):
        result.append(lst[i])
  return result

print(combine(['a', 'b', 'c'], [1, 2, 3])) # ['a', 1, 'b', 2, 'c', 3]
print(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])) # ['a', 1, 'b', 2, 'c', 3, 4, 5]
print(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])) # ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
