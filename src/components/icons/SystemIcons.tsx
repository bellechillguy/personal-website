import type { ImgHTMLAttributes } from "react";

import finder from "@/assets/icons/macos/finder.png";
import projects from "@/assets/icons/macos/projects.png";
import techStack from "@/assets/icons/macos/tech_stack.png";
import experience from "@/assets/icons/macos/experience.png";
import aboutMe from "@/assets/icons/macos/about_me.png";
import contact from "@/assets/icons/macos/contact.png";
import blog from "@/assets/icons/macos/blog.png";
import interest from "@/assets/icons/macos/interest.png";
import resume from "@/assets/icons/macos/resume.png";
import appleMusic from "@/assets/icons/macos/apple-music.png";
import goodreads from "@/assets/icons/macos/goodreads.png";
import medium from "@/assets/icons/macos/medium.png";
import github from "@/assets/icons/macos/github.png";
import linkedin from "@/assets/icons/macos/linkedin.png";

// Languages
import iconC from "@/assets/icons/tech/c.svg";
import iconCpp from "@/assets/icons/tech/cpp.svg";
import iconCsharp from "@/assets/icons/tech/csharp.svg";
import iconJava from "@/assets/icons/tech/java.svg";
import iconPython from "@/assets/icons/tech/python.svg";
import iconJavaScript from "@/assets/icons/tech/javascript.svg";

// Web Development
import iconHtml5 from "@/assets/icons/tech/html5.svg";
import iconCss3 from "@/assets/icons/tech/css3.svg";
import iconReact from "@/assets/icons/tech/react.svg";
import iconNextjs from "@/assets/icons/tech/nextjs.svg";
import iconNodejs from "@/assets/icons/tech/nodejs.svg";
import iconVite from "@/assets/icons/tech/vite.svg";
import iconExpress from "@/assets/icons/tech/express.svg";
import iconDjango from "@/assets/icons/tech/django.svg";
import iconFlask from "@/assets/icons/tech/flask.svg";

// Databases
import iconMysql from "@/assets/icons/tech/mysql.svg";
import iconMariadb from "@/assets/icons/tech/mariadb.svg";
import iconPostgresql from "@/assets/icons/tech/postgresql.svg";
import iconSqlite from "@/assets/icons/tech/sqlite.svg";

// Data & Analytics
import iconNumpy from "@/assets/icons/tech/numpy.svg";
import iconPandas from "@/assets/icons/tech/pandas.svg";
import iconMatplotlib from "@/assets/icons/tech/matplotlib.svg";
import iconScipy from "@/assets/icons/tech/scipy.svg";

// IoT & Computer Vision
import iconOpencv from "@/assets/icons/tech/opencv.svg";
import iconArduino from "@/assets/icons/tech/arduino.svg";
import iconNodered from "@/assets/icons/tech/nodered.svg";
import iconMosquitto from "@/assets/icons/tech/mosquitto.svg";

// DevOps & Cloud
import iconDocker from "@/assets/icons/tech/docker.svg";
import iconNginx from "@/assets/icons/tech/nginx.svg";
import iconGit from "@/assets/icons/tech/git.svg";
import iconCloudflare from "@/assets/icons/tech/cloudflare.svg";
import iconVercel from "@/assets/icons/tech/vercel.svg";

// Networking & Cyber Security
import iconLinux from "@/assets/icons/tech/linux.svg";
import iconKali from "@/assets/icons/tech/kali.svg";
import iconNmap from "@/assets/icons/tech/nmap.svg";
import iconWireshark from "@/assets/icons/tech/wireshark.svg";
import iconCisco from "@/assets/icons/tech/cisco.svg";
import iconGhidra from "@/assets/icons/tech/ghidra.svg"; 
import iconBurp from "@/assets/icons/tech/burpsuite.svg";
import iconSpiderfoot from "@/assets/icons/tech/spiderfoot.png"; 

// Game Dev & Design
import iconUnity from "@/assets/icons/tech/unity.svg";
import iconFigma from "@/assets/icons/tech/figma.svg";
import iconProcreate from "@/assets/icons/tech/procreate.png";

type P = ImgHTMLAttributes<HTMLImageElement>;
const base = "block";

