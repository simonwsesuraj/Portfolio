import NewYearCountdown from "../assets/projects/NewyearCountdown.png";
import PortfolioWesite from "../assets/projects/PortfolioWebsite.png";
import WeatherApp from "../assets/projects/WeatherApp.png";
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
    live : "https://weatherapp-django-6mwq.onrender.com//",
    tech: ["Django","Css","Bootstrap"],
  },
];