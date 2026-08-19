---
title: "Moody - Development of a Role-Based Mental Health Platform Using Dockerized VPS Infrastructure"
date: "2026-06-01"
excerpt: "This document describes the development of Moody’s second milestone, expanding the platform from a publicly accessible frontend into a fully interactive system equipped with authentication, role-based access control, a self-managed database, and a functional backend."
---

---

# **CHAPTER I - INTRODUCTION**

<br>

## **1.1 Document Purpose**

<br>

&emsp;This document describes the development of Moody’s second milestone, expanding the platform from a publicly accessible frontend into a fully interactive system equipped with authentication, role-based access control, a self-managed database, and a functional backend.

&emsp;This milestone introduces structured interaction flows between three primary roles:

- **Superadmin**, who manages platform governance and user approval
- **Psychologist**, who publishes mental health resources and monitors patient mood trends. This behavior is intentionally designed to simulate a shared mental health monitoring environment where registered psychologists can observe anonymized emotional trends and patient journaling activity for educational and wellbeing support purposes.
- **User/patient**, who records daily moods and consumes wellness content

&emsp;In addition, this report documents the platform architecture, database design, backend structure, interaction sequence diagrams, and the rationale behind the selected technologies and implementation decisions.

---

<br>

## **1.2 Topic Selection**

<br>

&emsp;Moody continues under the Health and Wellbeing theme established in the first milestone. The motivation behind the platform remains deeply personal. As an ITB student, I have experienced how academic pressure and highly competitive environments can gradually affect mental health until even important responsibilities begin to feel overwhelming.

&emsp;Moody was designed to provide students with a private and accessible space where they can track their emotional condition daily through mood journaling. In this second milestone, the platform evolves further by introducing a psychologist role that allows mental health professionals to publish wellness articles, supportive resources, and guided content directly to users within the same platform.

&emsp;The primary goal is to bridge personal emotional awareness with professional mental health support in a lightweight and accessible way without requiring users to leave the application ecosystem.

---

<br>

## **1.3 Platform Specification**

<br>

&emsp;Moody’s second milestone is built using the following technology stack:

![](/images/projects/Moody-1.webp)

**Table 1.3.** Technology Stack

---

# **CHAPTER II - TASK SPECIFICATION**

<br>

## **2.1 Platform Access**

<br>

&emsp;Moody implements a three-tier role system to ensure that each user can only access features relevant to their responsibilities.

![](/images/projects/Moody-2.webp)

**Table 2.1.** Role System

<br>

&emsp;Figure 2.1.1 shows the login interface used by all platform roles to authenticate into the system.

![](/images/projects/Moody-3.webp)

**Figure 2.1.1.** Moody Login Page

<br>

&emsp;Account approval status is stored in the approved column with three possible states:

- 0 = Pending
- 1 = Approved
- 2 = Rejected

<br>

&emsp;Figure 2.1.2 illustrates the registration interface where users may create accounts and optionally upload profile avatars before awaiting superadmin approval.

![](/images/projects/Moody-4.webp)

**Figure 2.1.2.** Moody Registration Page

<br>

&emsp;Users whose accounts are rejected receive a specific rejection message during login, while pending users are informed that their account is still under review.

![](/images/projects/Moody-5.webp)

**Figure 2.1.3.** Moody Login Validation Message

<br>

&emsp;Administrative moderation and platform monitoring are handled through dedicated backend endpoints such as `/api/admin/pending` for reviewing pending registrations and `/api/admin/stats` for retrieving aggregated platform statistics.

<br>

&emsp;Figure 2.1.4 presents the superadmin dashboard used to review pending registrations and monitor overall platform statistics.

![](/images/projects/Moody-6.webp)

![](/images/projects/Moody-7.webp)

![](/images/projects/Moody-8.webp)

**Figure 2.1.4.** Superadmin Dashboard and User Approval Interface

<br>

&emsp;The seeded superadmin account is:

- **Email:** [redacted]
- **Password:** [redacted]

---

<br>

## **2.2 Data Storage, Database, and Backend**

<br>

### **2.2.1 Backend Architecture**

<br>

&emsp;The backend is developed using Node.js and Express.js and organized into five route groups mounted through `server.js`:

- `/api/auth` for registration, login, and profile management
- `/api/moods` for mood logging, retrieval, and analytics
- `/api/content` for wellness content management
- `/api/admin` for administrative actions and user approval
- `/api/quote` for communication with the external ZenQuotes.io API

<br>

&emsp;Authentication and authorization are enforced through **middleware**-based access control using `requireAuth` and `requireRole(role)` guards on protected endpoints. These middleware layers ensure that only authenticated users with the appropriate role permissions can access restricted platform functionalities.

