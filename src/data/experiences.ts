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
        period: "2026 - Present",
        description: "Designed visual design and branding for HMIF ITB.",
      },
      {
        title: "Member",
        period: "2025 - Present",
      },
      {
        title: "Visual and Design Staff",
        type: "Internship",
        period: "2025 - 2026",
        description: "Assisted in creating visual design for HMIF ITB.",
      },
    ],
  },
  {
    category: "Organization",
    title: "Visual Artist",
    org: "GIM ITB",
    period: "2026 - Present",
    description: "Create visual assets and illustrations for game development projects.",
  },
  {
    category: "Organization",
    title: "Robotic Software Control Department",
    org: "Aksantara ITB",
    period: "2025 - Present",
    description: "Develop and maintain the ground control station software for the robotics team.",
  },
  {
    category: "Volunteer",
    title: "Graphic Designer",
    org: "TPB Cup 2024",
    period: "2024 - 2025",
    description: "Designed branding and promotional materials for TPB Cup ITB event.",
  },
  {
    category: "Volunteer",
    title: "Lead Operator, Bioskop AMI",
    org: "Aku Masuk ITB 2025",
    period: "2024 - 2025",
    description: "Managed the technical and operational logistics for the film screening.",
  },
  {
    category: "Volunteer",
    title: "Event Division Staff",
    org: "STEI-K ITB Chairman Election",
    period: "2024",
    description: "Organized and ran events for the STEI-K student election.",
  },
  {
    category: "Certification",
    title: "BNSP Junior Web Programmer",
    period: "2023 - 2026",
    description: "National certification covering web development and database fundamentals.",
  },
  {
    category: "Education",
    title: "B.S. Information Systems & Technology",
    org: "Institut Teknologi Bandung (ITB)",
    period: "2024 - Present",
  },
];
