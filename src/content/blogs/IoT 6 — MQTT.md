---
title: "IoT 6 - MQTT"
date: "2026-04-16"
excerpt: "MQTT is a lightweight, publish–subscribe, machine-to-machine network protocol for message queuing"
---

&emsp;MQTT is a lightweight, publish–subscribe, machine-to-machine network protocol for message queuing. There are 4 components: Publisher, Subscriber, Topics (in the explorer), and Broker, which accept and filter the data.

&emsp;The objective of this project is to publish the data to the public MQTT broker and analyze the data packet structure, which includes the Header & Payload, using Wireshark software.

---

<br>

# **1. First, prepare for the installation of the software**

<br>

![](/images/projects/iot-6-1.webp)

Installing MQTT Explorer in App Store.

<br>

![](/images/projects/iot-6-2.webp)

Installing Wireshark on their official website.

<br>

&emsp;For macOS, don’t forget to install ChmodBPF so that Wireshark is able to detect the network interface.

---

<br>

# **2. Open the MQTT Explorer, and modify the default connection.**

<br>

![](/images/projects/iot-6-3.webp)

<br>

&emsp;Click “Advanced”, delete the default subscription, and add a new one using your identity or something else. Press “Back” and then connect it.

<br>

![](/images/projects/iot-6-4.webp)

---

<br>

# **3. Write the topic and the value all you want (either in raw, XML, or JSON), then publish it.**

<br>

![](/images/projects/iot-6-5.webp)

---

<br>

# **4. Open Wireshark. Click twice on the “Wi-Fi: en0”.**

<br>

![](/images/projects/iot-6-6.webp)

<br>

&emsp;This interface will pop up. Use the filter function on the top, and write “mqtt”. You will see that there is no result coming out unless you publish your topic in the MQTT Explorer before.

<br>

![](/images/projects/iot-6-7.webp)

<br>

&emsp;This is what happens when you have already published your topic.

<br>

![](/images/projects/iot-6-8.webp)

---

<br>

# **5. Analyze the total length in Wireshark**

<br>

## **a. Total Packet**

<br>

&emsp;Open “Frame”, then you will see the information about the packet length. It says **115 bytes**.

<br>

![](/images/projects/iot-6-9.webp)

<br>

## **b. Ethernet Header**

<br>

&emsp;Click “Ethernet II”. See what happens in the hex view. It indicates that the ethernet header’s length consists of **14 bytes**.

<br>

![](/images/projects/iot-6-10.webp)

<br>

## **c. IP Header**

<br>

&emsp;Open “Internet Protocol Version 4”, and you will see the IP header length is **20 bytes**.

<br>

![](/images/projects/iot-6-11.webp)

<br>

## **d. TCP Header**

<br>

&emsp;Open “Transmission Control Protocol”, it says that the header length is **32 bytes**.

<br>

![](/images/projects/iot-6-12.webp)

<br>

## **e. MQTT (header + payload)**

<br>

&emsp;Total MQTT payload is the total bytes of the topic’s value; in this case, it is **24 bytes**.

<br>

![](/images/projects/iot-6-13.webp)

<br>

![](/images/projects/iot-6-14.webp)

<br>

&emsp;Now, we know that:

**payload length = 24 bytes**  
**msg length = variable length + payload = 47 bytes**  
**variable length = msg length − payload = 47 − 24 = 23 bytes**  
**fixed length = 2 bytes**  
**header length = variable length + fixed length = 23 + 2 = 25 bytes**  
**MQTT total = 24 + 23 + 2 = 49 bytes**

<br>

&emsp;So, we can conclude that:

<br>

![](/images/projects/iot-6-15.webp)