<br>

&emsp;The backend also serves the static frontend from the `/frontend` directory and uses an SPA fallback mechanism that redirects unknown routes to `index.html`.

<br>

&emsp;Figure 2.2.1 illustrates the overall deployment and infrastructure architecture of the Moody platform, including Docker containerization, persistent storage volumes, Cloudflare tunneling, and external API integration.

![](/images/projects/Moody-9.webp)

**Figure 2.2.1.** Moody System Architecture Diagram

---

<br>

### **2.2.2 Database**

<br>

&emsp;During containerized deployment, the SQLite database is mounted at `/app/data/moody.db` through a Docker volume to ensure persistence across container restarts.

&emsp;The database operates in WAL mode to improve concurrent read performance while foreign key constraints remain enabled for relational consistency.

---

<br>

#### **2.2.2.1 users**

<br>

&emsp;Stores all registered platform accounts.

![](/images/projects/Moody-10.webp)

**Table 2.2.1.** users Data Type

<br>

&emsp;Figure 2.2.2.1 presents the SQLite database structure of `users` used by the platform during deployment and runtime.

![](/images/projects/Moody-11.webp)

**Figure 2.2.2.1.** SQLite `Users` Structure Preview

---

<br>

#### **2.2.2.2 mood_entries**

<br>

&emsp;Stores daily mood journals submitted by users.

![](/images/projects/Moody-12.webp)

**Table 2.2.2.** mood_entries Data Type

<br>

&emsp;Figure 2.2.2.2 presents the SQLite database structure of `mood_entries` used by the platform during deployment and runtime.

![](/images/projects/Moody-13.webp)

**Figure 2.2.2.2.** SQLite `mood_entries` Structure Preview

---

<br>

#### **2.2.2.3 content**

<br>

&emsp;Stores wellness content published by psychologists.

![](/images/projects/Moody-14.webp)

**Table 2.2.3.** content Data Type

<br>

&emsp;Figure 2.2.2.3 presents the SQLite database structure of `content` used by the platform during deployment and runtime.

![](/images/projects/Moody-15.webp)

**Figure 2.2.2.3.** SQLite `content` Structure Preview

---

<br>

#### **2.2.2.4 content_saves**

<br>

&emsp;Tracks bookmarked content.

![](/images/projects/Moody-16.webp)

**Table 2.2.4.** content_saves Data Type

<br>

&emsp;Figure 2.2.2.4 presents the SQLite database structure of `content_saves` used by the platform during deployment and runtime.

![](/images/projects/Moody-17.webp)

**Figure 2.2.2.4.** SQLite `content_saves` Structure Preview

---

<br>

#### **2.2.2.5 Supported File Formats**

<br>

&emsp;File uploads are handled using Multer middleware and stored locally inside the VPS through Docker-mounted persistent volumes.

&emsp;Mood journal uploads only accept image formats including JPEG, PNG, GIF, and WebP. Avatar uploads accept general image MIME types through `file.mimetype.startsWith('image/')` validation.

&emsp;Psychologist content attachments are more flexible and support broader file formats without strict MIME type restrictions, allowing psychologists to upload supporting wellness resources and documents more freely.

&emsp;Uploaded files are persisted through the `moody-uploads` Docker volume to ensure data remains available across container restarts and redeployments.

---

<br>

## **2.3 Interaction Flows**

<br>

&emsp;Two primary interaction flows exist between psychologists and users.

---

<br>

### **2.3.1 Flow 1: Psychologist Publishes Content → User Reads and Saves Content**

<br>

1. Psychologist submits content through `/api/content`
2. Authentication and role validation are performed.
3. Optional file uploads are processed through Multer.
4. Content is inserted into the database.
5. Users retrieve the content feed through `/api/content`.
6. Users may bookmark content through `/api/content/:id/save`.

<br>

&emsp;Figure 2.3.1 illustrates the interaction sequence between psychologists and users during content publishing, browsing, and bookmarking activities.

![](/images/projects/Moody-18.webp)

**Figure 2.3.1.** Interaction Flow Between Psychologist and User

<br>

&emsp;Figure 2.3.2 shows the interface used by psychologists to publish wellness content and upload supporting attachments.

![](/images/projects/Moody-19.webp)

![](/images/projects/Moody-20.webp)

**Figure 2.3.2.** Psychologist Content Publishing Interface

<br>

&emsp;Figure 2.3.3 presents the user content feed interface with bookmarking functionality.

![](/images/projects/Moody-21.webp)

