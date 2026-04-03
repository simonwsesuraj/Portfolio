import { useEffect } from 'react';
import { personSchema, organizationSchema } from '../data/structuredData';

export default function SEOHelmet() {
  useEffect(() => {
    // Add Person Schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.innerHTML = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.innerHTML = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    return () => {
      document.head.removeChild(personScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return null;
}
