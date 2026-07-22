---
title: "revintro | CTF Reverse Engineering Write Up (SPARTA HMIF ITB 2024)"
date: "2025-08-02"
---

&emsp;In this challenge, we’re given a file named **`chall`**. To open it, you’ll need the Ghidra application (or something similar like Binary Ninja). Then, find the **Symbol Tree** section on the left and expand the **export** section. You’ll find the **A_VALS**, **B_VALS**, **N_VALS**, and **CORRECT_HASHES** sections. Then, hover your cursor over the hexadecimal section.

![](/images/projects/revintro-1.png)

![](/images/projects/revintro-2.png)

<br>

&emsp;As you can see in the following image, there’s a collection of characters. However, **A_VALS**, **B_VALS**, and **CORRECT_HASHES** require 8 characters, while **N_VALS** only requires 4. So, I divided the hexadecimal value according to the number of characters needed, resulting in 7 hexadecimal parts.

&emsp;After that, I entered the resulting hexadecimal value into the following solver:

![](/images/projects/revintro-3.png)

![](/images/projects/revintro-4.png)

<br>

&emsp;Finally, the flag was obtained.

![](/images/projects/revintro-5.png)

<br>

#### **Flag**

```text
SPARTA{y0u_r3v3r53d_my_L1n34r_C0ngRU3nt1Al_g3ner4t0r}
```