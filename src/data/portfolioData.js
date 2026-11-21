
import { resolveAsset } from "../utils/imageResolver";

// ============================================
// 1. PERSONAL INFORMATION
// ============================================

export const personalInfo = {
  name: "Simon Sesuraj",

  titles: [
    "Full Stack Developer",
    "Oracle Database Administrator (DBA)",
    "Python & Machine Learning Developer"
  ],

  headline:
    "Simon Sesuraj | Full Stack Developer · Oracle DBA · AI & ML",

  bio:
    "Computer Science postgraduate with an interest in Full Stack Development, Oracle Database Administration, and Artificial Intelligence. Building web applications using React, Django, and Python, while developing practical experience in Oracle databases and machine learning.",

  shortBio:
    "Full Stack Developer | Oracle DBA | Python & Machine Learning Enthusiast",

  location: "Trichy, Tamil Nadu, India",

  email: "simonwsesuraj@gmail.com",

  phone: "+91 9597964813",

  whatsappNumber: "919597964813",

  whatsappMessage:
    "Hello Simon, I came across your portfolio and would like to connect regarding an opportunity.",

  statusBadge: "Open to Full-Time Opportunities",

  avatar: resolveAsset("hero.png", "/hero.png"),

  resumePdf: resolveAsset("resume.pdf", "/resume.pdf"),

  socials: {
    github: "https://github.com/simonwsesuraj",

    linkedin: "https://www.linkedin.com/in/simonwsesuraj",

    instagram:
      "https://www.instagram.com/p/DK7ppqABxT3/?igsh=MWlkbXQxYmJmZmJlaw%3D%3D",

    mailTo: "mailto:simonwsesuraj@gmail.com",

    gmailCompose:
      "https://mail.google.com/mail/?view=cm&fs=1&to=simonwsesuraj@gmail.com&su=Career%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Simon,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20with%20you."
  },

  stats: [
    {
      label: "Current M.Sc CGPA",
      value: "8.64"
    },
    {
      label: "Technical Focus Areas",
      value: "3"
    },
    {
      label: "Projects Completed",
      value: "8+"
    },
    {
      label: "Technologies & Tools",
      value: "15+"
    }
  ]
};


// ============================================
// 2. ROLE TRACKS
// ============================================

export const roleTracks = [
  {
    id: "all",
    label: "All Expertise",
    icon: "FaLayerGroup",
    description:
      "Explore my skills and experience across Full Stack Development, Oracle DBA, and AI/ML."
  },
  {
    id: "fullstack",
    label: "Full Stack Developer",
    icon: "FaCode",
    description:
      "Building responsive web applications using React, Django, Python, and REST APIs."
  },
  {
    id: "dba",
    label: "Oracle DBA",
    icon: "FaDatabase",
    description:
      "Working with Oracle Database administration, SQL, database architecture, backup, and recovery."
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: "FaBrain",
    description:
      "Exploring machine learning, data processing, predictive modeling, and Python-based applications."
  }
];


// ============================================
// 3. TECHNICAL SKILLS
// ============================================

