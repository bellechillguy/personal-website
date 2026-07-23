type ExperienceCategory = "Education" | "Certification" | "Organization" | "Volunteer";

export interface ExperienceRole {
  title: string;
  type?: string;
  period: string;
  description?: string;
}

interface ExperienceBase {
  category: ExperienceCategory;
  period: string;
}

export interface StandaloneExperienceEntry extends ExperienceBase {
  title: string;
  org?: string;
  description?: string;
  roles?: never;
}

export interface GroupedExperienceEntry extends ExperienceBase {
  org: string;
  roles: ExperienceRole[];
  title?: never;
  description?: never;
}

export type ExperienceEntry = StandaloneExperienceEntry | GroupedExperienceEntry;

export const experiences: ExperienceEntry[] = [
  {
    category: "Organization",
    org: "Himpunan Mahasiswa Informatika (HMIF) ITB",
    period: "",
    roles: [
      {
        title: "Visual and Design Staff",
        type: "Contract",
        period: "2026 – Present",
        description: "Designed visual materials for HMIF programs and events as a staff.",
      },
      {
        title: "Member",
        period: "2025 – Present",
      },
      {
        title: "Visual and Design Staff",
        type: "Internship",
        period: "2025 - 2026",
        description: "Designed visual materials for HMIF programs and events as an intern staff.",
      },
    ],
  },
  {
    category: "Organization",
    title: "Visual Artist",
    org: "GIM ITB",
    period: "2026 – Present",
    description: "Create visual assets and illustrations to support a game development.",
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
    period: "2024 - 2025",
    description:
      "Designed visual materials for event branding, promotions, and communication assets to support sports competition events.",
  },
  {
    category: "Volunteer",
    title: "Lead Operator - Bioskop AMI",
    org: "Aku Masuk ITB 2025",
    period: "2024 - 2025",
    description:
      "The head of the event organizer who manages the operational aspects of the film screening",
  },
  {
    category: "Volunteer",
    title: "Staff of Event Division - Chairman Election",
    org: "STEI-K ITB 2024",
    period: "2024",
    description:
      "Coordinated logistics, communications, and events for the student electoral process.",
  },
  {
    category: "Certification",
    title: "BNSP Junior Web Programmer",
    period: "2023 - 2026",
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
