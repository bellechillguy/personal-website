export interface TechItem {
  name: string;
  color: string;
  iconTone?: "monochrome";
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C", color: "#A8B9CC" },
      { name: "C++", color: "#00599C" },
      { name: "C#", color: "#9B4F96" },
      { name: "Java", color: "#E76F00" },
      { name: "Python", color: "#3776AB" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#111827", iconTone: "monochrome" },
      { name: "Node.js", color: "#5FA04E" },
      { name: "Vite", color: "#646CFF" },
      { name: "Express.js", color: "#111827", iconTone: "monochrome" },
      { name: "Django", color: "#0C4B33" },
      { name: "Flask", color: "#111827", iconTone: "monochrome" },
      { name: "Qwik", color: "#111827" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", color: "#4479A1", iconTone: "monochrome" },
      { name: "MariaDB", color: "#003545" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "SQLite", color: "#003B57" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "NumPy", color: "#013243", iconTone: "monochrome" },
      { name: "Pandas", color: "#150458", iconTone: "monochrome" },
      { name: "Matplotlib", color: "#11557C" },
      { name: "SciPy", color: "#8CAAE6" },
    ],
  },
  {
    title: "IoT & Computer Vision",
    items: [
      { name: "OpenCV", color: "#5C3EE8" },
      { name: "Arduino", color: "#00979D", iconTone: "monochrome" },
      { name: "Node-RED", color: "#8F0000" },
      { name: "Mosquitto", color: "#3C5280", iconTone: "monochrome" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", color: "#2496ED" },
      { name: "Nginx", color: "#009639" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#111827", iconTone: "monochrome" },
      { name: "Cloudflare", color: "#F38020" },
      { name: "Vercel", color: "#111827", iconTone: "monochrome" },
    ],
  },
  {
    title: "Networking & Cyber Security",
    items: [
      { name: "Linux", color: "#FCC624" },
      { name: "Kali Linux", color: "#557C94", iconTone: "monochrome" },
      { name: "Nmap", color: "#4682B4" },
      { name: "Wireshark", color: "#1679A7", iconTone: "monochrome" },
      { name: "Cisco Packet Tracer", color: "#1BA0D7", iconTone: "monochrome" },
      { name: "Ghidra", color: "#FF4B4B" },
      { name: "Burp Suite", color: "#FF6633" },
      { name: "SpiderFoot", color: "#2E2E2E" },
    ],
  },
  {
    title: "Game Development",
    items: [{ name: "Unity", color: "#111827", iconTone: "monochrome" }],
  },
  {
    title: "Graphic Design",
    items: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Procreate", color: "#000000" },
    ],
  },
];
