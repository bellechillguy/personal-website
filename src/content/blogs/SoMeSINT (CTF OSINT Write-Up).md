---
title: "SoMeSINT (CTF OSINT Write-Up)"
date: "2025-08-21"
excerpt: "We’re pretending to be Alex Juulut — who was told to investigating Thomas Straussman — a man whose being accused of cheating on his wife."
---

**Room Link:** https://tryhackme.com/room/somesint

<br>

&emsp;I’ve done a lot of OSINT easy challenges, but now I think it’s time for me to try the medium one. *TryHackMe* was the first website that came to my mind. So… let’s begin~.

&emsp;**Flag format:** `ks{}`

---

<br>

# **1. Task 1**

<br>

&emsp;This is basically just an introduction, so I just skip to the next part.

---

<br>

# **2. Task 2**

<br>

&emsp;We are given some information about what we’re going to do next. As you can see, we’re pretending to be Alex Juulut — who was told to investigating Thomas Straussman — a man whose being accused of cheating on his wife. Alex was hired by a person with an **"H"** initial.

![][image1]

<br>

&emsp;From reading all of the text below, we can answer these two questions.

![](/images/SoMeSINT-2.png)

---

<br>

# **3. Task 3**

<br>

&emsp;We are given a username of Thomas’s social media, which is **@tstraussman**. Well, of course Twitter/X is the one that comes up on my mind. Let’s check it.

![](/images/SoMeSINT-3.png)

<br>

### Q1. What is Thomas’ favorite holiday?

<br>

&emsp;If we take a look at his Twitter bio, it’s very obvious that the answer is **Christmas**.

### Q2. What is Thomas’ birth date?

<br>

&emsp;Since I didn’t find anything related to his birthday, I just moved to another social media—which is Reddit. I just googled "*tstraussman reddit*" on Google, and eventually I found it.

![][image4]

<br>

&emsp;Then, I found this post, GOTCHA!

![](/images/SoMeSINT-5.png)

<br>

&emsp;But, to find the exact date of his birthday, we must inspect the website first. It says that the timestamp is in December 20, 2020. Because of he was 30 years old in 2020, with a little math, we know that his birthday is **12–20–1990**.

![][image6]

<br>

### Q3. What is Thomas’ fiancée’s Twitter handle?

<br>

&emsp;This one is pretty easy actually (because I’ve done this a million time lol). We just need to put his username on the Twitter search bar. And I TOLD YOU SOOO~ gotcha.

![](/images/SoMeSINT-7.png)

<br>

&emsp;This account pops up. So, we know that the answer is **FHodgelink**.

### Q4. What is Thomas’ background picture of?

<br>

&emsp;This one is wayyy easier than before lol. Because we just only take a look at his header profile.

![][image8]

<br>

&emsp;I already know that the picture is named Buddha. He even mentioned that in his bio. But if you really have no idea, you could just put that picture into Google Lens, believe me that will work too.

---

<br>

# **4. Task 4**

<br>

&emsp;We should use another tools, such as Python3 and one of the OSINT frameworks—Spiderfoot. You need to read some documentations and watch a lot of YouTube tutorials to nail at this. When you’ve finished doing those instalments, run Spiderfoot in your local so that you can open the website.

&emsp;Click **New Scan**, and enter the **Scan Name** input with whatever you want, but the **Scan Target** with **"tstraussman"** or **"Thomas Straussman"**. Then, click **By Use Case** → **All**. Now you can run the scan.

![](/images/SoMeSINT-9.png)

<br>

&emsp;After that, click on **Browse** and it will gives you some information about his username.

![](/images/SoMeSINT-10.png)

<br>

### Q1. What was the source module used to find these accounts?

<br>

&emsp;Click on **Account on External Site**, so that you know that the answer is **sfp_accounts**.

![](/images/SoMeSINT-11.png)

<br>

### Q2. Check the shadowban API. What is the value of "search"?

<br>

&emsp;Search the **Wayback Machine** website on the browser. Enter this link:

