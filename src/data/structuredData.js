const SITE_URL = "https://simonsesuraj.vercel.app";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,

  "name": "Simon Sesuraj",
  "alternateName": [
    "Simon Sesuraj W",
    "Simon W Sesuraj",
    "Simon Full Stack Developer",
    "Simon Sesuraj Full Stack Developer",
    "Simon W",
    "Simon Developer"
  ],

  "url": SITE_URL,
  "image": `${SITE_URL}/hero.png`,

  "jobTitle": "Full Stack Developer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Developer",
    "occupationalCategory": "15-1254.00",
    "skills": "React.js, Django, Python, JavaScript, Oracle Database Administration, SQL, PL/SQL, FastAPI, Machine Learning, Bootstrap"
  },

  "description": "Simon Sesuraj (also known as Simon Sesuraj W) is a Full Stack Developer, Oracle Database Administrator, and AI & Machine Learning Engineer based in Trichy, India. Experienced in building responsive web applications with React, backend systems with Django & FastAPI, and enterprise database administration with Oracle 19c/21c.",

  "email": "mailto:simonwsesuraj@gmail.com",
  "telephone": "+919597964813",

  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Trichy",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },

  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "St. Joseph's College (Autonomous), Trichy"
  },

  "sameAs": [
    "https://www.linkedin.com/in/simonwsesuraj",
    "https://github.com/simonwsesuraj",
    "https://www.instagram.com/p/DK7ppqABxT3/?igsh=MWlkbXQxYmJmZmJlaw%3D%3D"
  ],

  "knowsAbout": [
    "Full Stack Development",
    "Full Stack Developer",
    "Python",
    "JavaScript",
    "React.js",
    "Django",
    "FastAPI",
    "RESTful APIs",
    "Oracle Database",
    "Oracle Database Administration",
    "Oracle DBA",
    "Oracle Database 19c",
    "Oracle Database 21c",
    "SQL",
    "PL/SQL",
    "Database Performance Tuning",
    "RMAN Backup and Recovery",
    "Oracle Data Guard",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Bootstrap 5",
    "Git",
    "GitHub"
  ]
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  "url": `${SITE_URL}/`,
  "name": "Simon Sesuraj (Simon Sesuraj W) | Full Stack Developer Portfolio",
  "description": "Official developer portfolio and profiles for Simon Sesuraj (Simon Sesuraj W) - Full Stack Developer, Oracle DBA, and AI Engineer. Links to LinkedIn, GitHub repositories, and live projects.",
  "mainEntity": {
    "@id": `${SITE_URL}/#person`
  },
  "dateCreated": "2024-01-01T00:00:00+05:30",
  "dateModified": "2026-09-22T00:00:00+05:30"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  "name": "Simon Sesuraj Portfolio",
  "alternateName": [
    "Simon Sesuraj W Portfolio",
    "Simon Full Stack Developer Portfolio",
    "Simon Sesuraj Developer"
  ],

  "url": SITE_URL,

  "description":
    "Portfolio of Simon Sesuraj (Simon Sesuraj W) showcasing Full Stack Web Development (React, Django), Oracle Database Administration, Artificial Intelligence, and GitHub repositories.",

  "author": {
    "@id": `${SITE_URL}/#person`
  },

  "publisher": {
    "@id": `${SITE_URL}/#person`
  },

  "inLanguage": "en-IN"
};

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#projects`,

  "name": "Simon Sesuraj GitHub Projects & Case Studies",

  "description":
    "Production web applications, full stack systems, Oracle database architectures, and machine learning models developed by Simon Sesuraj (Simon Sesuraj W).",

  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,

      "item": {
        "@type": "SoftwareSourceCode",
        "name": "Campus Navigation System",
        "programmingLanguage": "JavaScript, Python",
        "codeRepository": "https://github.com/simonwsesuraj",
        "description":
          "A web-based campus navigation system built using React, Django, Leaflet, OpenStreetMap, and PostgreSQL.",
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    },

    {
      "@type": "ListItem",
      "position": 2,

      "item": {
        "@type": "SoftwareSourceCode",
        "name": "Book Management System",
        "programmingLanguage": "React, Python, Django",
        "codeRepository": "https://github.com/simonwsesuraj",
        "description":
          "A full stack book management application built using React, Django REST Framework, authentication, and database technologies.",
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    },

    {
      "@type": "ListItem",
      "position": 3,

      "item": {
        "@type": "SoftwareSourceCode",
        "name": "Stock Price Prediction",
        "programmingLanguage": "Python, Scikit-learn, FastAPI",
        "codeRepository": "https://github.com/simonwsesuraj",
        "description":
          "A machine learning based stock analysis and prediction application using Python, Pandas, and financial data.",
        "author": {
          "@id": `${SITE_URL}/#person`
        }
      }
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,

  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Simon Sesuraj (Full Stack Developer)",
      "item": SITE_URL
    }
  ]
};