![](/images/projects/Moody-22.webp)

**Figure 2.3.3.** User Content Feed and Bookmark Feature

---

<br>

### **2.3.2 Flow 2: User Logs Daily Mood and Receives Rule-Based Insight**

<br>

1. User submits a mood entry through `/api/moods`.
2. Authentication and role validation are performed.
3. Optional image uploads are processed.
4. Existing entries for the same date are updated instead of duplicated.
5. Mood analytics are generated through `/api/moods/stats`.
6. The system calculates mood averages and generates rule-based insights.

<br>

&emsp;The platform uses the following mood labels:

- Devastated (1)
- Heavy (2)
- Okay (3)
- Good (4)
- Awesome (5)

<br>

&emsp;Insight generation rules:

- Average < 2.5 → supportive concern message
- Average ≥ 4.2 → positive reinforcement message
- Average ≥ 3.0 → neutral encouragement message

<br>

&emsp;Insights are only generated if at least three entries exist within the past seven days.

<br>

&emsp;Figure 2.3.4 illustrates the complete interaction flow for mood logging, image upload validation, database persistence, and rule-based insight generation.

![](/images/projects/Moody-23.webp)

**Figure 2.3.4.** Mood Logging and Rule-Based Insight Flow

<br>

&emsp;Figure 2.3.5 shows the daily mood journaling interface used by users to record emotional conditions and upload optional images.

![](/images/projects/Moody-24.webp)

**Figure 2.3.5.** Daily Mood Journaling Interface

<br>

&emsp;Figure 2.3.6 presents the analytics dashboard displaying mood statistics and generated rule-based insights.

![](/images/projects/Moody-25.webp)

**Figure 2.3.6.** Mood Analytics and Insight Dashboard

---

<br>

### **2.3.3 Flow 3: Psychologist Monitors Patient Mood Data**

<br>

&emsp;Psychologists can monitor aggregated mood analytics from all approved users without requiring patients to manually report their emotional conditions.

<br>

&emsp;Endpoints used:

- `/api/moods/patients`
- `/api/moods/patient/:id`

<br>

&emsp;This functionality transforms Moody from a simple journaling platform into a lightweight mental health monitoring system that supports more contextual and data-driven consultations.

<br>

&emsp;Figure 2.3.7 illustrates how psychologists retrieve aggregated patient mood statistics and detailed emotional history from the backend system.

![](/images/projects/Moody-26.webp)

**Figure 2.3.7.** Psychologist Patient Monitoring Flow

<br>

&emsp;Figure 2.3.8 shows the patient monitoring dashboard used by psychologists to observe user mood summaries and recent activity.

![](/images/projects/Moody-27.webp)

**Figure 2.3.8.** Patient Monitoring Dashboard

<br>

&emsp;Figure 2.3.9 presents the detailed patient analytics page containing historical mood records and statistical summaries.

![](/images/projects/Moody-28.webp)

**Figure 2.3.9.** Patient Mood Detail Interface

---

<br>

## **2.4 Platform Functionalities**

<br>

&emsp;The platform’s core functionalities are summarized below.

<br>

&emsp;Figure 2.4.1 presents the primary system flow of Moody, beginning from authentication and approval processes to role-based interaction within the platform.

**Figure 2.4.1.** Main Platform System Flow

![](/images/projects/Moody-29.webp)

**Table 2.4.1.** Platform Functionalities

<br>

&emsp;In addition to the public content feed, psychologists may also access a personalized content management endpoint through `/api/content/mine` to retrieve and manage content that they have personally published.

---

<br>

## **2.5 Platform Distinctiveness**

<br>

&emsp;Moody combines personal mood intelligence with professional mental health support inside a lightweight and accessible platform specifically designed for students.

---

<br>

### **2.5.1 Psychologist Dashboard with Real-Time Mood Monitoring**

<br>

&emsp;Moody allows registered psychologists to access aggregated patient mood data in real time, including average mood scores, recent entries, and historical trends.

&emsp;This creates a more meaningful connection between personal journaling and professional mental health support while enabling psychologists to better understand patient conditions before consultations occur.

<br>

&emsp;Figure 2.5.1 shows the real-time patient monitoring capability available to psychologist accounts.

![](/images/projects/Moody-30.webp)

**Figure 2.5.1.** Psychologist Dashboard with Real-Time Mood Monitoring

---

<br>

### **2.5.2 Rule-Based Insight System**

<br>

&emsp;The analytics dashboard generates supportive insights based on the user’s average mood within the past seven days.