https://shadowban.eu/.api/tstraussman

&emsp;Open the **June 23, 2021** snapshot because it’s the oldest snapshot and I have a strong feeling about that lol.

![](/images/SoMeSINT-12.png)

<br>

&emsp;Gotcha!

![](/images/SoMeSINT-13.png)

<br>

&emsp;The answer is **ks{1346173539712380929}**.

---

<br>

# **5. Task 5**

<br>

&emsp;We should find more information, especially of his fiancée. I will gather all of the information on her Twitter account.

### Q1. Where did Thomas and his fiancée vacation to?

<br>

&emsp;Just stalk her account that we found earlier. Finally I found this post. I clicked **Alt**, then I knew the answer. It was **Koblenz, Germany**.

![](/images/SoMeSINT-14.png)

<br>

### Q2. When is Francesca’s Mother’s birthday? (without the year)

<br>

**December 25th**

![][image15]

<br>

### Q3. What is the name of their cat?

<br>

**Gotank**

![](/images/SoMeSINT-16.png)

<br>

### Q4. What show does Francesca like to watch?

<br>

**90 Day Fiancee**

![][image17]

---

<br>

# **6. Task 6**

<br>

&emsp;We will gather many information about Thomas’s coworker and his dirty little secret (ssttt) via Reddit.

### Q1. What is the name of Thomas’ coworker?

<br>

&emsp;Firstly, open a website called **Wayback Machine** again, and then put the link that contains Thomas post (the birthday one). Then, open the snapshot in **December 21, 2020**, because it was the oldest one and again… I have a strong feeling about that.

&emsp;And TADAAA. I found the name from his old comment.

![](/images/SoMeSINT-18.png)

<br>

&emsp;But since we must also know the last name, I tried to inspect the website again. And finally, **@minikhans** is his username, so the answer is **Hans Minik**.

![](/images/SoMeSINT-19.png)

<br>

### Q2. Where does his coworker live?

<br>

&emsp;I searched Hans’s username on my browser, and I found his Reddit account.

![][image20]

![](/images/SoMeSINT-21.png)

<br>

&emsp;So, from all of these I know that the answer is **Nuuk, Greenland**.

### Q3. What is the paste ID for the link we found? (flag format)

<br>

&emsp;For this question, we must use the old version of Reddit, then put it again into Wayback Machine. The next step is open the snapshot in **March 23, 2021** (this one isn’t the oldest).

![](/images/SoMeSINT-22.png)

<br>

&emsp;I found a suspicious link called **"Disapointed 2 Electric Boogaloo."** Of course I opened it. Then… JACKPOT!!!

![][image23]

<br>

&emsp;The answer is **ks{1qaz2wsx}**.

### Q4. What is the name of Thomas’ mistress?

<br>

&emsp;Combine the Ghostbin link and the password that was given in the previous task:

http://ghostbin.com/paste/JENxv/1qaz2wsx

&emsp;After that, put that link into Wayback Machine again. Then, open the snapshot in **March 23, 2021**.

&emsp;SURPRISE!!!

![](/images/SoMeSINT-24.png)

<br>

&emsp;The answer is **Emilia Moller**.

### Q5. What is Thomas’ Email address?

<br>

**straussmanthom@mail.com**

---

<br>

# **~ THANK YOU ~**

[image1]: /images/SoMeSINT (CTF OSINT Write-Up)-image1.png

[image4]: /images/SoMeSINT (CTF OSINT Write-Up)-image4.png

[image6]: /images/SoMeSINT (CTF OSINT Write-Up)-image6.png

[image8]: /images/SoMeSINT (CTF OSINT Write-Up)-image8.png

[image15]: /images/SoMeSINT (CTF OSINT Write-Up)-image15.png

[image17]: /images/SoMeSINT (CTF OSINT Write-Up)-image17.png

[image20]: /images/SoMeSINT (CTF OSINT Write-Up)-image20.png

[image23]: /images/SoMeSINT (CTF OSINT Write-Up)-image23.png