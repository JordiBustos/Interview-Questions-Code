class HashTable:
    def __init__(self):
        self.table = [None] * 2003
        self.num_items =  0
    
    def set_item(self, key, value):
        self.num_items += 1
        load_factor = self.num_items / len(self.table)

        if (load_factor > 0.7):
            self.__resize()

        i = self.__hash_function(key, len(self.table))
        if (not self.table[i]):
            self.table[i] = [[key, value]]
        else:
            self.table[i].append([key, value])

    def get_item(self, key):
        i = self.__hash_function(key, len(self.table))
        if (not self.table[i]): 
            return None

        for j in range(len(self.table[i])):
            if (self.table[i][j][0] == key):
                return self.table[i][j][1]

    def __resize(self):
        new_table = [0] * (len(self.table) * 2)
        for i in range(len(self.table)):
            if (self.table[i]):
                for j in range(len(self.table[i])):
                    new_table[i].append(self.table[i][j])
        self.table = new_table

    def __hash_function(self, key, table_size):
        hashed_key = 17
        random_prime_number = 13

        for i in range(len(key)):
            hashed_key = (random_prime_number * ord(key[i]) % table_size)

        return hashed_key
    

hash_table = HashTable()
hash_table.set_item('a', 1)
hash_table.set_item('b', 2)
hash_table.set_item('c', 3)
hash_table.set_item('d', 4)

print(hash_table.get_item('a'))
print(hash_table.get_item('b'))