export const skillsData = {

  // ------------------------------------------
  // FULL STACK DEVELOPMENT
  // ------------------------------------------

  fullstack: [
    {
      name: "React.js",
      icon: "FaReact",
      desc: "Components, Hooks, Props, State Management, and React application development."
    },
    {
      name: "Python & Django",
      icon: "FaPython",
      desc: "Django applications, ORM, authentication, models, views, and backend development."
    },
    {
      name: "JavaScript (ES6+)",
      icon: "FaJs",
      desc: "Modern JavaScript, DOM manipulation, asynchronous programming, and ES6 features."
    },
    {
      name: "Bootstrap 5 & CSS3",
      icon: "FaBootstrap",
      desc: "Responsive layouts, Bootstrap components, Flexbox, Grid, and custom styling."
    },
    {
      name: "RESTful APIs",
      icon: "FaNetworkWired",
      desc: "API development, CRUD operations, JSON, HTTP methods, and API integration."
    },
    {
      name: "HTML5",
      icon: "FaHtml5",
      desc: "Semantic HTML, forms, page structure, and accessible web content."
    }
  ],


  // ------------------------------------------
  // ORACLE DATABASE ADMINISTRATION
  // ------------------------------------------

  dba: [
    {
      name: "Oracle Database 19c/21c",
      icon: "FaDatabase",
      desc: "Oracle architecture, database creation, tablespaces, users, and memory structures."
    },
    {
      name: "SQL & PL/SQL",
      icon: "FaDatabase",
      desc: "Joins, subqueries, functions, procedures, triggers, and database operations."
    },
    {
      name: "Database Administration",
      icon: "FaServer",
      desc: "User management, privileges, tablespaces, database configuration, and monitoring."
    },
    {
      name: "Database Performance Basics",
      icon: "FaTachometerAlt",
      desc: "Execution plans, indexing, SQL analysis, and basic performance troubleshooting."
    },
    {
      name: "Backup & Recovery",
      icon: "FaCloudUploadAlt",
      desc: "RMAN fundamentals, backup strategies, recovery concepts, and Data Pump."
    },
    {
      name: "Linux / Bash",
      icon: "FaTerminal",
      desc: "Linux commands, file permissions, process management, and Oracle environment setup."
    }
  ],


  // ------------------------------------------
  // ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
  // ------------------------------------------

  ai: [
    {
      name: "Python for AI/ML",
      icon: "FaPython",
      desc: "Python programming, object-oriented programming, and data processing."
    },
    {
      name: "FastAPI",
      icon: "FaBolt",
      desc: "Building Python REST APIs and integrating application logic."
    },
    {
      name: "Scikit-learn",
      icon: "FaBrain",
      desc: "Machine learning fundamentals, classification, regression, and model evaluation."
    },
    {
      name: "Pandas & NumPy",
      icon: "FaChartBar",
      desc: "Data manipulation, numerical operations, and dataset processing."
    },
    {
      name: "Data Visualization",
      icon: "FaChartLine",
      desc: "Exploratory data analysis and visualization using Matplotlib and Seaborn."
    },
    {
      name: "Machine Learning Model Deployment",
      icon: "FaCloudUploadAlt",
      desc: "Model serialization and exposing trained models through Python APIs."
    }
  ],


  // ------------------------------------------
  // DEVELOPMENT TOOLS
  // ------------------------------------------

  tools: [
    {
      name: "Git & GitHub",
      icon: "FaGithub",
      desc: "Version control, repositories, commits, branches, and project collaboration."
    },
    {
      name: "Linux",
      icon: "FaTerminal",
      desc: "Command-line operations, file management, permissions, and process handling."
    },
    {
      name: "Vercel & Render",
      icon: "FaCloud",
      desc: "Deploying frontend and backend applications."
    },
    {
      name: "Postman",
      icon: "FaTools",
      desc: "REST API testing, HTTP requests, and response validation."
    },
    {
      name: "VS Code",
      icon: "FaLaptopCode",
      desc: "Development environment, extensions, debugging, and project management."
    },
    {
      name: "PostgreSQL & MongoDB",
      icon: "FaDatabase",
      desc: "Working with relational and NoSQL databases."
    }
  ]
};


// ============================================
// 4. EDUCATION
// ============================================

export const education = [
  {
    degree: "Master of Science in Computer Science (M.Sc)",

    institution:
      "St. Joseph's College (Autonomous), Trichy",

    duration: "2025 - 2027",

    score: "Current CGPA: 8.64",

    highlights:
      "Postgraduate studies in Computer Science, covering advanced computing concepts, database systems, software development, and machine learning."
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc)",

    institution:
      "St. Joseph's College (Autonomous), Trichy",

    duration: "2022 - 2025",

    score: "CGPA: 7.14",

    highlights:
      "Studied programming, data structures, database management systems, object-oriented programming, and software engineering."
  }
];


// ============================================
// 5. RECRUITER HIGHLIGHTS
// ============================================

export const recruiterHighlights = [
  {
    title: "Three Technical Focus Areas",

    subtitle: "Full Stack · Oracle DBA · AI/ML",

    description:
      "A multidisciplinary Computer Science profile covering web application development, database administration, and practical machine learning."
  },
  {
    title: "Academic Background",

    subtitle: "M.Sc Computer Science · 2025–2027",

    description:
      "Postgraduate studies in Computer Science, supported by a Bachelor's degree in Computer Science."
  },
  {
    title: "Project-Based Experience",

    subtitle: "React · Django · Python · Oracle",

    description:
      "Hands-on experience developing web applications, working with relational databases, and exploring Python-based machine learning."
  }
];
