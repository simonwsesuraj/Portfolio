const SITE_URL = "https://simonwsesuraj.vercel.app/";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,

  "name": "Simon Sesuraj",
  "alternateName": "Simon W Sesuraj",

  "url": SITE_URL,
  "image": `${SITE_URL}/hero.png`,

  "jobTitle": "Computer Science Graduate",

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
    "https://github.com/simonwsesuraj"
  ],

  "knowsAbout": [
    "Python",
    "JavaScript",
    "React.js",
    "Django",
    "FastAPI",
    "RESTful APIs",
    "Full Stack Web Development",
    "Oracle Database",
    "Oracle Database Administration",
    "Oracle Database 19c",
    "Oracle Database 21c",
    "SQL",
    "PL/SQL",
    "Database Performance Tuning",
    "Explain Plans",
    "Machine Learning",
    "Deep Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Bootstrap 5",
    "Git",
    "GitHub"
  ]
};


export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  "name": "Simon Sesuraj Portfolio",

  "url": SITE_URL,

  "description":
    "Portfolio of Simon Sesuraj showcasing Full Stack Web Development, Oracle Database Administration, Artificial Intelligence, Machine Learning, and Python projects.",

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

  "name": "Simon Sesuraj Projects",

  "description":
    "Selected software development, full stack, database, and machine learning projects developed by Simon Sesuraj.",

  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,

      "item": {
        "@type": "SoftwareApplication",
        "name": "Campus Navigation System",

        "applicationCategory": "WebApplication",
        "operatingSystem": "Web",

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
        "@type": "SoftwareApplication",
        "name": "Book Management System",

        "applicationCategory": "WebApplication",
        "operatingSystem": "Web",

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
        "@type": "SoftwareApplication",
        "name": "Stock Price Prediction",

        "applicationCategory": "WebApplication",
        "operatingSystem": "Web",

        "description":
          "A machine learning based stock analysis and prediction application using Python and financial data.",

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
      "name": "Home",
      "item": SITE_URL
    }
  ]
};