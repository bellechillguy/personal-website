---
title: "Deadsick | CTF Reverse Engineering Write Up (ARA 7.0 ITS)"
date: "2026-02-06"
---

&emsp;At first, I was quite misled by the description of this challenge. From the title and description of the secure vault, plus the hint about hardware timing, I immediately thought this would be complicated. Furthermore, the file given wasn’t a regular binary, but a Verilog one, complete with ROM, VM, and weird modules. Honestly, when I first opened the file, I wanted to skip it.

<br>

&emsp;Let’s unzip the file first.

![](/images/projects/Deadsick-1.png)

![](/images/projects/Deadsick-2.png)

<br>

&emsp;The first step I took was simply reading the top module structure. There were several main components: `vault_lock`, `key_validator`, `vm_core`, `uart_tx`, and the one that caught my attention the most was `artifact_rom`. From this, it appeared that the vault output was sent via UART, byte by byte, depending on certain conditions and timing.

&emsp;At this point, I briefly tried (because someone had already solved it). I initially thought I’d have to do a full simulation using `iverilog`, setting the clock, triggering unlocks, and waiting for the UART one by one. But the more I read, the more it became clear that this would be a waste of time. A lot of the logic only controlled **when** data was sent, not **what** data was sent.

&emsp;I began to focus on `artifact_rom`. This ROM wasn’t a regular array, but a very long mux tree. It looked complicated at first, but the final pattern was clear. The output data was simply a deterministic function of `addr`. The address incremented from `0` to a certain number of bytes, then stopped. In the file, I saw a constant `FLAG_BYTES = 0x4E`, meaning **78 bytes**.

&emsp;This is where I started to reconsider. If the ROM’s contents are fixed, and the other logic is just gates to determine when the address can be increased, why bother opening the gates? Why not just read the ROM’s contents directly?

&emsp;I was a little skeptical, thinking this was too simple, and finally asked ChatGPT to be more certain: could this really be dumped directly without simulation? The answer made me even more convinced I was on the right track.

&emsp;Finally, I evaluated the ROM statically. I calculated the output from addresses `0` to `77`. The first bytes were immediately read as ASCII: `A R A 7 { ... }` and so on. From that, it was clear this was a flag. After all the bytes were combined, the result looked like this.

---

#### **FLAG**

```text
ARA7{Congr4tul4t1ons_y0u_ju5t_s0lv3_34rly_5t3g3_h4rdw4r3_r3v3r53_3ng1n33r1ng}
```