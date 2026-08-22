---
title: "winrarPRO | CTF Digital Forensics Write Up (SPARTA HMIF ITB 2024)"
date: "2025-08-02"
---

&emsp;In this challenge, we were given a `.rar` file. The first step I took was to extract it using WinRAR so that the folder could be accessed by VS Code. Within the folder, there was a `.html` file as follows:

![](/images/projects/winrarPRO-1.webp)

<br>

&emsp;If we look at the last line, there is a “strange” word which makes me suspect that this is a hint.

![](/images/projects/winrarPRO-2.webp)

<br>

&emsp;Next, I decided to go to <https://www.prepostseo.com/tool/decimal-to-ascii>, a website for converting decimals to ASCII.

&emsp;The converter’s results made me even more suspicious, because among the many repetitions, there were some distinct differences, namely:

![](/images/projects/winrarPRO-3.webp)

<br>

&emsp;After that, I asked Copilot AI for help to decode that part, and finally I got the flag.

![](/images/projects/winrarPRO-4.webp)

<br>

#### **Flag**

> **TCF{easy\_phising\_malware\_analysis\_gg}**