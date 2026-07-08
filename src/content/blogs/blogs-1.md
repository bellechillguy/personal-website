---
title: "WebIntro | CTF Web Exploitation Write Up (SPARTA HMIF ITB 2024)"
date: "2025-08-02"
---

#### **Fun fact, this is the starting point of my journey in CTF, thanks to SPARTA.**

<br>

&emsp;Okay, Let’s begin!

&emsp;In this challenge, we are only given the website <http://34.50.98.72:9001>.

![](/images/WebIntro-1.png)

<br>

&emsp;After that, I used SQL Injection. Essentially, I created a dummy password by converting it to SHA64. I entered the dummy password into the **Password** field and then the resulting hash (`5e884...`) into the **Username** field. This technique tricked the website into thinking it was the real admin password.

&emsp;After doing this, I immediately got the flag.

![](/images/WebIntro-2.png)

---

<br>

# **Flag**

<br>

> **SPARTA{big_braib_sql_injectionzzzzzzzzzzz}**