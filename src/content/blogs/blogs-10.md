---
title: "フェイクフェイス・フェイルセイフ | CTF Miscellaneous Write Up (ARA 7.0 ITS)"
date: "2026-02-06"
---

&emsp;At first, I was quite confused by this challenge. The title was Japanese, and there was a YouTube link (but it didn’t seem to connect to the challenge). Once I opened the launcher, it was clear this was a blockchain challenge because it included an RPC URL, a private key, and a contract setup.

&emsp;I’m used to seeing setups like this, meaning they require interacting with smart contracts. The problem was, I didn’t immediately understand the bug. So, to be honest, at this point, I asked ChatGPT for help analyzing the contract. From there, the problem began to become clear.

&emsp;The contract handled the retransaction by storing the signature in the `usedSignature` variable. However, ECDSA signatures are malleable, meaning that for a valid signature `(r, s, v)`, then a signature `(r, N-s, v ⊕ 1)`, where `N` is the secp256k1 curve order, is also a valid signature and recovers to the same address, but with a different hash.

&emsp;We use this exploit by reading the last signature from `lastSignature` and then computing a new signature that is the counterpart of the obtained signature. Submission with the counterpart signature will change the root, and the flag can be obtained.

---

<br>

#### **FLAG**

```text
ARA7{isnt_signature_malleability_cool?_now_with_a_twist_of_validator_quorums}
```