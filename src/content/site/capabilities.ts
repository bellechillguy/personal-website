export const capabilities = [
  {
    title: "Frontend engineering",
    summary:
      "Turning product intent into responsive interfaces with clear hierarchy, accessible interaction states, and reusable components.",
    tools: ["Qwik", "React", "Vite", "HTML", "CSS", "JavaScript"],
    proof: "Portfolio migration, Moody frontend, SIMFASOR interfaces",
  },
  {
    title: "Backend & API integration",
    summary:
      "Designing role-aware routes, authentication flows, data persistence, and service boundaries for student-scale full-stack systems.",
    tools: ["Node.js", "Express", "Flask", "SQLite", "PostgreSQL", "MySQL"],
    proof: "Moody role system, AquaWatch dashboard backend",
  },
  {
    title: "Security & networks",
    summary:
      "Investigating systems through OSINT, networking tools, Linux workflows, and CTF-style problem solving.",
    tools: ["Linux", "Kali", "Nmap", "Wireshark", "Burp Suite", "SpiderFoot"],
    proof: "SoMeSINT write-up, networking/security learning path",
  },
  {
    title: "IoT & computer vision",
    summary:
      "Connecting sensors, brokers, dashboards, and computer vision models into observable real-time flows.",
    tools: ["OpenCV", "YOLO", "MQTT", "Mosquitto", "Node-RED", "Arduino"],
    proof: "AquaWatch, ESP32/Node-RED monitoring writeups",
  },
  {
    title: "Design systems & visual storytelling",
    summary:
      "Creating visual assets, event materials, and UI systems that make technical work feel understandable and memorable.",
    tools: ["Figma", "Canva", "Procreate", "Illustration", "Branding"],
    proof: "GIM ITB visual artist, TPB Cup design work, graphic design portfolio",
  },
  {
    title: "Deployment & tooling",
    summary:
      "Working with containers, tunnels, server configuration, and build tools so projects can leave localhost cleanly.",
    tools: ["Docker", "VPS", "Cloudflare Tunnel", "Nginx", "Git", "Vercel"],
    proof: "Moody VPS deployment, Dockerized services",
  },
] as const;