&emsp;Unlike platforms that depend on external AI APIs, Moody processes all insight generation internally through lightweight rule-based logic, maintaining both privacy and efficiency.

---

<br>

### **2.5.3 Empathetic Mood Labels and Image Journaling**

<br>

&emsp;Instead of relying solely on numerical scales, Moody uses emotionally expressive labels such as Devastated, Heavy, Okay, Good, and Awesome.

&emsp;Users may also attach images to mood journals, making the journaling process more personal and emotionally reflective.

<br>

&emsp;Supported image formats include:

- JPEG
- PNG
- GIF
- WebP

<br>

&emsp;Maximum upload size: **10 MB**.

<br>

&emsp;Figure 2.5.2 illustrates the mood selection interface using emotionally expressive labels rather than purely numerical scales.

![](/images/projects/Moody-31.webp)

**Figure 2.5.2.** Empathetic Mood Label Design

---

<br>

### **2.5.4 ZenQuotes.io API with Local Fallback**

<br>

&emsp;Each session begins with a motivational quote retrieved from the ZenQuotes.io API.

&emsp;If the external API fails or times out, the backend automatically switches to six locally curated motivational quotes stored directly within the server to ensure service consistency.

<br>

&emsp;Figure 2.5.3 shows the motivational quote component displayed on the platform dashboard through ZenQuotes API integration.

![](/images/projects/Moody-32.webp)

**Figure 2.5.3.** Motivational Quote Integration

---

<br>

## **2.6 Bonus: Dockerization**

<br>

&emsp;Moody is packaged inside a single Docker container named **moody-app** using Node.js 20 Alpine as a lightweight base image.

<br>

&emsp;Two named Docker volumes are used:

- **moody-db** for SQLite database persistence
- **moody-uploads** for uploaded files persistence

<br>

&emsp;Figure 2.6.1 shows the persistent Docker volumes used for SQLite database and uploaded file storage.

![](/images/projects/Moody-33.webp)

**Figure 2.6.1.** Docker Persistent Volumes

<br>

&emsp;This approach ensures that uploaded files and database contents remain persistent even if the container is rebuilt or restarted.

---

<br>

### **2.6.1 Container Components**

<br>

![](/images/projects/Moody-34.webp)

**Table 2.6.1.** Container Components

---

<br>

### **2.6.2 Dockerfile Logic**

<br>

&emsp;The container rebuilds **better-sqlite3** directly inside the Linux environment using tools such as **python3**, **make**, and **g++** because native binaries compiled on macOS are not compatible with Alpine Linux containers, requiring native compilation during the image build process.

&emsp;This rebuild process prevents architecture-related runtime issues and ensures deployment consistency across environments.

<br>

&emsp;Without Docker, deployment would require manual installation of Node.js, native build tools, dependency management, and environment configuration. Docker Compose simplifies deployment into a single command:

```bash
docker compose up -d
```

<br>

&emsp;Figure 2.6.2 presents the running Moody container during deployment inside the VPS environment.

![](/images/projects/Moody-35.webp)

**Figure 2.6.2.** Docker Container Deployment

<br>

&emsp;This approach also eliminates common environment inconsistency problems such as “works on my machine” scenarios.

<br>

&emsp;Figure 2.6.3 presents the publicly accessible Moody deployment hosted through aaPanel and Cloudflare tunneling.

![](/images/projects/Moody-36.webp)

**Figure 2.6.3.** Public VPS Deployment Environment

---

# **CHAPTER III - SUBMISSION DETAILS**

<br>

## **3.1 Submission Checklist**

<br>

&emsp;Public Platform Link:

<http://moody.stei.cloud>

<br>

&emsp;Figure 3.1 presents the publicly accessible Moody platform.

![](/images/projects/Moody-37.webp)

**Figure 3.1.** Public Platform Screenshot

---

<br>

# **REFERENCES**

<br>

1. A. A. Arman and D. W. Anggara, *“VPS Server Setup,”* ITB Lecture Materials, Bandung, 2026.

2. A. A. Arman, *“Cloud Computing Technologies,”* ITB Lecture Materials, Bandung, 2026.

3. D. Olteanu, *“SQLite WAL Mode,”* SQLite Documentation. Available: <https://www.sqlite.org/wal.html>

4. Express.js Contributors, *“Express.js Documentation.”* Available: <https://expressjs.com/>

5. Auth0, *“Introduction to JSON Web Tokens.”* Available: <https://jwt.io/introduction>

---

<br>

# **APPENDIX**

<br>

**GitHub Source Code**

<https://github.com/bellechillguy/Mood-Tracking-Platform-with-VPS-Based-Deployment--Moody->