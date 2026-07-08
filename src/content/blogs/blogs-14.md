---
title: "I Forgor | CTF Cryptography Write Up (FindIT UGM 2026)"
date: "2026-05-13"
---

&emsp;Given a `.txt`-based file attachment. It consists of some values of each variable.

```text
n = 65621244306653319670872009812479216556253539637757012684247326929337446029691949229830476009336324085576381980962409932835777704841875948755620309035826526718252935851707644029182010811923912024332263063320474435206957030905287233900554131266746644303012869033868346154962019095877474062849704039936163171519

e1 = 3
c1 = 4105931817714585546497262196126228765774747581873311887305453434266838391287108553391387157504909553136096865866521360681945219809348271859677395206127927734410477669438652581050897860699569762295858375013954260208805208594575707901219384284893069846994938217

e2 = 65537
c2 = 5243776788607977912607186503410037199569145142332695425831937859544540040996262696184528670956624577919073391021809450507327272297435046801815065538981326146894350676101027549009511804525444015269785480390765263800156021463103944845372299272838235762577979029844373619729965521134404669451262632798052638846
```

<br>

&emsp;Here is the solver that I used.

```python
from math import gcd
from Crypto.Util.number import long_to_bytes
import base64

# given values
n = 65621244306653319670872009812479216556253539637757012684247326929337446029691949229830476009336324085576381980962409932835777704841875948755620309035826526718252935851707644029182010811923912024332263063320474435206957030905287233900554131266746644303012869033868346154962019095877474062849704039936163171519

e1 = 3
c1 = 4105931817714585546497262196126228765774747581873311887305453434266838391287108553391387157504909553136096865866521360681945219809348271859677395206127927734410477669438652581050897860699569762295858375013954260208805208594575707901219384284893069846994938217

e2 = 65537
c2 = 5243776788607977912607186503410037199569145142332695425831937859544540040996262696184528670956624577919073391021809450507327272297435046801815065538981326146894350676101027549009511804525444015269785480390765263800156021463103944845372299272838235762577979029844373619729965521134404669451262632798052638846

# extended euclidean algorithm
def egcd(a, b):
    if b == 0:
        return (1, 0, a)
    x, y, g = egcd(b, a % b)
    return (y, x - (a // b) * y, g)

# cari a dan b
a, b, g = egcd(e1, e2)

assert g == 1  # harus coprime

# handle jika a atau b negatif
def modexp(base, exp, mod):
    if exp < 0:
        base = pow(base, -1, mod)  # modular inverse
        exp = -exp
    return pow(base, exp, mod)

# recover plaintext (integer)
m = (modexp(c1, a, n) * modexp(c2, b, n)) % n

# convert ke bytes
plaintext = long_to_bytes(m)

print("[+] Raw:", plaintext)

# decode base64
flag = base64.b64decode(plaintext)
print("[+] Flag:", flag.decode())
```

<br>

&emsp;This one is a classic RSA common modulus attack. The file gives two ciphertexts that were produced from the same plaintext, using the same modulus `n`, but different public exponents `e1` and `e2`. That is exactly the kind of setup that can be broken when the exponents are coprime. The script first runs the extended Euclidean algorithm to find integers `a` and `b` such that `a*e1 + b*e2 = 1`. Those coefficients are the key to combining the two ciphertexts back into the original message.

&emsp;Because `a` and `b` can be negative, the solver includes a helper for modular exponentiation that also handles modular inverse when the exponent goes below zero. Then it computes `m = c1^a * c2^b mod n`, which reconstructs the original plaintext as an integer. After that, the integer is converted back into bytes. The result is still base64-encoded, so the last step is just decoding it one more time to reveal the real flag.

&emsp;So the whole trick is not heavy math at all, it is mostly spotting that the same `n` was reused, then letting the common modulus attack do the rest. That is why both solvers feel pretty elegant: one uses the weakness of ECB plus a predictable shuffle, and the other uses a classic RSA reuse mistake. Both are the kind of challenges that look scary at first, but once the pattern is spotted, the solver becomes very straightforward.

&emsp;Run in your local virtual environment, and you’ll get the flag.

![](/images/I-1.png)

<br>

#### **Flag: `FindITCTF{PA5SWORDNY4_1234}`**