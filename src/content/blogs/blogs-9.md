---
title: "know the trick | CTF Cryptography Write Up (ARA 7.0 ITS)"
date: "2026-02-06"
---

&emsp;Just given an nc hostname & port, let’s just open it.

```text
============================================================
    █████╗ ██████╗  █████╗ ███████╗     ██████╗████████╗███████╗
   ██╔══██╗██╔══██╗██╔══██╗╚════██║    ██╔════╝╚══██╔══╝██╔════╝
   ███████║██████╔╝███████║    ██╔╝    ██║        ██║   █████╗
   ██╔══██║██╔══██╗██╔══██║   ██╔╝     ██║        ██║   ██╔══╝
   ██║  ██║██║  ██║██║  ██║   ██║      ╚██████╗   ██║   ██║
   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝   ╚═╝   ╚═╝
============================================================

I have a sequence generator. Can you predict the next state?

Session: 548BEAC2

────────────────────────────────────────────────────────────
PARAMETERS:
────────────────────────────────────────────────────────────
p = 115792089237316195423570985008687907853269984665640564039457584007913129639917
α = 100720434724302814904053626510495455391082506492327747842141262032751684401854
β = 514631507721405306298073637848375664226723355710112857507800679889911926255
n = 40

────────────────────────────────────────────────────────────
OBSERVATIONS:
────────────────────────────────────────────────────────────
I generated 4 consecutive values: x₀, x₁, x₂, x₃
But I only leak the upper bits of some...

h₀ = x₀ >> n = 96885246672607870381995521998969098184463938829236624835439804720
h₁ = x₁ >> n = 44966825229422327348212916682550590755044543005750995435340658608
h₂ = x₂ >> n = 14759415535177087237668335134162197431324777649546286546562649086

────────────────────────────────────────────────────────────
OBJECTIVE:
────────────────────────────────────────────────────────────
Find x₃ (the full 256-bit value)
Submit x₃ as a decimal integer.

x₃ =
```

<br>

&emsp;Yayaya pipeline directly send LLM,

