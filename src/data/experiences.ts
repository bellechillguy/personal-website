export interface ExperienceEntry {
  category: "Education" | "Certification" | "Organization" | "Volunteer";
  title: string;
  org?: string;
  period: string;
  description?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    category: "Organization",
    title: "Visual Artist",
    org: "GIM ITB",
    period: "2026 – Present",
    description:
      "Create visual assets and illustrations to support a game development.",
  },
  {
    category: "Organization",
    title: "Robotic Software Control Department",
    org: "Aksantara ITB",
    period: "2025 – Present",
    description:
      "Build & maintain ground control station software as part of a multidisciplinary engineering team.",
  },
  {
    category: "Volunteer",
    title: "Graphic Designer",
    org: "TPB Cup 2024",
    period: "Sep 2024 – May 2025 · 9 mo",
    description:
      "Designed visual materials for event branding, promotions, and communication assets to support sports competition events.",
  },
  {
    category: "Volunteer",
    title: "Lead Operator — Bioskop AMI",
    org: "Aku Masuk ITB 2025",
    period: "Oct 2024 – Feb 2025 · 5 mo",
    description:
      "The head of the event organizer who manages the operational aspects of the film screening",
  },
  {
    category: "Volunteer",
    title: "Staff of Event Division — Chairman Election",
    org: "STEI-K ITB 2024",
    period: "Sep 2024 – Oct 2024 · 2 mo",
    description:
      "Coordinated logistics, communications, and events for the student electoral process.",
  },
  {
    category: "Certification",
    title: "BNSP Junior Web Programmer",
    period: "2023 – 2026",
    description:
      "Certified in web programming fundamentals, including application development, database integration, and software implementation.",
  },
  {
    category: "Education",
    title: "B.S. Information Systems & Technology",
    org: "Institut Teknologi Bandung (ITB)",
    period: "2024 – Present",
  },
];