import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";
import project5 from "../assets/projects/Project5.png";
import project6 from "../assets/projects/Project6.png";

export const HERO_CONTENT = `Software Engineer with hands-on experience in MongoDB, PostgreSQL, Django REST Framework, React, and Express.js. Skilled in developing scalable, responsive web applications and implementing secure authentication systems. Passionate about clean code, performance optimization, and continuous learning in modern web technologies.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "Jan-2025 - Present",
    role: "Software Engineer",
    company: "Devitty",
    description: `Collaborated with a team to develop an ERP system for a Brazilian company. Contributed to backend development using Express.js, implementing CRUD operations and authentication. Built responsive UI components with React.js, integrating API data for enhanced functionality`,
    technologies: ["Node.js", "React.js", "Express.js", "PostgreSQL"],
  },
  {
    id: 2,
    year: "Feb-2025 - Apr-2025",
    role: "Cyber Security Specialist Intern",
    company: "CyberArm",
    description: `Completed courses in, FCF - Introduction to the Threat Landscape 2.0 Self-Paced, FCA - FortiGate 7.4 Operator Self-Paced, Network Fundamentals, Gained strong foundational knowledge of cyber threats, network defense strategies, and firewall operations.`,
    technologies: ["Packet Tracer", "FortiGate", "Cyber Security"],
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Backend API",
    image: project6,
    description:
      "Built a full-featured backend API for an e-commerce system with secure JWT authentication, product and order management, advanced filtering/searching, Redis-based caching, and asynchronous task processing using Django REST Framework, Celery, Redis, and PostgreSQL. Fully Dockerized for scalable deployment and efficient development.",
    technologies: [
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
      "Simple JWT",
    ],
    link: "https://github.com/ali-kamar/product-order-api/",
  },
  {
    title: "E-commerce Freelancing Website",
    image: project5,
    description:
      "Built a full e-commerce solution for a client with a user-facing store and admin panel, featuring secure authentication, dynamic product filtering, and category/image management using React.js, Node.js, Express.js, and PostgreSQL.",
    technologies: ["PostgreSQL", "Express.js", "React", "Node.js", "Tailwind"],
    link: "https://1-and-more.vercel.app/",
  },
  {
    title: "Product Management Admin App",
    image: project4,
    description:
      "A fully functional admin page website contain features like product listing, adding, editing, delete, and user authentication.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/ali-kamar/shop-admin",
  },
  {
    title: "Todo-List",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, deletion, and editing.",
    technologies: ["React.js", "Tailwind", "Express.js", "PostgreSQL"],
    link: "https://github.com/ali-kamar/todo-list",
  },
  {
    title: "Simon Game",
    image: project2,
    description:
      "Simon Game is a very known game where user should follow the color sequence to pass levels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ali-kamar/Simon-Game",
  },
  {
    title: "Restaurant Menu App",
    image: project1,
    description:
      "A website showcasing Restaurant Food Menu with ability to filter food to specified categories.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ali-kamar/Restaurant-menu",
  },
];


