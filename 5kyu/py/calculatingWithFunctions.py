'''
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
'''

def zero(operations = None) : return 0 if operations == None else operations(0)
def one(operations = None) : return 1 if operations == None else operations(1)
def two(operations = None) : return 2 if operations == None else operations(2)
def three(operations = None) : return 3 if operations == None else operations(3)
def four(operations = None) : return 4 if operations == None else operations(4)
def five(operations = None) : return 5 if operations == None else operations(5)
def six(operations = None) : return 6 if operations == None else operations(6)
def seven(operations = None) : return 7 if operations == None else operations(7)
def eight(operations = None) : return 8 if operations == None else operations(8)
def nine(operations = None) : return 9 if operations == None else operations(9)

def plus(x) : return lambda y : y + x
def minus(x) : return lambda y : y - x
def times(x) : return lambda y : y * x
def divided_by(x): return lambda y: y // x

print(seven(times(five()))) # 35
print(four(plus(nine()))) # 13
print(eight(minus(three()))) # 5
print(six(divided_by(two()))) # 3
print(eight(divided_by(three()))) # 2