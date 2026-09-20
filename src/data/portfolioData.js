import { resolveAsset } from "../utils/imageResolver";

export const personalInfo = {
  name: "Simon Sesuraj",
  titles: [
    "Full Stack Developer",
    "Oracle Database Administrator (DBA)",
    "AI & Machine Learning Developer"
  ],
  headline: "Computer Science Postgraduate | Full Stack | Oracle DBA | AI & ML",
  bio: "Computer Science postgraduate student building practical solutions across full-stack web development, Oracle database administration, and artificial intelligence and machine learning using Python and modern development tools.",
  shortBio:  "Building full-stack applications, working with Oracle database administration, and developing practical AI and machine learning solutions.",
  location: "Trichy, Tamil Nadu, India",
  email: "simonwsesuraj@gmail.com",
  phone: "+91 9597964813",
  whatsappNumber: "919597964813",
  whatsappMessage: "Hello Simon, I came across your portfolio and would like to connect regarding an opportunity.",
  statusBadge: "Open to Full-Time Opportunities",
  avatar: resolveAsset("hero.png", "/hero.png"),
  resumePdf: resolveAsset("resume.pdf", "/resume.pdf"),
  socials: {
    github: "https://github.com/simonwsesuraj",
    linkedin: "https://www.linkedin.com/in/simonwsesuraj",
    instagram: "https://www.instagram.com/p/DK7ppqABxT3/?igsh=MWlkbXQxYmJmZmJlaw%3D%3D",
    mailTo: "mailto:simonwsesuraj@gmail.com",
    gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=simonwsesuraj@gmail.com&su=Career%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Simon,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20with%20you."
  },
  stats: [
    { label: "Academic CGPA (M.Sc)", value: "8.64" },
    { label: "Core Focus Tracks", value: "3 (Full Stack, DBA, AI)" },
    { label: "Projects Completed", value: "8+" },
    { label: "Databases & Tools", value: "15+" }
  ]
};

export const roleTracks = [
  {
    id: "all",
    label: "All Expertise",
    icon: "FaLayerGroup",
    description: "Holistic view across Web, Database, and Artificial Intelligence"
  },
  {
    id: "fullstack",
    label: "Full Stack Developer",
    icon: "FaCode",
    description: "Modern web apps with React, Django, REST APIs, and responsive architectures"
  },
  {
    id: "dba",
    label: "Oracle DBA",
    icon: "FaDatabase",
    description: "Oracle Database administration, SQL, indexing, backup and recovery, and performance tuning"
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: "FaBrain",
    description: "Predictive modeling, FastAPI backend microservices, Scikit-learn, and data pipelines"
  }
];






export const skillsData = {
  fullstack: [
    { name: "React.js", level: 90, icon: "FaReact", desc: "Component architecture, hooks, state, context" },
    { name: "Django & Python", level: 85, icon: "FaPython", desc: "ORM, REST framework, authentication, middleware" },
    { name: "JavaScript (ES6+)", level: 90, icon: "FaJs", desc: "Async/await, closures, functional patterns, DOM" },
    { name: "Bootstrap 5 & CSS3", level: 88, icon: "FaBootstrap", desc: "Responsive grids, flexbox, glassmorphism, animations" },
    { name: "RESTful API Design", level: 85, icon: "FaNetworkWired", desc: "CRUD contracts, JSON serialization, HTTP status codes" },
    { name: "HTML5 & Accessibility", level: 92, icon: "FaHtml5", desc: "Semantic structure, SEO tags, ARIA attributes" }
  ],
  dba: [
    { name: "Oracle Database 19c/21c", level: 85, icon: "FaDatabase", desc: "Architecture, tablespaces, memory structures, multitenancy" },
    { name: "SQL & Advanced Queries", level: 92, icon: "FaDatabase", desc: "Complex joins, analytical functions, CTEs, subqueries" },
    { name: "Performance Tuning", level: 80, icon: "FaTachometerAlt", desc: "Explain Plan, SQL Trace, Cost-Based Optimizer, indexing" },
    { name: "Schema & Relational Design", level: 88, icon: "FaProjectDiagram", desc: "Normalization (1NF-3NF/BCNF), ER diagrams, constraints" },
    { name: "Backup & Recovery (RMAN)", level: 78, icon: "FaServer", desc: "Disaster recovery basics, export/import (Data Pump), archivelog" }
  ],
  ai: [
    { name: "Python for AI/ML", level: 95, icon: "FaPython", desc: "Data structures, algorithms, functional programming, OOP" },
    { name: "FastAPI", level: 85, icon: "FaBolt", desc: "REST APIs for serving machine learning models" },
    { name: "Scikit-learn", level: 80, icon: "FaBrain", desc: "Regression, classification, cross-validation, pipelines" },
    { name: "Pandas & NumPy", level: 90, icon: "FaChartBar", desc: "Data wrangling, matrix manipulation, missing value imputation" },
    { name: "Data Visualization", level: 85, icon: "FaChartLine", desc: "Matplotlib & Seaborn exploratory data analysis" },
    { name: "Model Deployment", level: 78, icon: "FaCloudUploadAlt", desc: "Model serialization (Joblib/Pickle) and REST serving" }
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "FaGithub", desc: "Branching workflows, pull requests, version control" },
    { name: "Linux / Bash", level: 82, icon: "FaTerminal", desc: "Shell scripting, process management, file permissions" },
    { name: "Vercel & Render", level: 88, icon: "FaCloud", desc: "CI/CD automated deployment, environment variables" },
    { name: "Postman", level: 85, icon: "FaTools", desc: "API testing, collections, environment management" },
    { name: "VS Code & Tooling", level: 92, icon: "FaLaptopCode", desc: "Vite, ESLint, npm package management, debugging" }
  ]
};

export const education = [
  {
    degree: "Master of Science in Computer Science (M.Sc)",
    institution: "St. Joseph's College (Autonomous), Trichy",
    duration: "2025 - 2027",
    score: "CGPA : 8.64",
    highlights: "Specialization in Advanced Database Systems, Machine Learning Architectures, and Full-Stack Web Development."
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc)",
    institution: "St. Joseph's College (Autonomous), Trichy",
    duration: "2022 - 2025",
    score: "CGPA : 7.14",
    highlights: "Core fundamentals: Data Structures, RDBMS & SQL, Object-Oriented Programming (Java/Python), Software Engineering."
  }
];

export const recruiterHighlights = [
  {
    title: "3 Core Pillars",
    subtitle: "Full Stack + Oracle DBA + AI",
    description:
  "A cross-disciplinary profile covering responsive web development, Oracle database administration, and practical machine learning solutions."
  },
  {
    title: "Strong Academic Record",
    subtitle: "M.Sc CGPA 8.64",
    description: "Strong theoretical foundation matched with hands-on practical project deployment experience."
  },
  {
  title: "End-to-End Development",
  subtitle: "FastAPI, React, Django",
  description: "Experience building and deploying full-stack applications using React, Django, FastAPI, and modern deployment platforms."
}
];
