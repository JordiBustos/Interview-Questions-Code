'''
Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
'''

import math

def primeSummation(n):
    def isPrime(n):
        i = 2
        while(i <= math.sqrt(n)):
            if(n % i == 0):
                return False
            i+=1
        return True

    sum = 0
    k = 2
    while (k < n):
        if (isPrime(k)):
            sum += k
        k+=1
    return sum

print(primeSummation(2000000))
