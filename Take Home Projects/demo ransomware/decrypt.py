#!/usr/bin/env python3
import os
from cryptography.fernet import Fernet 


print('Enter the key')
key = input()

files = []

for file in os.listdir():
    if file == 'server.py' or file == "ransomware.py" or file == 'decrypt.py':
        continue 
    if os.path.isfile(file):
        files.append(file)

for file in files:
    with open(file, 'rb') as thefile:
        contents = thefile.read()

    contenst_decrypted = Fernet(key).decrypt(contents)
    with open(file, 'wb') as thefile:
        thefile.write(contenst_decrypted)
