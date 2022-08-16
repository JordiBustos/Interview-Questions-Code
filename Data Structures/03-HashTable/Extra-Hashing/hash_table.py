class HashTable:
    """
        Hash table implementation on python.
        Methods: set_item, get_item.
        Private methods: __resize, __hash_function
    """
    def __init__(self):
        self.table = [None] * 2003
        self.num_items =  0
    
    def set_item(self, key, value):
        """
        Receives a key and a value and adds them to the hash table.
        If the key already exists, appends [[key, value]] to the same place on the table.
        """
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
        """
        Receives a key and returns the value associated with it.
        If the hash asociated with key has a collision, find inside self.table[i]
        the place where self.table[i][j][0] sea la key and return self.table[i][j][1]
        """
        i = self.__hash_function(key, len(self.table))
        if (not self.table[i]): 
            return None

        for j in range(len(self.table[i])):
            if (self.table[i][j][0] == key):
                return self.table[i][j][1]

    def __resize(self):
        """
        Private method that resizes the table. Creates a new array with twice the size of the old one.
        """
        new_table = [0] * (len(self.table) * 2)
        for i in range(len(self.table)):
            if (self.table[i]):
                for j in range(len(self.table[i])):
                    new_table[i].append(self.table[i][j])
        self.table = new_table

    def __hash_function(self, key, table_size):
        """
        Hash function that receives a key and a table size and returns the hash associated with the key.
        """
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

print(hash_table.set_item.__doc__)

print(hash_table.get_item('a'))
print(hash_table.get_item('b'))



