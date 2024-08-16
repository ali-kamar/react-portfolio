import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over a year of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jul-2024 - Present",
    role: "Full Stack Developer Intern",
    company: "OctaNet Services Pvt Ltd.",
    description: `Developed a full-stack product management admin page using MongoDB, Express, React, and Node.js (MERN). Implemented core functionalities including product creation, editing, deletion, and category-based filtering. Ensured responsiveness and seamless user experience across devices.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Product Management Admin App",
    image: project4,
    description:
      "A fully functional admin page website with features like product listing, adding, editing, delete, and user authentication.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Todo-List",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, deletion, and editing.",
    technologies: ["React.js", "Tailwind", "Express.js", "PostgreSQL"],
  },
  {
    title: "Restaurant Menu App",
    image: project1,
    description:
      "A website showcasing Restaurant Food Menu.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Simon Game",
    image: project2,
    description:
      "Simon Game is a very known game where user should follow the color sequence to pass levels.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
