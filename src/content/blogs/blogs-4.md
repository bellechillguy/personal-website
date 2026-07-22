---
title: "I’m Already Tracer | CTF Digital Forensics Write Up (SPARTA HMIF ITB 2024)"
date: "2025-08-02"
---

&emsp;In this challenge, we were given the server address (`nc 34.50.98.72 8911`) and a `.pcapng` file. To access this file, Wireshark is required. Within the server, there are three questions.

---

<br>

# **I. First Question**

<br>

![](/images/projects/I-1.png)

<br>

&emsp;The way to solve this is to open any file, right-click it, and select **Follow**. This will take you to information about the server’s name and version.

![](/images/projects/I-2.png)

<br>

**Answer:** `Maltrail/0.53`

---

<br>

# **II. Second Question**

<br>

![](/images/projects/I-3.png)

<br>

&emsp;The way to solve this is to filter all requests based on the information to make it easier, then look for the one with the information **POST:login**, then select the second attempt that says **login success**.

![](/images/projects/I-4.png)

<br>

**Answer:** `admin/56dd09…`

---

<br>

# **III. Third Question**

<br>

![](/images/projects/I-5.png)

<br>

&emsp;Look for a **POST:LOGIN** attempt, but one that uses the **ECHO** command.

&emsp;Then, you’ll find a username containing Base64-encoded text.

![](/images/projects/I-6.png)

<br>

&emsp;Therefore, I did a decoder so that I got information related to the question.

![](/images/projects/I-7.png)

<br>

**Answer:** `159.223.33.240:9999`

---

<br>

# **IV. Closing Question**

<br>

![](/images/projects/I-8.png)

<br>

&emsp;With the IP and port information gathered, we simply search for attempts from the same source. After selecting **Follow**, we find the file stored by the hacker as follows:

![](/images/projects/I-9.png)

<br>

**Answer:** `/tmp/.hmm.sh`

---

<br>

# **V. Flag**

<br>

&emsp;Finally, after all the questions are answered, we get the flag.

![](/images/projects/I-10.png)

<br>

#### **Flag:** `SPARTA{pretty_much_99%_of_packet_capture_challs_is_like_this_4cd830d1cd9921d5}`