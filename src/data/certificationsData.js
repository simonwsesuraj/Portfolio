
import { resolveAsset } from "../utils/imageResolver";
export const rawCertifications = [
  {
    id: "1",
    title: "Using Python to Interact with the Operating System",
    issuer: "Coursera (Google Professional Program)",
    year: "2023",
    category: "python",
    categoryLabel: "Automation & Python",
    link: "https://coursera.org/share/6845ad9cdc0753a8f00b70f8e13cb6d5",
    image: "Using Python to Intract with the Operating System.jpg",
    credentialId: "6845ad9cdc0753a8f00b70f8e13cb6d5",
    skills: ["Python", "OS Automation", "Regex"]
  },

 
   
   {
    id: "2",
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera (IBM)",
    year: "2023",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    link: "https://coursera.org/share/db03e700af125e5a521f844917efa321",
    image: "Introduction to Artificial Intelligence (AI).jpeg", 
    credentialId: "db03e700af125e5a521f844917efa321",
    skills: ["Machine Learning" , "Deep Learning", "Neural Networks"]
  },

  {
    id: "3",
    title: "Getting Started With AI using IBM watson",
    issuer: "Coursera (IBM)",
    year: "2023",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    link: "https://coursera.org/share/9eb49a4e1322c0edc378309f2638c296",
    image: "Getting Started With AI using IBM watson.png", 
    credentialId: "9eb49a4e1322c0edc378309f2638c296",
    skills: ["Machine Learning" , "Deep Learning", "Neural Networks"]
  },

  {
    id: "4",
    title: "Advanced Python: Classes and Functions",
    issuer: "Linkedin",
    year: "2023",
    category: "python",
    categoryLabel: "Python",
    link: "https://www.linkedin.com/learning/certificates/8d17c3f70696c9f9a35220e8ab8196de471b906c602d31bb99425c1546b57e9f",
    image: "Advanced PythonClasses and Functions.jpg", 
    skills: ["Python", "Functions","Classes"]
  },
   {
    id: "5",
    title: "Advance Your Skills in AI and Machine Learning",
    issuer: "Linkedin",
    year: "2024",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    link: "https://www.linkedin.com/learning/certificates/c4fe269973fc51f8e2fe102f019b682943a5fa5b9e2a999d1b766570a4cf2bea",
    image: "Advance Your Skills in AI and Machine Learning.jpg", 
    skills: ["Machine Learning" , "Deep Learning", "Neural Networks","Reinforcement Learning"]
  },

  {
    id: "6",
    title: "Become a Data Scientist",
    issuer: "Linkedin",
    year: "2024",
    category: "datascience",
    categoryLabel: "Data Science",
    link: "https://www.linkedin.com/learning/certificates/b19e74fa6daf2bc03d047ecd2f2a5d11fada0d7040f65f75ea2047bb1abdfd84",
    image: "Become a Data Scientist.jpg", 
    skills: ["Data Science"]
  },
   {
    id: "7",
    title: "Become a Blockchain Developer",
    issuer: "Linkedin",
    year: "2024",
    category: "blockchain",
    categoryLabel: "BlockChain",
    link: "https://www.linkedin.com/learning/certificates/883d783293cdbff54b2bb50bf0f5546d325b1f780a8ac79f69f7f4747f7fc7ba",
    image: "Become a Blockchain Developer.jpg", 
    skills: ["Blockchain", "Cryptography", "Ethereum"]
  },

   {
    id: "8",
    title: "Getting Started with AI and Machine Learning",
    issuer: "Linkedin",
    year: "2024",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    link: "https://www.linkedin.com/learning/certificates/08d9a4c55c2a0e1f7296c6009b474a59733d2b07753307b0a95886e5079f1410",
    image: "Getting Started with AI and Machine Learning.jpg", 
    skills: ["Machine Learning" , "Deep Learning", "Neural Networks","Reinforcement Learning"]
  },

   {
    id: "9",
    title: "Advance Your Skills as a Machine Learning Specialist",
    issuer: "Linkedin",
    year: "2024",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    link: "https://www.linkedin.com/learning/certificates/386ebb4ed0225237b5b0a6dd32952747144568dd78ef48507377134c5b1118fa",
    image: "Advance Your Skills as a Machine Learning Specialist.jpg", 
    skills: ["Machine Learning" , "Deep Learning", "Neural Networks","Reinforcement Learning"]
  },

   {
    id: "10",
    title: "Introduction to Cybersecurity Tolls & Cyberattacks",
    issuer: "Coursera (IBM)",
    year: "2023",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity Tools & Cyberattacks",
    link: "https://coursera.org/share/27f10d31bb2ca10798e536de2924155d",
    image: "IntroductionToCybersecurity_ToolsandCyberattacks.jpeg", 
    credentialId: "27f10d31bb2ca10798e536de2924155d",
    skills: ["Cybersecurity Tools,"]
  },

   {
    id: "11",
    title: "Cybersecurity Attack and Defense Fundamentals",
    issuer: "Coursera (EC-Council)",
    year: "2023",
    category: "cybersecurity",
    categoryLabel: "Cybersecurity Attack and Defense Fundamentals",
    link: "https://coursera.org/share/dd44b5976f7a2ace20e449f2989ba9a7",
    image: "Cybersecurity Attack and Defense Fundamentals.jpeg", 
    credentialId: "dd44b5976f7a2ace20e449f2989ba9a7",
    skills: ["Ethical Hacking Essentials(EHE)" , "Network Defense Essentials (NDE)" , "Digital Forensics Essentials (DFE)"]
  },

  

  
  
];

export const certifications = rawCertifications.map((c) => ({
  ...c,
  image: resolveAsset(c.image)
}));