---
title: "Did You Find IT? | CTF Miscellaneous Write Up (FindIT UGM 2026)"
date: "2026-05-13"
---

&emsp;This is the first challenge that I solved in FindIT. That’s because the description of it was very straightforward. They both mentioned "Instagram Feed" and "FindIT Logo". At that time, I quickly jumped into their official Instagram account, **@ugm.findit**.

&emsp;I was scrolling through their page and looking for the logo. Once I found it, I looked at the caption. Tadaa! There are some odd strings in there.

> `RmluZElUQ1RGe2phbmdhbl9sdXBhX2ZvbGxvd19pZ19maW5kaXR9`

![](/images/projects/Did-1.png)

<br>

&emsp;I had a feeling that it was Base64. I opened CyberChef, and yes, I was right. Here is the output.

![](/images/projects/Did-2.png)

<br>

#### **Flag**

> **FindITCTF{jangan_lupa_follow_ig_findit}**