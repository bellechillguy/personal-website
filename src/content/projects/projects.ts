import aquawatchImage from "@/assets/projects/aquawatch.webp";
import moodyImage from "@/assets/projects/moody.webp";
import simfasorImage from "@/assets/projects/simfasor.webp";
import nimonsCookedImage from "@/assets/projects/nimonscooked.webp";
import rumahSakitImage from "@/assets/projects/rumah-sakit-nimons.webp";
import graphicDesignImage from "@/assets/projects/graphic-design.webp";

export type ProjectDepth = "featured" | "standard";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  depth: ProjectDepth;
  image: string;
  accent: string;
  link: string;
  stack: string[];
  summary: string;
  problem: string;
  objective: string;
  role: string;
  constraints: string[];
  approach: string[];
  implementation: string[];
  tradeoffs: string[];
  outcome: string;
  reflection: string;
  missingInfo: string[];
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "aquawatch",
    title: "AquaWatch",
    subtitle: "Edge-based drowning detection and beach monitoring",
    depth: "featured",
    image: aquawatchImage,
    accent: "#8ee9f0",
    link: "https://github.com/bellechillguy/Aquawatch--Edge-Based-Drowning-Detection-and-Beach-Monitoring-System",
    stack: [
      "YOLO",
      "DeepSORT",
      "OpenCV",
      "Flask",
      "Socket.IO",
      "PostgreSQL",
      "React",
      "MQTT",
      "Docker",
    ],
    summary:
      "A safety-monitoring system that combines computer vision, IoT messaging, and a web dashboard to detect possible drowning events and surface beach conditions in real time.",
    problem:
      "Beach safety is time-sensitive: the important signal is not only that something happened, but that it is detected and communicated quickly enough for people to respond.",
    objective:
      "Explore how edge vision, tracking, alerts, and dashboard monitoring can work together as one operational flow.",
    role: "Project builder/contributor. Exact personal ownership across model integration, backend, frontend, and deployment needs confirmation.",
    constraints: [
      "Real-time behavior matters more than a static prediction demo.",
      "Vision, IoT, and dashboard layers need to agree on event state.",
      "The project must explain risk clearly without overstating detection reliability.",
    ],
    approach: [
      "Frame the project as a monitoring pipeline rather than only an AI model.",
      "Use object detection and tracking to follow people across frames before triggering downstream events.",
      "Send events through backend and messaging layers so the UI can behave like an operator surface.",
    ],
    implementation: [
      "YOLO and DeepSORT support detection/tracking logic.",
      "Flask and Flask-SocketIO support web communication and live updates.",
      "MQTT/Mosquitto introduces an IoT-style message layer for monitoring events.",
      "Docker packages the system so multiple moving parts can be run more consistently.",
    ],
    tradeoffs: [
      "A safety-critical concept must be presented as a prototype unless validated with real-world testing.",
      "A richer model pipeline adds credibility, but also creates more failure points to explain.",
    ],
    outcome:
      "A technically ambitious prototype that demonstrates end-to-end thinking: sensing, detection, communication, storage, and dashboard presentation.",
    reflection:
      "The strongest part of this project is not only the AI component; it is the attempt to make model output operationally visible.",
    missingInfo: [
      "Your exact role and team size.",
      "Dataset/source of test footage and evaluation method.",
      "Whether the system was deployed, demoed, or graded.",
      "Any measured latency, accuracy, or reliability observations.",
    ],
  },
  {
    slug: "moody",
    title: "Moody",
    subtitle: "Role-based mental wellbeing platform on Dockerized VPS infrastructure",
    depth: "featured",
    image: moodyImage,
    accent: "#f4abc4",
    link: "https://github.com/bellechillguy/Mood-Tracking-Platform-with-VPS-Based-Deployment--Moody-",
    stack: [
      "Node.js",
      "Express",
      "SQLite",
      "JWT",
      "Docker",
      "VPS",
      "Cloudflare Tunnel",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    summary:
      "A mood tracking and wellbeing platform that grew from a public frontend into a role-based system with authentication, approval flow, dashboards, content, persistence, and self-managed deployment.",
    problem:
      "Student mental wellbeing tools can become either too clinical or too shallow. Moody explores a lightweight space where users can journal moods while psychologists publish supportive content.",
    objective:
      "Build a complete interactive platform with user, psychologist, and superadmin roles, then deploy it on VPS infrastructure instead of leaving it as a local demo.",
    role: "Full-stack and deployment builder based on the available project report.",
    constraints: [
      "Three roles require different permissions and dashboard surfaces.",
      "Account approval states must be explicit: pending, approved, rejected.",
      "The SQLite database must persist across container restarts.",
      "Deployment needs to work through Docker, VPS configuration, and Cloudflare tunneling.",
    ],
    approach: [
      "Design the app around role-specific tasks instead of one generic dashboard.",
      "Use middleware guards for authentication and role authorization.",
      "Document the architecture with sequence, database, and deployment views so the system can be understood.",
    ],
    implementation: [
      "Express route groups separate auth, moods, content, admin, and quote endpoints.",
      "JWT and role middleware protect restricted platform actions.",
      "SQLite runs with a mounted Docker volume for persistence.",
      "Cloudflare Tunnel exposes the VPS-hosted service without treating deployment as an afterthought.",
    ],
    tradeoffs: [
      "SQLite is pragmatic for a student project and VPS deployment, while a larger production system would need stronger operational planning.",
      "Psychologist monitoring is framed as educational/supportive; real healthcare usage would require privacy, consent, and compliance review.",
    ],
    outcome:
      "A credible full-stack milestone with backend structure, database design, role flows, and infrastructure documentation.",
    reflection:
      "Moody shows a useful pattern in your work: you do not stop at UI. You keep following the system until data, roles, and deployment are accounted for.",
    missingInfo: [
      "Whether real users tested it.",
      "Any feedback from instructors or peers.",
      "Current live deployment status.",
      "Which screens you personally designed versus implemented.",
    ],
  },
  {
    slug: "simfasor",
    title: "SIMFASOR",
    subtitle: "Sports facility reservation and management system",
    depth: "featured",
    image: simfasorImage,
    accent: "#b8e7c2",
    link: "https://github.com/zal1zal/IF2050-2026-K01-G07-SIMFASOR",
    stack: ["Java", "Maven", "MySQL", "MVC"],
    summary:
      "A facility management system for reservations, scheduling, reporting, and notifications.",
    problem:
      "Facility booking systems need to make availability, user requests, and administrative decisions visible without creating double-booking confusion.",
    objective:
      "Model reservation workflows through a maintainable Java application with database-backed scheduling.",
    role: "Team project contributor. Exact personal ownership needs confirmation.",
    constraints: [
      "Booking logic depends on consistent schedule state.",
      "Administrative and user-facing needs must be separated.",
      "Database structure has to support reservation and reporting flows.",
    ],
    approach: [
      "Use MVC separation to keep domain logic, data access, and interface behavior understandable.",
      "Treat scheduling as the core interaction instead of a secondary feature.",
    ],
    implementation: [
      "Java/Maven application structure.",
      "MySQL-backed persistence.",
      "Reservation, reporting, and notification-oriented modules.",
    ],
    tradeoffs: [
      "The portfolio needs more detail before claiming adoption, impact, or operational quality.",
    ],
    outcome: "A useful systems-design project for showing database-backed workflow thinking.",
    reflection:
      "This project can become much stronger with a short walkthrough of one reservation flow and the data decisions behind it.",
    missingInfo: [
      "Your exact role.",
      "Screenshots of the main booking flow.",
      "Key schema decisions.",
      "Demo, grading, or usage outcome.",
    ],
  },
  {
    slug: "nimonscooked",
    title: "NimonsCooked!",
    subtitle: "JavaFX multiplayer cooking game inspired by Overcooked",
    depth: "standard",
    image: nimonsCookedImage,
    accent: "#f7e87a",
    link: "https://github.com/Nizreal/K01-E-Tugas-Besar-IF2010-Pemrograman-Berorientasi-Objek-STI",
    stack: ["Java", "JavaFX", "OOP", "Game loop"],
    summary:
      "A multiplayer cooking game built around object-oriented programming principles, interactive state, and a game loop.",
    problem:
      "A game project has to coordinate player actions, timers, recipes, map state, and feedback without turning the code into one tangled script.",
    objective: "Use JavaFX and OOP patterns to build a playable cooperative cooking experience.",
    role: "Team project contributor. Exact personal ownership needs confirmation.",
    constraints: [
      "Game state changes quickly and must stay understandable.",
      "Player feedback needs to be immediate.",
      "The code needs to demonstrate OOP concepts, not only produce a working screen.",
    ],
    approach: [
      "Represent game entities and interactions through explicit objects.",
      "Use the game loop as the organizing rhythm for updates and feedback.",
    ],
    implementation: [
      "JavaFX interface and rendering.",
      "Object-oriented domain structure for game entities.",
      "Multiplayer interaction concept inspired by cooking-task coordination.",
    ],
    tradeoffs: [
      "Without gameplay footage or architecture notes, the portfolio can only present the concept and likely learning value.",
    ],
    outcome:
      "A practical OOP/game-development project that broadens the portfolio beyond web interfaces.",
    reflection:
      "This is a good place to show how you think about state and interaction, especially if you add a diagram or short gameplay clip.",
    missingInfo: [
      "Gameplay screenshots or video.",
      "Your exact role.",
      "Core classes or architecture decisions.",
      "What was hardest to make feel playable.",
    ],
  },
  {
    slug: "rumah-sakit-nimons",
    title: "Rumah Sakit Nimons",
    subtitle: "C hospital management system with role-based access",
    depth: "standard",
    image: rumahSakitImage,
    accent: "#d8dffc",
    link: "https://github.com/Labpro-22/if1210-tubes-2025-k03-e",
    stack: ["C", "ADT", "Search", "Sort", "Role-based access"],
    summary:
      "A hospital management system in C with manager, doctor, and patient roles, built around data structures and algorithms.",
    problem:
      "Role-based hospital workflows require different views of the same underlying data while keeping operations predictable in a lower-level language.",
    objective:
      "Practice ADTs, search, sort, and access control in a practical management-system context.",
    role: "Team project contributor. Exact personal ownership needs confirmation.",
    constraints: [
      "C requires explicit data modeling and memory-aware implementation.",
      "Role behavior must be represented without modern framework shortcuts.",
      "Search and sort behavior needs to be correct and explainable.",
    ],
    approach: [
      "Model hospital users and workflows with ADTs.",
      "Use algorithmic operations as visible parts of the application behavior.",
    ],
    implementation: [
      "C-based management system.",
      "Role-specific access for managers, doctors, and patients.",
      "Search and sort algorithms for data operations.",
    ],
    tradeoffs: [
      "The project currently needs more narrative to explain why specific ADTs or algorithms were chosen.",
    ],
    outcome: "A fundamentals-heavy project that shows you can reason below the framework layer.",
    reflection:
      "This should be framed as evidence of algorithmic discipline and careful modeling, not just another management app.",
    missingInfo: [
      "Primary ADTs used.",
      "Your exact role.",
      "Most difficult bug or data-modeling decision.",
      "Screenshots or terminal walkthrough.",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design Portfolio",
    subtitle: "Branding, illustration, event materials, and visual identity",
    depth: "standard",
    image: graphicDesignImage,
    accent: "#ffd6a8",
    link: "https://canva.link/ilitztq92lrp0ac",
    stack: ["Canva", "Figma", "Procreate", "Brand systems"],
    summary:
      "A collection of visual design work across branding, illustration, event materials, and identity systems.",
    problem:
      "Visual work has to communicate mood and information quickly, especially for events and student organizations with limited audience attention.",
    objective:
      "Show the design side of your technical identity: composition, hierarchy, illustration, and communication.",
    role: "Graphic designer and visual artist.",
    constraints: [
      "Different contexts require different visual tones.",
      "The work needs to be scannable while still feeling distinctive.",
      "Design decisions should support the event or message rather than only looking cute.",
    ],
    approach: [
      "Use visual systems to make each project recognizable.",
      "Balance decorative personality with hierarchy and readability.",
    ],
    implementation: [
      "Branding and promotional assets.",
      "Illustrations and social/event materials.",
      "Figma/Canva/Procreate workflows.",
    ],
    tradeoffs: [
      "The portfolio needs project-by-project captions to avoid feeling like a moodboard without context.",
    ],
    outcome:
      "A useful counterweight to the engineering work, showing that your interfaces come from visual judgment as well as code.",
    reflection:
      "This section should help visitors understand why your technical portfolio has such a specific visual voice.",
    missingInfo: [
      "Which pieces were for which organizations/events.",
      "Your favorite design and why.",
      "Any constraints such as deadlines, brand rules, or audience.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.depth === "featured");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
