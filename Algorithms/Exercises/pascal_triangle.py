def print_pascal_power_of_eleven(n):
    for i in range(n):
        print('' * (n-i), end="")
        print(''.join(map(str, str(11**i))))

# print_pascal_power_of_eleven(5)


def print_pascal_matrix(n):
    arr = []
    for i in range(n):
        arr.append([])
        arr[i].append(1)

        for j in range(1, i):
            arr[i].append(arr[i - 1][j - 1] + arr[i - 1][j])
        if (n != 0):
            arr[i].append(1)
    for i in range(n):
        print(" " * (n - i), end=" ", sep=" ")
        for j in range(0, i + 1):
            print('{0:6}'.format(arr[i][j]), end=" ", sep=" ")
        print()


print_pascal_matrix(5)
