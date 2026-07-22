---
title: "The Phantom - Diamond | CTF Miscellaneous Write Up (FindIT UGM 2026)"
date: "2026-05-13"
---

&emsp;We are given a customized Gemini AI as the attachment. I think it has something to do with prompt injection. I started the chat, and then looked in the way it thinks. It mentioned “PT-1412” and “PT1412”.

![](/images/projects/The-1.png)

<br>

&emsp;So, I input those strings into the next chat bubble, and this is their response:

![](/images/projects/The-2.png)

<br>

&emsp;Those clues pointed so much to **Tokyo Skytree.** I put the answer again in the next bubble chat.

![](/images/projects/The-3.png)

![](/images/projects/The-4.png)

<br>

&emsp;They said that they had already marked the location with a coordinate system which divided the word into **3×3 m** squares. I did some research and found out that a website called [what3words.com](http://what3words.com/) provided that.

&emsp;Also, you can see that they pointed out another clue. They said that the location isn’t exactly in the Tokyo Skytree, but somehow NEARS it. It’s the point where the legendary **SWORDSMAN** will probably choose to enjoy his **DISH** above the clouds.

&emsp;After I tried so hard, I can conclude that the answer is **Musashi Sky Restaurant**!

![](/images/projects/The-5.png)

<br>

&emsp;I put those 3 words together and gave it back to the AI chat (with the format they wanted it to be), and… I got the flag!

![](/images/projects/The-6.png)

---

<br>

# **Flag**

<br>

#### **FindITCTF{watches.caked.land}**