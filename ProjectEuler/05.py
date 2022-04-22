'''
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
'''
def gcd(a, b):
    if b==0:
        return a
    return gcd(a, a % b)

def lcm(a, b):
    return (a * b) / gcd(a, b)

def smallestMult(n):
    maxLCM = 1
    for i in range(2, n):
        maxLCM = lcm(maxLCM, i)

    return maxLCM
