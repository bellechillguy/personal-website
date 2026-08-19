---
title: "The Eepy Koala | CTF Cryptography Write Up (FindIT UGM 2026)"
date: "2026-05-13"
---

&emsp;Given python and ppm files.

<br>

&emsp;Here is the solver.

```python
#!/usr/bin/env python3
"""
CTF Solver - Koala Image Decryption
Technique: AES-128 ECB + Fisher-Yates block shuffle, 2-byte seed brute-force
"""

import hashlib
import sys
from pathlib import Path
from collections import Counter

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend

# ── Helpers ──────────────────────────────────────────────────────────────────

def aes_ecb_decrypt(key: bytes, data: bytes) -> bytes:
    dec = Cipher(algorithms.AES(key), modes.ECB(), backend=default_backend()).decryptor()
    return dec.update(data) + dec.finalize()

def derive_key(seed: int) -> bytes:
    return hashlib.sha256(seed.to_bytes(2, "big")).digest()[:16]

def fisher_yates_permute(n: int, seed: int) -> list[int]:
    """Simulate the same LCG-based Fisher-Yates as the encryption script."""
    indices = list(range(n))
    state = seed
    for i in range(n - 1, 0, -1):
        state = (state * 0x41C64E6D + 12345) & 0xFFFFFFFF
        j = (state ^ (state >> 16)) % (i + 1)
        indices[i], indices[j] = indices[j], indices[i]
    return indices

# ── Step 1: parse PPM ────────────────────────────────────────────────────────

def parse_ppm(path: Path) -> tuple[bytes, bytes]:
    """Return (header_bytes, pixel_data_bytes).

    PPM P6 header format:
        P6 <whitespace> <width> <whitespace> <height> <whitespace> <maxval> <single-whitespace>

    That is 4 tokens; pixel data starts immediately after the single whitespace
    following maxval.
    """
    raw = path.read_bytes()
    i, tokens = 0, 0
    while tokens < 4:
        while raw[i:i+1] in (b" ", b"\t", b"\n", b"\r"):
            i += 1
        while raw[i:i+1] not in (b" ", b"\t", b"\n", b"\r", b""):
            i += 1
        tokens += 1
    i += 1
    return raw[:i], raw[i:]

# ── Step 2: find seed ────────────────────────────────────────────────────────

def find_seed(ct_data: bytes, verbose: bool = True) -> int:
    blocks = [ct_data[i:i+16] for i in range(0, len(ct_data), 16)]
    freq = Counter(blocks)

    # Top-5 most frequent ciphertext blocks (ECB leak from repetitive image)
    top_cts = [b for b, _ in freq.most_common(5)]
    dominant_count = freq.most_common(1)[0][1]

    if verbose:
        print(f"[*] Total blocks   : {len(blocks)}")
        print(f"[*] Unique blocks  : {len(freq)}")
        print(f"[*] Dominant block : appears {dominant_count}x ({dominant_count/len(blocks)*100:.1f}%)")
        print(f"[*] Brute-forcing {2**16} seeds ...")

    best_score, best_seed = float("inf"), -1

    for seed in range(2**16):
        key = derive_key(seed)
        dec = Cipher(
            algorithms.AES(key),
            modes.ECB(),
            backend=default_backend()
        ).decryptor()

        score = 0
        for ct in top_cts:
            pt = dec.update(ct)
            score += len(set(pt))

        if score < best_score:
            best_score, best_seed = score, seed

        if verbose and seed % 10000 == 0:
            print(
                f"    ... {seed}/{2**16}  best so far: seed={best_seed} score={best_score}",
                end="\r"
            )

    if verbose:
        print(f"\n[+] Best seed found: {best_seed} (score={best_score})")

    return best_seed

# ── Step 3: decrypt + unshuffle ──────────────────────────────────────────────

def reconstruct(ct_data: bytes, seed: int, verbose: bool = True) -> bytes:
    n = len(ct_data) // 16
    key = derive_key(seed)

    if verbose:
        print(f"[*] Decrypting {n} blocks with seed={seed} ...")

    pt_all = aes_ecb_decrypt(key, ct_data)
    pt_blocks = [pt_all[i:i+16] for i in range(0, len(pt_all), 16)]

    if verbose:
        print("[*] Computing permutation ...")

    mapping = fisher_yates_permute(n, seed)

    if verbose:
        print("[*] Unshuffling ...")

    plain_blocks = [None] * n
    for i, pos in enumerate(mapping):
        plain_blocks[i] = pt_blocks[pos]

    # Verify PKCS#7 padding on last block
    last = plain_blocks[-1]
    if last == b"\x10" * 16:
        if verbose:
            print("[+] PKCS padding confirmed - seed is correct!")
        plain_blocks = plain_blocks[:-1]
    else:
        print("[!] Warning: last block is not PKCS padding - seed may be wrong")

    return b"".join(plain_blocks)

# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    enc_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("koala-enc.ppm")
    out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("koala-recovered.png")

    if not enc_path.exists():
        print(f"[!] File not found: {enc_path}")
        sys.exit(1)

    print(f"[*] Reading {enc_path} ...")
    header, ct_data = parse_ppm(enc_path)
    print(f"[*] Header : {header!r}")
    print(f"[*] CT len : {len(ct_data)} bytes")

    remainder = len(ct_data) % 16
    if remainder != 0:
        print(f"[!] CT length not multiple of 16 (off by {remainder}) - trimming")
        ct_data = ct_data[:len(ct_data) - remainder]

    seed = find_seed(ct_data)
    plain_data = reconstruct(ct_data, seed)

    # Write recovered PPM then convert to PNG via PIL if available
    ppm_out = out_path.with_suffix(".ppm")
    ppm_out.write_bytes(header + plain_data)
    print(f"[+] Saved PPM → {ppm_out}")

    try:
        from PIL import Image

        img = Image.open(ppm_out)
        img.save(out_path)
        print(f"[+] Saved PNG → {out_path}")
    except ImportError:
        print("[!] Pillow not installed - only PPM saved.")
    except Exception as e:
        print(f"[!] PNG conversion failed: {e}")

    # Search for flag string in plaintext
    print("[*] Searching for flag ...")
    for marker in (b"FindITCTF", b"FLAG", b"flag", b"CTF{"):
        idx = plain_data.find(marker)
        if idx != -1:
            snippet = plain_data[idx:idx+80]
            printable = "".join(chr(b) if 32 <= b < 127 else "." for b in snippet)
            print(f"[+] Flag candidate at byte {idx}: {printable}")

if __name__ == "__main__":
    main()
```

