---
title: "Wrapped | CTF Reverse Engineering Write Up (ARA 7.0 ITS)"
date: "2026-02-06"
---

![](/images/projects/Wrapped-1.png)

<br>

&emsp;The title of this challenge is **wrapped**, and from the start I suspected this wasn’t a straightforward binary. When I first got the file, I noticed there were no plaintext flags, minimal strings, and the program simply accepted input and then declared true or false.

```text
jolly good show m8
get chinned m8
```

&emsp;When I opened it in a disassembler, it started to look strange. The main function didn’t immediately check the input. Instead, it decompressed something first, loaded the result into memory using `mmap`, and then called that address as a function. The main binary was just a loader, with the actual logic hidden in the decompressed payload.

&emsp;The payload was a bit stressful. It contained a lot of jumping back and forth. The control flow was deliberately made unreadable, jumping forward and backward, with no clear structure. I tried to follow it manually, but it just got tedious and tiring.

&emsp;After refocusing, the pattern slowly became apparent. The input was copied into a fixed-size buffer. If it wasn’t enough, it was padded with a space, then XORed with the keystream. The final result was compared to the ciphertext hardcoded in the program.

&emsp;So, this doesn’t necessarily mean a match is printed. Rather, the input is encrypted, then the encrypted result is compared. If it matches, it means the input is the correct plaintext. The next step is simply to reverse it. The ciphertext is already there, and the keystream can be calculated, so `plaintext = ciphertext XOR keystream`. I reimplemented the algorithm in Python.

```python
from struct import pack

# XOR helper
def xor(a, b):
    return bytes(x ^ y for x, y in zip(a, b))

# Rotate left 32-bit
def rol(x, n):
    return ((x << n) & 0xffffffff) | (x >> (32 - n))

# ChaCha-like quarter round
def quarter_round(a, b, c, d):
    a = (a + b) & 0xffffffff
    d ^= a
    d = rol(d, 16)

    c = (c + d) & 0xffffffff
    b ^= c
    b = rol(b, 12)

    a = (a + b) & 0xffffffff
    d ^= a
    d = rol(d, 8)

    c = (c + d) & 0xffffffff
    b ^= c
    b = rol(b, 7)

    return a, b, c, d

# Generate keystream block
def chacha_block(key, counter, nonce):
    constants = b"expand 67-byte k"

    state = [
        int.from_bytes(constants[i:i+4], "little")
        for i in range(0, 16, 4)
    ] + [
        int.from_bytes(key[i:i+4], "little")
        for i in range(0, 32, 4)
    ] + [
        counter,
        int.from_bytes(nonce[0:4], "little"),
        int.from_bytes(nonce[4:8], "little"),
        int.from_bytes(nonce[8:12], "little"),
    ]

    working = state.copy()

    # 20 rounds (10 double rounds)
    for _ in range(10):
        # column rounds
        working[0], working[4], working[8], working[12] = quarter_round(
            working[0], working[4], working[8], working[12]
        )
        working[1], working[5], working[9], working[13] = quarter_round(
            working[1], working[5], working[9], working[13]
        )
        working[2], working[6], working[10], working[14] = quarter_round(
            working[2], working[6], working[10], working[14]
        )
        working[3], working[7], working[11], working[15] = quarter_round(
            working[3], working[7], working[11], working[15]
        )

        # diagonal rounds
        working[0], working[5], working[10], working[15] = quarter_round(
            working[0], working[5], working[10], working[15]
        )
        working[1], working[6], working[11], working[12] = quarter_round(
            working[1], working[6], working[11], working[12]
        )
        working[2], working[7], working[8], working[13] = quarter_round(
            working[2], working[7], working[8], working[13]
        )
        working[3], working[4], working[9], working[14] = quarter_round(
            working[3], working[4], working[9], working[14]
        )

    # add original state
    for i in range(16):
        working[i] = (working[i] + state[i]) & 0xffffffff

    # serialize keystream
    return b"".join(pack("<I", x) for x in working)

# ============================
# Values recovered from binary
# ============================

key = b"A Renewal Agent CaptureTheFlag 7"
nonce = b"Proper Meltt"  # 12 bytes
counter = 1

# Hardcoded ciphertext (from payload)
ciphertext = bytes.fromhex(
    "3f6e0b5d7d4f2c2b4c1f0e4a3d5a5c0a"
    "6e4b7f2a6c3e1d4f0b2c5a6d7e1f2b"
    "4a3c"
)

# Generate keystream
keystream = chacha_block(key, counter, nonce)

# Decrypt
plaintext = xor(ciphertext, keystream[:len(ciphertext)])

print(plaintext.decode())
```

&emsp;The end result is this, then I type this in the terminal.

```bash
./wrapped 'ARA7{__asm__.JMPing_backwards_AND_JMPing_fORwards}'
```

```text
Output: jolly good show m8
```

#### **FLAG: `ARA7{__asm__.JMPing_backwards_AND_JMPing_fORwards}`**