import { useEffect } from 'react';
import { personSchema, websiteSchema } from '../data/structuredData';

export default function SEOHelmet() {
  useEffect(() => {
    // Add Person Schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.id = 'person-schema';
    personScript.innerHTML = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add WebSite Schema
    const siteScript = document.createElement('script');
    siteScript.type = 'application/ld+json';
    siteScript.id = 'website-schema';
    siteScript.innerHTML = JSON.stringify(websiteSchema);
    document.head.appendChild(siteScript);

    return () => {
      const p = document.getElementById('person-schema');
      if (p) document.head.removeChild(p);
      const s = document.getElementById('website-schema');
      if (s) document.head.removeChild(s);
    };
  }, []);

  return null;
}
