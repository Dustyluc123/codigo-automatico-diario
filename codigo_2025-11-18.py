import math

amp = 10
freq = 0.5
off = 15
wid = 50

for i in range(25):
    y = int(amp * math.sin(i * freq) + off)
    y = max(0, min(wid - 1, y))
    line = [' '] * wid
    line[y] = '*'
    print("".join(line))