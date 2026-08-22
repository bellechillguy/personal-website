import aquawatchImage from "@/assets/projects/aquawatch.webp";
import moodyImage from "@/assets/projects/moody.webp";
import simfasorImage from "@/assets/projects/simfasor.webp";
import nimonsCookedImage from "@/assets/projects/nimonscooked.webp";
import rumahSakitImage from "@/assets/projects/rumah-sakit-nimons.webp";
import graphicDesignImage from "@/assets/projects/graphic-design.webp";

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
    blurb: "Drowning detection system using computer vision and IoT.",
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
    blurb: "Full-stack mood tracker deployed on a Linux VPS via Cloudflare tunnel.",
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
    blurb: "MVC-based sports facility management and reservation system.",
    image: simfasorImage,
    tech: ["Java", "Maven", "MySQL"],
    link: "https://github.com/zal1zal/IF2050-2026-K01-G07-SIMFASOR",
    accent: "#C7E9C0",
  },
  {
    title: "NimonsCooked!",
    blurb: "Multiplayer cooking game built with JavaFX, inspired by Overcooked.",
    image: nimonsCookedImage,
    tech: ["Java", "JavaFX"],
    link: "https://github.com/Nizreal/K01-E-Tugas-Besar-IF2010-Pemrograman-Berorientasi-Objek-STI",
    accent: "#FDFD96",
  },
  {
    title: "Rumah Sakit Nimons",
    blurb: "Hospital management CLI in C with role-based access control.",
    image: rumahSakitImage,
    tech: ["C"],
    link: "https://github.com/Labpro-22/if1210-tubes-2025-k03-e",
    accent: "#E0E7FF",
  },
  {
    title: "Graphic Design Portfolio",
    blurb: "Collection of branding, illustration, and visual identity work.",
    image: graphicDesignImage,
    tech: ["Canva", "Figma", "Procreate"],
    link: "https://canva.link/ilitztq92lrp0ac",
    accent: "#FFE4B5",
  },
];
