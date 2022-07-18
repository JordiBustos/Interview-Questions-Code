# coding=utf-8
'''
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!
'''

def sumDigits(n):
    r = [int(a) for a in str(n)]
    return sum(r)

def factorial(n):
    if (n == 1 or n == 0):
        return 1
    return n * factorial(n-1)

def compute(n):
    f = factorial(n)
    return sumDigits(f)

print(compute(100))
