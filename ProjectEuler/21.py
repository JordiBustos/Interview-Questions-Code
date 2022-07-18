# coding=utf-8
'''
Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.
'''
import math

def divisor_sums(k):
    s = math.ceil(math.sqrt(k))
    d = {n:1 for n in range(2,k)}
    d[1] = 0

    for i in range(2, int(s)):

        for j in range(2, k//i):
            n = i*j
            d[n] += i
            if s <= j: d[n] += j
    return d

def amicables(k):
    d = divisor_sums(k)
    pairs = []
    for a in range(2, k):
        b = d[a]
        if a != b and b < k and a == d[b] : pairs.append((a,b))
    return pairs

def amicable_sum(k):
    pairs = amicables(k)
    return sum(a+b for a,b in pairs if a < b)

amicable_sum(10000)
