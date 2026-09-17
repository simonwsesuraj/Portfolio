import { resolveAsset } from "../utils/imageResolver";

export const personalInfo = {
  name: "Simon Sesuraj",
  titles: [
    "Full Stack Developer",
    "Oracle Database Administrator (DBA)",
    "AI & Machine Learning Engineer"
  ],
  headline: "Full Stack Developer | Oracle DBA | AI & Machine Learning Enthusiast",
  bio: "Passionate technologist with dual expertise in high-performance Web Engineering (React, Django), Enterprise Database Administration (Oracle SQL, Performance Tuning), and Applied Artificial Intelligence (FastAPI, Scikit-learn). Dedicated to engineering scalable, secure, data-driven systems that solve complex real-world problems.",
  shortBio: "Building high-performance full-stack applications, resilient Oracle database architectures, and intelligent AI models.",
  location: "Trichy, Tamil Nadu, India",
  email: "simonwsesuraj@gmail.com",
  phone: "+91 9597964813",
  whatsappNumber: "919597964813",
  whatsappMessage: "Hello Simon, I came across your portfolio and would like to connect regarding an opportunity.",
  statusBadge: "Open to Full-Time Roles & High-Impact Opportunities",
  avatar: resolveAsset("hero.jpeg", "/hero.jpeg"),
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
    description: "Enterprise Oracle Database management, SQL, indexing,Backup & Recovery and performance tuning"
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: "FaBrain",
    description: "Predictive modeling, FastAPI backend microservices, Scikit-learn, and data pipelines"
  }
];

// Pure data without tedious manual top-level imports!
// image field can be a filename in assets, a URL, or omitted for auto-placeholder
export const rawProjects = [
  {
    id: 1,
    title: "Employee Salary Prediction Web App",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    description: "End-to-end Machine Learning web application powered by Scikit-learn with a high-throughput FastAPI REST backend and responsive React frontend. Predicts salary benchmarks based on multi-variate features with sub-100ms inference time.",
    highlights: [
      "Machine learning pipeline with Scikit-learn & Pandas data preprocessing",
      "FastAPI asynchronous REST API with Swagger documentation",
      "Interactive modern React interface with dynamic form validation"
    ],
    image: "SalaryPrediction.png",
    github: "https://github.com/simonwsesuraj/SalaryPrediction-React-FastAPI-",
    live: "https://salary-prediction-react-fast-api.vercel.app/",
    tech: ["Scikit-learn", "FastAPI", "React", "Python", "Pandas", "REST API"]
  },
  {
    id: 2,
    title: "Oracle Database Architecture & Performance Tuning",
    category: "dba",
    categoryLabel: "Oracle Database Administration",
    featured: true,
    description: "Enterprise database architecture showcase featuring schema modeling, PL/SQL stored procedures, triggers, complex query optimization, index tuning, and RMAN automated backup strategies on Oracle 19c/21c.",
    highlights: [
      "Execution plan analysis, cost-based optimizer (CBO) tuning, and B-Tree index optimization",
      "Robust PL/SQL package development with exception handling and transactional ACID compliance",
      "Data dictionary monitoring, tablespace management, and automated backup scripting"
    ],
    image: "", // Auto-placeholder generated via resolveAsset
    github: "https://github.com/simonwsesuraj",
    live: "https://github.com/simonwsesuraj",
    tech: ["Oracle Database", "SQL", "PL/SQL", "Performance Tuning", "Explain Plan", "Data Modeling"]
  },
  {
    id: 3,
    title: "Weather Intelligence Platform",
    category: "fullstack",
    categoryLabel: "Full Stack Engineering",
    featured: true,
    description: "Full-stack weather forecasting system engineered with Django and React. Implements live OpenWeather API consumption, server-side caching, dynamic meteorological charts, and responsive UI.",
    highlights: [
      "Django backend API proxy with request throttling and error resilience",
      "Real-time meteorological metric visualization and location search",
      "Fully responsive mobile-first UI with dark mode support"
    ],
    image: "WeatherApp.png",
    github: "https://github.com/simonwsesuraj/WeatherApp-Django-",
    live: "https://weatherapp-django-6mwq.onrender.com/",
    tech: ["Django", "React", "Python", "Bootstrap", "Weather API", "REST"]
  },
  {
    id: 4,
    title: "Modern React Portfolio & Recruiter Hub",
    category: "fullstack",
    categoryLabel: "Full Stack Engineering",
    featured: true,
    description: "High-performance developer portfolio featuring zero-import dynamic asset resolution, multi-track recruiter filtering (Full Stack, Oracle DBA, AI), Schema.org JSON-LD structured data, and sub-second rendering.",
    highlights: [
      "Zero-import dynamic asset resolver leveraging Vite's glob loader",
      "Comprehensive Schema.org SEO for technical recruitment bots and Google Search",
      "Interactive role-switchers and 1-click recruiter quick actions"
    ],
    image: "PortfolioWebsite.png",
    github: "https://github.com/simonwsesuraj/Portfolio",
    live: "https://portfolio-kohl-mu-26.vercel.app/",
    tech: ["React 19", "Vite", "Vanilla CSS", "SEO / JSON-LD", "Bootstrap"]
  },
  {
    id: 5,
    title: "MealDB Recipe & Nutritional Explorer",
    category: "fullstack",
    categoryLabel: "Frontend & API Integration",
    featured: false,
    description: "Comprehensive culinary discovery platform integrating TheMealDB API. Features client-side live search, category browsing, ingredient metrics, and persistent user bookmarking via LocalStorage.",
    highlights: [
      "Fast client-side debounced search and dynamic category filtering",
      "Detailed recipe views with YouTube video embed integration",
      "Mobile-optimized grid layout with smooth hover micro-animations"
    ],
    image: "MealDB.png",
    github: "https://github.com/simonwsesuraj/MealDB",
    live: "https://meal-db-delta.vercel.app/search?q=Chicken",
    tech: ["React", "JavaScript", "TailwindCSS", "REST API", "LocalStorage"]
  },
  {
    id: 6,
    title: "Student Academic Information Portal",
    category: "fullstack",
    categoryLabel: "Frontend Architecture",
    featured: false,
    description: "Enterprise form management application engineered with React hooks, controlled state pipelines, custom field validators, and normalized data output ready for relational database persistence.",
    highlights: [
      "Complex multi-input validation schemas with real-time feedback",
      "Accessible form controls and keyboard navigation support",
      "Clean separation of state and reusable form components"
    ],
    image: "StudentForm.png",
    github: "https://github.com/simonwsesuraj/StudentForm-React-",
    live: "https://student-form-react-ivory.vercel.app/",
    tech: ["React", "JavaScript", "CSS3", "State Management", "Formik/Validation"]
  },
  {
    id: 7,
    title: "High-Precision New Year Countdown",
    category: "fullstack",
    categoryLabel: "Core Web Technologies",
    featured: false,
    description: "High-precision countdown utility utilizing vanilla JavaScript intervals, DOM performance optimizations, and responsive CSS keyframe visual transitions for seamless real-time timekeeping.",
    highlights: [
      "Zero-dependency vanilla JavaScript implementation",
      "Drift-free interval timing algorithm",
      "Fluid responsive layout for all device dimensions"
    ],
    image: "NewyearCountdown.png",
    github: "https://github.com/simonwsesuraj/NewYearCoutdownTimer",
    live: "https://simonwsesuraj.github.io/NewYearCoutdownTimer/",
    tech: ["JavaScript", "HTML5", "CSS3", "Animations"]
  }
];

