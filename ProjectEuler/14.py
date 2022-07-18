def collatz(n):
    seq = []
    seq.append(n)
    tmp = n

    while tmp != 1:
        tmp = collatzRule(tmp)
        if (tmp in dic):
            seq += dic[tmp]
            break
        else:
            seq.append(tmp)
    dic[n] = seq
    return len(seq)


def collatzRule(n):
    if (n % 2 == 0):
        return n//2
    else:
        return 3 * n + 1

longestLen = 0
longestNum = 0
dic = {}

for n in range(2, 10):
    c = collatz(n)
    if c > longestLen:
        longestLen = c
        longestNum = n

print(longestLen, dic)
