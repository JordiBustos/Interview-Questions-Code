hashFunction = (key, tableSize) => {
  // Two arbitrary primes 13, 17 to spread out hashedKey
  let hashedKey = 17;
  for (let i = 0; i < key.length; i++) {
    hashedKey = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hashedKey;
};

class HashTable {
  table = new Array(2003);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach((key, value) => {
          const i = hashFunction(key, newTable.length);
          if (newTabletable[i]) {
            newTable[i].push([key, value]);
          } else {
            newTable[i] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;
    // if equal 1 means that table is fulled
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.8) {
      // Resize table to add space when hits 80%
      this.resize();
    }

    const i = hashFunction(key, this.table.length);
    if (this.table[i]) {
      this.table[i].push([key, value]);
    } else {
      this.table[i] = [[key, value]];
    }
  };

  getItem = (key) => {
    const i = hashFunction(key, this.table.length);
    if (!this.table[i]) return null;

    //if every item collides this takes O(n)
    return this.table[i].find((x) => x[0] === key)[1];
  };
}

const table = new HashTable();
myTable.setItem("key", "value");
myTable.getItem("key");