// Helper that automatically attaches resolved asset URLs to each project
export const projects = rawProjects.map((p) => ({
  ...p,
  image: resolveAsset(p.image, getDefaultProjectImage(p.title, p.category))
}));

function getDefaultProjectImage(title, category) {
  const categoryLabels = {
    fullstack: "Full Stack Project",
    dba: "Oracle DBA System",
    ai: "AI & ML Model"
  };
  return resolveAsset(null, encodeURIComponent(title || categoryLabels[category] || "Project"));
}

// Pure data for certifications without tedious manual imports!
export const rawCertifications = [
  {
    id: "cert-python-os",
    title: "Using Python to Interact with the Operating System",
    issuer: "Coursera (Google Professional Program)",
    year: "2023",
    category: "ai",
    categoryLabel: "Automation & Python",
    link: "https://coursera.org/share/6845ad9cdc0753a8f00b70f8e13cb6d5",
    image: "Using Python to Intract with the Operating System.jpg",
    credentialId: "6845ad9cdc0753a8f00b70f8e13cb6d5",
    skills: ["Python", "OS Automation", "Regex", "Bash & Subprocesses", "Testing"]
  },
  {
    id: "cert-oracle-sql",
    title: "Oracle Database SQL & Relational Architecture",
    issuer: "Oracle Academic Curriculum / Advanced Training",
    year: "2024",
    category: "dba",
    categoryLabel: "Oracle Database",
    link: "https://github.com/simonwsesuraj",
    image: "", // Automatically uses fallback preview
    credentialId: "ORCL-SQL-ADMIN-2024",
    skills: ["SQL", "PL/SQL", "Data Modeling", "Constraints", "Transactions", "Indexes"]
  },
  {
    id: "cert-fullstack-dev",
    title: "Full Stack Web Development (React & Django Ecosystem)",
    issuer: "Self-Directed & Academic Specialization",
    year: "2024",
    category: "fullstack",
    categoryLabel: "Web Development",
    link: "https://github.com/simonwsesuraj",
    image: "",
    credentialId: "FS-DEV-REACT-DJANGO",
    skills: ["React.js", "Django", "REST APIs", "State Management", "Bootstrap"]
  }
];

export const certifications = rawCertifications.map((c) => ({
  ...c,
  image: resolveAsset(c.image)
}));

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
    { name: "FastAPI", level: 85, icon: "FaBolt", desc: "High-performance asynchronous inference microservices" },
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
    description: "Versatile engineer capable of building responsive UIs, optimizing enterprise relational data, and serving ML models."
  },
  {
    title: "Strong Academic Record",
    subtitle: "M.Sc CGPA 8.64",
    description: "Strong theoretical foundation matched with hands-on practical project deployment experience."
  },
  {
    title: "Production Ready",
    subtitle: "FastAPI, React, Django",
    description: "Experience with end-to-end applications deployed live on Vercel and Render with verified performance."
  }
];
