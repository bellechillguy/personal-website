---
title: "IoT 4 - Display & PWM"
date: "2026-03-05"
excerpt: "I’m continuing my project, and this week we’re focusing on displays and actuators."
---

&emsp;I’m continuing my project, and this week we’re focusing on displays and actuators. Let’s begin!

---

<br>

# **1. Display**

<br>

&emsp;Displays are used to display information from embedded systems. There are various types of displays; this time, I’ll be using an OLED.

&emsp;Here’s the wiring I’m using:

![](/images/projects/iot-4-1.webp)

<br>

&emsp;Type **"SSD1306"** in the search box and install all of the SSD1306 library’s dependencies from Adafruit.

&emsp;Next, let’s move on to the code in the Arduino IDE. First, open your Arduino IDE and go to **Sketch > Include Library > Manage Libraries**. The Library Manager should open.

![](/images/projects/iot-4-2.webp)

<br>

&emsp;The Adafruit library for the OLED display comes with several functions for writing text. I’ll write **"Hello World"** in it as an example. This is the code I’m using.

![](/images/projects/iot-4-3.webp)

<br>

**Source:** https://randomnerdtutorials.com/esp32-ssd1306-oled-display-arduino-ide/

<br>

&emsp;After uploading the code, this is what you’ll get in the OLED:

![](/images/projects/iot-4-4.webp)

<br>

&emsp;Because I was bored, I wanted to display my favorite character—Asa Mitaka—on the OLED. I used an Image to C Array converter for this. To make it happen, I put the C header file and the Arduino file in the same folder. Don’t forget to include the header.

<br>

&emsp;This is the Arduino code I used:

![](/images/projects/iot-4-6.webp)

<br>

&emsp;Yeah, done!!! Here’s the result.

![](/images/projects/iot-4-7.webp)

---

<br>

# **2. PWM**

<br>

&emsp;Next, I’ll experiment with PWM using LED lights. PWM is a technique for obtaining an analog signal from a digital system; this technique can be used to control the brightness of an LED.

&emsp;Here’s the wiring configuration of mine.

![](/images/projects/iot-4-8.webp)

<br>

&emsp;This is the code I used.

![](/images/projects/iot-4-9.webp)

<br>

**Source:** https://randomnerdtutorials.com/esp32-pwm-arduino-ide/