function Icon({
  src,
  alt,
  className,
  ...props
}: P & { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${base} ${className ?? ""}`}
      draggable={false}
      loading="eager"
      {...props}
    />
  );
}

export const IconFinder = (props: P) => <Icon src={finder} alt="Finder" {...props} />;
export const IconFolder = (props: P) => <Icon src={projects} alt="Projects" {...props} />;
export const IconStack = (props: P) => <Icon src={techStack} alt="Tech Stack" {...props} />;
export const IconMap = (props: P) => <Icon src={experience} alt="Experience" {...props} />;
export const IconNote = (props: P) => <Icon src={aboutMe} alt="About Me" {...props} />;
export const IconMail = (props: P) => <Icon src={contact} alt="Contact" {...props} />;
export const IconDoc = (props: P) => <Icon src={blog} alt="Blog" {...props} />;
export const IconHeart = (props: P) => <Icon src={interest} alt="Interest" {...props} />;
export const IconPDF = (props: P) => <Icon src={resume} alt="Resume" {...props} />;

export const IconAppleMusic = (props: P) => <Icon src={appleMusic} alt="Apple Music" {...props} className="w-12 h-12 object-cover rounded-gl"/>;
export const IconGoodreads = (props: P) => <Icon src={goodreads} alt="Goodreads" {...props} className="w-12 h-12 rounded object-cover" />;
export const IconMedium = (props: P) => <Icon src={medium} alt="Medium" {...props} className="w-8 h-8 rounded object-cover" />;
export const IconGithub = (props: P) => <Icon src={github} alt="Github" {...props} className="w-8 h-8 rounded object-cover" />;
export const IconLinkedin = (props: P) => <Icon src={linkedin} alt="Linkedin" {...props} className="w-8 h-8 rounded object-cover" />;

const techClass = "w-4 h-4 object-contain select-none";

export const IconC = (props: P) => <Icon src={iconC} alt="C" className={techClass} {...props} />;
export const IconCpp = (props: P) => <Icon src={iconCpp} alt="C++" className={techClass} {...props} />;
export const IconCsharp = (props: P) => <Icon src={iconCsharp} alt="C#" className={techClass} {...props} />;
export const IconJava = (props: P) => <Icon src={iconJava} alt="Java" className={techClass} {...props} />;
export const IconPython = (props: P) => <Icon src={iconPython} alt="Python" className={techClass} {...props} />;
export const IconJavaScript = (props: P) => <Icon src={iconJavaScript} alt="JavaScript" className={techClass} {...props} />;

export const IconHtml5 = (props: P) => <Icon src={iconHtml5} alt="HTML5" className={techClass} {...props} />;
export const IconCss3 = (props: P) => <Icon src={iconCss3} alt="CSS3" className={techClass} {...props} />;
export const IconReact = (props: P) => <Icon src={iconReact} alt="React" className={techClass} {...props} />;
export const IconNextjs = (props: P) => <Icon src={iconNextjs} alt="Next.js" className={techClass} {...props} />;
export const IconNodejs = (props: P) => <Icon src={iconNodejs} alt="Node.js" className={techClass} {...props} />;
export const IconVite = (props: P) => <Icon src={iconVite} alt="Vite" className={techClass} {...props} />;
export const IconExpress = (props: P) => <Icon src={iconExpress} alt="Express.js" className={techClass} {...props} />;
export const IconDjango = (props: P) => <Icon src={iconDjango} alt="Django" className={techClass} {...props} />;
export const IconFlask = (props: P) => <Icon src={iconFlask} alt="Flask" className={techClass} {...props} />;

export const IconMysql = (props: P) => <Icon src={iconMysql} alt="MySQL" className={techClass} {...props} />;
export const IconMariadb = (props: P) => <Icon src={iconMariadb} alt="MariaDB" className={techClass} {...props} />;
export const IconPostgresql = (props: P) => <Icon src={iconPostgresql} alt="PostgreSQL" className={techClass} {...props} />;
export const IconSqlite = (props: P) => <Icon src={iconSqlite} alt="SQLite" className={techClass} {...props} />;

export const IconNumpy = (props: P) => <Icon src={iconNumpy} alt="NumPy" className={techClass} {...props} />;
export const IconPandas = (props: P) => <Icon src={iconPandas} alt="Pandas" className={techClass} {...props} />;
export const IconMatplotlib = (props: P) => <Icon src={iconMatplotlib} alt="Matplotlib" className={techClass} {...props} />;
export const IconScipy = (props: P) => <Icon src={iconScipy} alt="SciPy" className={techClass} {...props} />;

export const IconOpencv = (props: P) => <Icon src={iconOpencv} alt="OpenCV" className={techClass} {...props} />;
export const IconArduino = (props: P) => <Icon src={iconArduino} alt="Arduino" className={techClass} {...props} />;
export const IconNodered = (props: P) => <Icon src={iconNodered} alt="Node-RED" className={techClass} {...props} />;
export const IconMosquitto = (props: P) => <Icon src={iconMosquitto} alt="Mosquitto" className={techClass} {...props} />;

export const IconDocker = (props: P) => <Icon src={iconDocker} alt="Docker" className={techClass} {...props} />;
export const IconNginx = (props: P) => <Icon src={iconNginx} alt="Nginx" className={techClass} {...props} />;
export const IconGit = (props: P) => <Icon src={iconGit} alt="Git" className={techClass} {...props} />;
export const IconCloudflare = (props: P) => <Icon src={iconCloudflare} alt="Cloudflare" className={techClass} {...props} />;
export const IconVercel = (props: P) => <Icon src={iconVercel} alt="Vercel" className={techClass} {...props} />;
export const IconGithubTech = (props: P) => <Icon src={github} alt="GitHub" className={techClass} {...props} />;

export const IconLinux = (props: P) => <Icon src={iconLinux} alt="Linux" className={techClass} {...props} />;
export const IconKali = (props: P) => <Icon src={iconKali} alt="Kali Linux" className={techClass} {...props} />;
export const IconNmap = (props: P) => <Icon src={iconNmap} alt="Nmap" className={techClass} {...props} />;
export const IconWireshark = (props: P) => <Icon src={iconWireshark} alt="Wireshark" className={techClass} {...props} />;
export const IconCisco = (props: P) => <Icon src={iconCisco} alt="Cisco Packet Tracer" className={techClass} {...props} />;
export const IconGhidra = (props: P) => <Icon src={iconGhidra} alt="Ghidra" className={techClass} {...props} />;
export const IconBurpSuite = (props: P) => <Icon src={iconBurp} alt="Burp Suite" className={techClass} {...props} />;
export const IconSpiderFoot = (props: P) => <Icon src={iconSpiderfoot} alt="SpiderFoot" className={techClass} {...props} />;

export const IconUnity = (props: P) => <Icon src={iconUnity} alt="Unity" className={techClass} {...props} />;
export const IconFigma = (props: P) => <Icon src={iconFigma} alt="Figma" className={techClass} {...props} />;
export const IconProcreate = (props: P) => <Icon src={iconProcreate} alt="Procreate" className={techClass} {...props} />;

export const iconMap = {
  "C": IconC,
  "C++": IconCpp,
  "C#": IconCsharp,
  "Java": IconJava,
  "Python": IconPython,
  "JavaScript": IconJavaScript,
  "HTML5": IconHtml5,
  "CSS3": IconCss3,
  "React": IconReact,
  "Next.js": IconNextjs,
  "Node.js": IconNodejs,
  "Vite": IconVite,
  "Express.js": IconExpress,
  "Django": IconDjango,
  "Flask": IconFlask,
  "MySQL": IconMysql,
  "MariaDB": IconMariadb,
  "PostgreSQL": IconPostgresql,
  "SQLite": IconSqlite,
  "NumPy": IconNumpy,
  "Pandas": IconPandas,
  "Matplotlib": IconMatplotlib,
  "SciPy": IconScipy,
  "OpenCV": IconOpencv,
  "Arduino": IconArduino,
  "Node-RED": IconNodered,
  "Mosquitto": IconMosquitto,
  "Docker": IconDocker,
  "Nginx": IconNginx,
  "Git": IconGit,
  "GitHub": IconGithubTech, 
  "Cloudflare": IconCloudflare,
  "Vercel": IconVercel,
  "Linux": IconLinux,
  "Kali Linux": IconKali,
  "Nmap": IconNmap,
  "Wireshark": IconWireshark,
  "Cisco Packet Tracer": IconCisco,
  "Ghidra": IconGhidra,
  "Burp Suite": IconBurpSuite,
  "SpiderFoot": IconSpiderFoot,
  "Unity": IconUnity,
  "Figma": IconFigma,
  "Procreate": IconProcreate,
};

export function TechTagIcon({ name, ...props }: P & { name: string }) {
  const TargetIcon = (iconMap as Record<string, any>)[name];
  
  if (!TargetIcon) {
    return <span className="w-2 h-2 rounded-full bg-foreground/40 block" aria-hidden />;
  }

  return <TargetIcon {...props} />;
}