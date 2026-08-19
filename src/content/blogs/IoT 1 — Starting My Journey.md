---
title: "IoT 1 - Starting My Journey"
date: "2026-02-23"
excerpt: "I will tell you the starting point of my IoT journey"
---

&emsp;Sup, everypony!

&emsp;My name is Nisrina Zakiyah (Belle) and I will tell you the starting point of my IoT journey. I’m from Information System & Technology, ITB.

&emsp;My (favorite) lecturer gives us this assignment for this Embedded System course, AND I’M SO EXCITEDDD!!! You may ask "why?" (or maybe do not care). Well that’s because I have an interest in this field—which is the "technical things" like the embedded systems. On the other hand, I also really enjoy writing since forever. I’m so grateful that my lecturer gives me an opportunity to develop my writing skills.

> *"Ugh, enough yap,"*

&emsp;Alright then, let’s begin! ;3

---

<br>

&emsp;Last week, I prepared the things needed (namely those in the picture above). Thanks to the lecturers because they have made it easier for us by making a list of links to the items that must be purchased.

![](/images/projects/iot-1-2.webp)

<br>

&emsp;But, for this week, our microcontroller—ESP32, a micro USB cable, and a breadboard (optional) are more than enough. That’s because our only objective is to make the LED lights in the ESP32 blinks.

&emsp;To make that happen, first, we must prepare the software in our PC/laptop.

&emsp;Based on the lecturers agreement, the IDE that we’re going to use is **Arduino IDE**. This is the installation processes (in the MacOS Apple Silicon):

---

<br>

# **1. Install Arduino IDE**

<br>

1. Go to this website:

   https://www.arduino.cc/en/software/

   Choose the right operating system for you.

![](/images/projects/iot-1-3.webp)

---

<br>

# **2. Add ESP32 Board Manager URL**

<br>

&emsp;Open the app, then click:

**Arduino IDE → Settings → Additional Boards Manager URLs**

![](/images/projects/iot-1-4.webp)

<br>

&emsp;Fill it with this GitHub link:

https://espressif.github.io/arduino-esp32/package_esp32_index.json

![](/images/projects/iot-1-5.webp)

---

<br>

# **3. Install the ESP32 Board Package**

<br>

&emsp;Click:

**Tools → Board → Boards Manager**

![](/images/projects/iot-1-6.webp)

<br>

&emsp;Search **"esp32"**, then install the package created by **Espressif Systems**.

![](/images/projects/iot-1-7.webp)

---

<br>

# **4. Select Your Board**

<br>

&emsp;Click:

**Tools → Board → esp32**

![](/images/projects/iot-1-8.webp)

<br>

&emsp;Choose **DOIT ESP32 DEVKIT V1**.

---

<br>

# **5. Install the USB Driver**

<br>

&emsp;Install the **USB to UART** driver.

https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads

---

<br>

# **6. Connect the ESP32**

<br>

&emsp;Connect your ESP32 board to your PC/laptop using a **micro USB cable**. If you're using a MacBook, you'll also need a **USB-C to USB adapter/HDMI hub**.

![](/images/projects/iot-1-9.webp)

*Micro USB cable*

<br>

![](/images/projects/iot-1-10.webp)

*USB-C to USB HDMI cable*

<br>

---

<br>

# **7. Select the Serial Port**

<br>

&emsp;After connecting the board, you'll see an additional port under:

**Tools → Port**

Choose that port (mine says **/dev/cu.usbserial-0001**).

![](/images/projects/iot-1-11.webp)

<br>

&emsp;Additionally, your ESP32 LED will glow red like this.

![](/images/projects/iot-1-12.webp)

*ESP32 glows in red*

---

<br>

# **8. Open the Blink Example**

<br>

&emsp;To achieve our goal (making the LED blink), click:

**File → Examples → 01.Basics → Blink**

&emsp;Then, Arduino IDE will open the example source code.

![](/images/projects/iot-1-14.webp)

---

<br>

# **9. Upload the Sketch**

<br>

&emsp;Click **Upload** to compile and upload the sketch.

![](/images/projects/iot-1-15.webp)

<br>

![](/images/projects/iot-1-16.webp)

<br>

&emsp;TADA!!! It is successfully uploaded ;333

&emsp;Here is the result (the blue LED light is blinking):

![](/images/projects/iot-1-17.webp)