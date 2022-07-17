'''
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
'''
import math

def nthPrime(n):
    primes = [2]
    i = 3
    isPrime = True
    while (len(primes) < n):
        aux = math.ceil(math.sqrt(i))

        j = 0
        while (j < len(primes) and primes[j] <= aux):
            if(i % primes[j] == 0):
                isPrime = False
                break
            j+=1

        if (isPrime):
            primes.append(i)
        isPrime = True

        #Como todos los primos son impares a excepcion del dos no hay necesidad de chequear los pares
        i += 2

    return primes[len(primes)-1]


print(nthPrime(10001))
