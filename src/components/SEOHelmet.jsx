import { useEffect } from "react";

import {
  personSchema,
  profilePageSchema,
  websiteSchema,
  projectsSchema,
  breadcrumbSchema
} from "../data/structuredData";

export default function SEOHelmet() {
  useEffect(() => {
    const schemas = [
      {
        id: "person-schema",
        data: personSchema
      },
      {
        id: "profilepage-schema",
        data: profilePageSchema
      },
      {
        id: "website-schema",
        data: websiteSchema
      },
      {
        id: "projects-schema",
        data: projectsSchema
      },
      {
        id: "breadcrumb-schema",
        data: breadcrumbSchema
      }
    ];

    schemas.forEach(({ id, data }) => {
      // Prevent duplicate schema scripts
      const existingScript = document.getElementById(id);

      if (existingScript) {
        existingScript.remove();
      }

      // Create JSON-LD script
      const script = document.createElement("script");

      script.id = id;
      script.type = "application/ld+json";

      // Add structured data
      script.textContent = JSON.stringify(data);

      // Add to <head>
      document.head.appendChild(script);
    });

    // Cleanup when component unmounts
    return () => {
      schemas.forEach(({ id }) => {
        const script = document.getElementById(id);

        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}