<br>

&emsp;This solver starts by reading the encrypted PPM file and splitting the pixel data into 16-byte blocks. That part is important because AES works on 16-byte chunks, and the challenge clearly leaks a lot through ECB mode. ECB is bad for image data because repeated blocks stay repeated, so the ciphertext still keeps a pattern that can be used for guessing. The script counts the most common ciphertext blocks, then uses them as a small sample for testing possible seeds.

&emsp;After that, the code brute-forces every 16-bit seed. For each seed, it derives an AES key by hashing the seed with SHA-256 and taking the first 16 bytes, which gives an AES-128 key. Then it decrypts the candidate blocks and checks how uniform the result looks. The best seed is the one that produces the most reasonable plaintext pattern, so the script keeps the seed with the lowest score. This is basically a smart brute force, not a blind one, because it uses the structure of the image to tell whether the guess is probably correct.

&emsp;Once the seed is found, the solver decrypts the full ciphertext again with that key. Then it recreates the same Fisher-Yates shuffle that was used during encryption. The shuffle is driven by the same LCG-style random state, so if the seed is right, the permutation is also right. The script uses that permutation to put every 16-byte block back to its original position, which is the unshuffling step. At the end it checks the last block for PKCS#7 padding, because that is a nice quick sanity check that the recovered seed is actually valid. After that, the plaintext is written back into a PPM file, converted to PNG, and scanned for the flag string.

<br>

&emsp;Run this script in your local (using venv). It will give you the flag in the `.png` output.

![](/images/projects/The-1.webp)

<br>

#### **Flag: `FindITCTF{w0W_sUch_4n_4W3s0m3_k0aL4}`**