```python
import sys
from fractions import Fraction

def solve_truncated_lcg():
    # ---------------------------------------------------------
    # 1. PARAMETERS & INPUTS
    # ---------------------------------------------------------
    p = 115792089237316195423570985008687907853269984665640564039457584007913129639917
    a = 100720434724302814904053626510495455391082506492327747842141262032751684401854
    b = 514631507721405306298073637848375664226723355710112857507800679889911926255
    n = 40

    h0 = 96885246672607870381995521998969098184463938829236624835439804720
    h1 = 44966825229422327348212916682550590755044543005750995435340658608
    h2 = 14759415535177087237668335134162197431324777649546286546562649086

    print("[-] Setting up lattice...")

    # ---------------------------------------------------------
    # 2. LATTICE CONSTRUCTION
    # ---------------------------------------------------------
    # We are looking for the hidden lower bits l0 (size ~2^40).
    # Relation: x_i = h_i * 2^n + l_i
    # The LCG relation x1 = a*x0 + b (mod p) implies:
    # l1 = a*l0 + (a*h0*2^n + b - h1*2^n) (mod p)
    #
    # We construct a basis where the target short vector is (l0, l1, l2, 1)

    K = 1 << n

    # Calculate remainders R1, R2
    # l1 = a*l0 + R1 (mod p)
    R1 = (a * h0 * K + b - h1 * K) % p

    # l2 = a^2*l0 + R2 (mod p)
    R2 = (a * R1 + a * h1 * K + b - h2 * K) % p

    basis = [
        [1, a, (a * a) % p, 0],
        [0, p, 0, 0],
        [0, 0, p, 0],
        [0, R1, R2, 1]
    ]

    # ---------------------------------------------------------
    # 3. LLL REDUCTION
    # ---------------------------------------------------------

    def dot(u, v):
        return sum(x * y for x, y in zip(u, v))

    def gram_schmidt(B):
        B_star = []
        mu = []
        n_dim = len(B)

        for i in range(n_dim):
            b_i = B[i]
            mu_row = [Fraction(0)] * n_dim
            b_star_i = list(b_i)

            for j in range(i):
                fl_mu = Fraction(dot(b_i, B_star[j]), dot(B_star[j], B_star[j]))
                mu_row[j] = fl_mu
                for k in range(len(b_i)):
                    b_star_i[k] -= fl_mu * B_star[j][k]

            B_star.append(b_star_i)
            mu.append(mu_row)

        return B_star, mu

    def lll_reduce(basis, delta=0.75):
        n_dim = len(basis)
        B = [row[:] for row in basis]
        B_star, mu = gram_schmidt(B)

        k = 1
        while k < n_dim:
            for j in range(k - 1, -1, -1):
                if abs(mu[k][j]) > 0.5:
                    q = round(mu[k][j])
                    B[k] = [
                        B[k][x] - q * B[j][x]
                        for x in range(len(B[k]))
                    ]
                    B_star, mu = gram_schmidt(B)

            norm_k = dot(B_star[k], B_star[k])
            norm_k_minus_1 = dot(B_star[k - 1], B_star[k - 1])

            if norm_k >= (delta - mu[k][k - 1] ** 2) * norm_k_minus_1:
                k += 1
            else:
                B[k], B[k - 1] = B[k - 1], B[k]
                B_star, mu = gram_schmidt(B)
                k = max(k - 1, 1)

        return B

    print("[-] Running LLL reduction (this may take a moment)...")
    reduced_basis = lll_reduce(basis)

    # ---------------------------------------------------------
    # 4. RECOVERY
    # ---------------------------------------------------------
    l0 = None

    for row in reduced_basis:
        if abs(row[3]) == 1:
            if row[3] == 1:
                l0 = row[0]
            else:
                l0 = -row[0]
            break

    if l0 is None:
        print("[!] Failed to recover l0.")
        return

    print(f"[+] Recovered lower bits l0: {l0}")

    x0 = (h0 << n) + l0

    x1 = (a * x0 + b) % p
    x2 = (a * x1 + b) % p

    if (x1 >> n) == h1 and (x2 >> n) == h2:
        print("[+] Verification Successful: Sequence matches observations.")

        x3 = (a * x2 + b) % p

        print("-" * 60)
        print(f"x3 = {x3}")
        print("-" * 60)
    else:
        print("[!] Verification Failed.")

if __name__ == "__main__":
    solve_truncated_lcg()
```

<br>

&emsp;To find **X3**, we can use the **LLL (Lenstra–Lenstra–Lovász)** algorithm, which only requires constructing a suitable lattice. Once the LLL reduction has been performed, **L0** can be found, and so can the value of **X3**.

```text
x₃ =
56954351784517349849389922314885909780783728077285047640119127900717674790677

============================================================
[+] CORRECT!
============================================================

Here's your encrypted flag:

IV:         9a6fae360627140a80bd9358d90a13fe
Ciphertext: f9032029d2820d06be0f09cf6ae9f5f5ea462d9d03b821fd37e4b1eb75c6c85dbb0b677fda19160d3d0621
Key:        Linear Congruential Method
```

<br>

&emsp;Given an encrypted flag as follows, then using the following algorithm, the flag is obtained.

```python
from Crypto.Cipher import AES
import hashlib

x3 = 56954351784517349849389922314885909780783728077285047640119127900717674790677

iv = bytes.fromhex("9a6fae360627140a80bd9358d90a13fe")
ct = bytes.fromhex(
    "f9032029d2820d06be0f09cf6ae9f5f5ea462d9d03b821fd37e4b1eb75c6c85dbb0b677fda19160d3d0621"
)

key = hashlib.sha256(x3.to_bytes(32, "big")).digest()

init_counter = int.from_bytes(iv, "big")

cipher = AES.new(
    key,
    AES.MODE_CTR,
    nonce=b"",
    initial_value=init_counter,
)

pt = cipher.decrypt(ct)

print(pt.decode())
```

<br>

#### **FLAG**
> **ARA7{C0N9R4T5_y0u_F1ND_m3_lcmethod_fl4gggg}**
