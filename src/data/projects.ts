import aquawatchImage from "@/assets/projects/aquawatch.png";
import moodyImage from "@/assets/projects/moody.png";
import simfasorImage from "@/assets/projects/simfasor.png";
import nimonsCookedImage from "@/assets/projects/nimonscooked.png";
import rumahSakitImage from "@/assets/projects/rumah-sakit-nimons.png";
import graphicDesignImage from "@/assets/projects/graphic-design.png";

export interface Project {
  title: string;
  blurb: string;
  features?: string[];
  tech: string[];
  link: string;
  accent: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "AquaWatch",
    blurb:
      "AI-powered drowning detection combining Computer Vision & IoT for real-time beach safety monitoring.",
    image: aquawatchImage,
    tech: [
      "YOLOv26",
      "DeepSORT",
      "OpenCV",
      "Flask",
      "Flask-SocketIO",
      "PostgreSQL",
      "React",
      "Vite",
      "MQTT",
      "Mosquitto",
      "Docker",
    ],
    link: "https://github.com/bellechillguy/Aquawatch--Edge-Based-Drowning-Detection-and-Beach-Monitoring-System",
    accent: "#96FDFD",
  },
  {
    title: "Moody",
    blurb:
      "Mood tracking platform for mental wellbeing. Full-stack with VPS deployment, Linux server config, and Cloudflare tunnel.",
    image: moodyImage,
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "SQLite",
      "JWT",
      "Docker",
      "VPS",
      "Cloudflare",
    ],
    link: "https://github.com/bellechillguy/Mood-Tracking-Platform-with-VPS-Based-Deployment--Moody-",
    accent: "#FFD1DC",
  },
  {
    title: "SIMFASOR",
    blurb:
      "Sports facility management & reservation system with MVC architecture, scheduling, reporting, and notifications.",
    image: simfasorImage,
    tech: ["Java", "Maven", "MySQL"],
    link: "https://github.com/zal1zal/IF2050-2026-K01-G07-SIMFASOR",
    accent: "#C7E9C0",
  },
  {
    title: "NimonsCooked!",
    blurb:
      "JavaFX multiplayer cooking game inspired by Overcooked and designed around OOP principles and game loops.",
    image: nimonsCookedImage,
    tech: ["Java", "JavaFX"],
    link: "https://github.com/Nizreal/K01-E-Tugas-Besar-IF2010-Pemrograman-Berorientasi-Objek-STI",
    accent: "#FDFD96",
  },
  {
    title: "Rumah Sakit Nimons",
    blurb:
      "Hospital management system in C with role-based access for managers, doctors & patients. Uses ADT, search, and sort algorithms.",
    image: rumahSakitImage,
    tech: ["C"],
    link: "https://github.com/Labpro-22/if1210-tubes-2025-k03-e",
    accent: "#E0E7FF",
  },
  {
    title: "Graphic Design Portfolio",
    blurb:
      "Graphic design works: branding, illustration, event materials, and visual identity across multiple projects.",
    image: graphicDesignImage,
    tech: ["Canva", "Figma", "Procreate"],
    link: "https://canva.link/ilitztq92lrp0ac",
    accent: "#FFE4B5",
  },
];
