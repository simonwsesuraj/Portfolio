import { resolveAsset } from "../utils/imageResolver";
export const rawProjects = [
      {
    id: 1,
    title: "MealDB Recipe & Nutritional Explorer",
    category: "fullstack",
    categoryLabel: "Frontend & API Integration",
    featured: false,
    description: "Comprehensive culinary discovery platform integrating TheMealDB API. Features client-side live search, category browsing, ingredient metrics, and persistent user bookmarking via LocalStorage.",
    highlights: [
      "Browse meals by category","Search meals by name","View detailed meal information","Display ingredients and measurements","Add meals to favorites","Remove meals from favorites",
    ],
    image: "MealDB.png",
    github: "https://github.com/simonwsesuraj/MealDB",
    live: "https://meal-db-delta.vercel.app/",
    tech: ["React", "JavaScript", "TailwindCSS", "REST API", "LocalStorage"]
  },

    {
    id: 2,
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
    image: "Portfolio.png",
    github: "https://github.com/simonwsesuraj/Portfolio",
    live: "https://portfolio-kohl-mu-26.vercel.app/",
    tech: ["React 19", "Vite", "Vanilla CSS", "SEO / JSON-LD", "Bootstrap"]
  },
  {
    id: 3,
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
    id: 4,
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
    tech: ["Django", "React", "Python", "Bootstrap","Weather API" , "REST",]
  },

   {
    id: 5,
    title: "Book Management System",
    category: "fullstack",
    categoryLabel: "Full Stack Engineering",
    featured: true,
    description:"Full-stack book management system for my personal use. Any one can view my book collection but me only can change the information about the book details.",
    highlights: [
      "World leader's quotes",
      "View my book collextion",
      'Update the book detail by autoriced user'
    ],
    image: "Book Management System.png",
    github: "https://github.com/simonwsesuraj/BookManagementSystem",
    live: "https://book-management-system-simon.vercel.app/",
    tech: ["Django", "React", "Python", "Bootstrap", "REST"]
  },

  

];


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