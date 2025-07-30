import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/e-commerce.png";
import authApp from "@/public/authentication app.png";
import chatApp from "@/public/chat-app.png";
import crud101 from "@/public/crud101.png";
import carbon from "@/public/carbon.png"
import csco from "@/public/csco.png";
import todo from "@/public/todo.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Junior Software Engineer",
    location: "Fintech Hub Ltd",
    description:
      "I joined Fintech Hub as a junior software engineer in early 2024. I worked on a variety of projects and upskilled to a software developer.",
    icon: React.createElement(CgWorkAlt),
    date: "January, 2025 - present",
  },
  {
    title: "Intern",
    location: "Fintech Hub Ltd",
    description:
      "I interned at Fintech Hub for 3 months. I worked on a project to develop a web app for a client. and have had plenty of knowledge about software development and insdustry standards.",
    icon: React.createElement(CgWorkAlt),
    date: "October, 2024 - January, 2025",
  },
  {
    title: "Web Development Intern",
    location: "Octagram Limited",
    description:
      "I interned at Octagram Limited for 3 months. I learned about the core concepts of React.js and practiced them supervised by senior developers.",
    icon: React.createElement(CgWorkAlt),

    date: "June, 2024 - August, 2025",
  },
];

export const educationData = [
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    institution: "Chittagong University of Engineering and Technology",
    description:
      "Graduated with a solid foundation in algorithms, data structures, and software engineering. Participated in coding contests and team projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2024",
  },
  {
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Rajbari Govt College",
    description:
      "Completed Higher Secondary Education with a focus on mathematics, physics, chemistry and ICT developing an early interest in technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Rajbari Govt High School",
    description:
      "Completed secondary education with a strong focus on science, mathematics, and computer studies, laying the foundation for a career in technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2015",
  },
];

export const projectsData = [
  {
    title: "E-Commerce",
    description:
      "A fully responsive E-Commerce website built utilizing various technologies featuring product filtering, sorting, pagination and cart management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Axios", "Material-UI"],
    imageUrl: ecommerce,
    repoUrl: "https://github.com/Shoishob007/E-Commerce",
    liveDemoUrl: "https://central-app.vercel.app",

  },
  {
    title: "Emission Lab",
    description:
      "An AI-powered platform for comprehensive CO₂e emissions calculation, intelligent analysis and reporting, Offset solutions, and scalable API integration for businesses.",
    tags: ["Next.js", "Django", "REST API", "PostgreSQL", "Zustand", "OpenAI Api"],
    imageUrl: carbon,
    repoUrl: "https://github.com/Shoishob007/E-Commerce",
    liveDemoUrl: "https://carbon-web-three.vercel.app",

  },
  {
    title: "CSCO",
    description:
      "An application containing all the details and scopes of a leading company in the field of pharmaceuticals.",
    tags: ["Next.js", "Design Sprints", "TailwindCSS", "Framer Motion", "Styled-components", "Client Management"],
    imageUrl: csco,
    repoUrl: "https://github.com/Shoishob007/central-app",
    liveDemoUrl: "https://central-bd.com/",
  },
  {
    title: "Authentication App",
    description:
      "A web application offering a fast and secure authentication and authorization scheme along with OAuth2.0 protocol.",
    tags: ["React.js", "Express.js", "Redux", "MongoDB", "TailwindCSS", "Firebase"],
    imageUrl: authApp,
    repoUrl: "https://github.com/Shoishob007/auth-app",
  },
  {
    title: "Chat App",
    description:
      "A web app developed by utilizing Context API for state management",
    tags: ["React.js", "Firebase", "SASS"],
    imageUrl: chatApp,
    repoUrl: "https://github.com/Shoishob007/chat-app-react",
    liveDemoUrl: "https://chat-app-react-gamma.vercel.app",
  },
  // {
  //   title: "Book Store",
  //   description:
  //     "A simple CRUD application built abiding by MERN stack",
  //   tags: ["React.js", "Node.js", "Express.js", "MongoDB", ],
  //   imageUrl: crud101,
  //   repoUrl: "https://github.com/Shoishob007/Bookstore-CRUD",
  //   liveDemoUrl: "https://chat-app-react-gamma.vercel.app",
  // },
  {
    title: "ToDo App",
    description:
      "A web application to fascilitating a basic todo app to keep track of the activities and events",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    imageUrl: todo,
    repoUrl: "https://github.com/Shoishob007/todo-app-react",
    liveDemoUrl: "https://todo-app-react-gamma-two.vercel.app",
  },
];


export const skillsData = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "SAAS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "C",
  "C++",
  "C#",
  "Python",
  "SQLite3",
  "PostgreSQL",
  "Git",
  "GitHub",
  "MongoDB",
  "Firebase",
  "Redux / Zustand",
];