import NewYearCountdown from "../assets/projects/NewyearCountdown.png";
import PortfolioWesite from "../assets/projects/PortfolioWebsite.png";
import WeatherApp from "../assets/projects/WeatherApp.png";
import StudentForm from "../assets/projects/StudentForm.png";
import SalaryPrediction from "../assets/projects/SalaryPrediction.png";

export const projects = [
  {
    id: 1,
    title: "New Year Countdown",
    description: "This project is a simple New Year Countdown Clock built using HTML, CSS, and JavaScript. The application displays the remaining time until the upcoming New Year in days, hours, minutes, and seconds. The countdown updates automatically every second using JavaScript. ",
    image: NewYearCountdown,
    github: "https://github.com/simonwsesuraj/NewYearCoutdownTimer",
    live: "https://simonwsesuraj.github.io/NewYearCoutdownTimer/",
    tech: ["Html","Css","JavaScript"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website built using React. It showcases my projects, skills, and experience in a visually appealing and responsive design. The website includes sections for an about me, project gallery, and contact information.",
    image: PortfolioWesite,
    github: "https://github.com/simonwsesuraj/Portfolio",
    live : "https://portfolio-kohl-mu-26.vercel.app/",
    tech: ["React","Css","Bootstrap"],
  },

  {
    id: 3,
    title: "Weather App",
    description: "A simple Weather App built with Django that shows real-time weather data for any city. Users can view temperature, humidity, pressure, and conditions through a clean, responsive UI. Great for learning API integration and dynamic web development. ",
    image: WeatherApp,
    github: "https://github.com/simonwsesuraj/WeatherApp-Django-",
    live : "https://weatherapp-django-6mwq.onrender.com/",
    tech: ["Django","Css","Bootstrap"],
  },
  {
    id: 4,
    title: "Student Form",
    description: "A modern React form application built using functional components and hooks. It includes controlled inputs, form validation, and dynamic state handling to efficiently manage user data submission.  ",
    image: StudentForm,
    github: "https://github.com/simonwsesuraj/StudentForm-React-",
    live : "https://student-form-react-ivory.vercel.app/",
    tech: ["React","CSS"],
  },
  {
    id: 5,
    title: "Salary Prediction",
    description: "Employee Salary Prediction Web App built using Machine Learning with FastAPI backend and React frontend. The model predicts salary based on age, gender, education level, job title, and experience. Includes dynamic dropdowns, REST API integration, and interactive UI for real-time predictions.  ",
    image: SalaryPrediction,
    github: "https://github.com/simonwsesuraj/SalaryPrediction-React-FastAPI-",
    live : "https://salary-prediction-react-fast-api.vercel.app/",
    tech: ["Python","Scikit-learn","FastAPI","React"],
  },
];