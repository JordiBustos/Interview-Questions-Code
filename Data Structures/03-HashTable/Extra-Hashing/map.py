class Map:
    def __init__(self):
        self.map = {}

    def add(self, key, value):
        self.map[key] = value

    def remove(self, key):
        del self.map[key]

    def get(self, key):
        return self.map[key]

    def has(self, key):
        return key in self.map

    def values(self):
        return list(self.map.values())

    def size(self):
        return len(self.map)

    def clear(self):
        self.map = {}
