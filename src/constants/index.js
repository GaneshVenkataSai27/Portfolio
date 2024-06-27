import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `With 3 years of experience as a full stack developer, I specialize in creating robust web applications. Skilled in React JS, Spring Boot, Python Flask, and MySQL, I aim to deliver innovative solutions that drive business growth and enhance user experiences. Passionate about leveraging technology to solve real-world problems, I am committed to continuous learning and improvement.`;

// export const ABOUT_TEXT = `I am a highly motivated software professional with 3 years of experience in developing and managing web applications. My expertise includes front-end technologies like React JS and back-end frameworks such as Spring Boot and Python Flask. I am also skilled in database management with MySQL and have a working knowledge of Mendix, HTML, CSS, and JavaScript. Adept at troubleshooting and debugging, I ensure optimal performance of the applications I develop. My passion lies in leveraging my technical skills to create innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `
- Highly motivated software professional with 3 years of experience
- Specialize in developing and managing web applications
- Proficient in front-end technologies like React JS
- Experienced in back-end frameworks such as Spring Boot and Python Flask
- Skilled in database management with MySQL
- Knowledgeable in Mendix, HTML, CSS, and JavaScript
- Adept at troubleshooting and debugging for optimal application performance
- Passionate about leveraging technology to enhance user experiences and drive business growth
- Committed to continuous learning and professional development
`;


export const EXPERIENCES = [
  {
    year: "August 2021 - Present",
    role: "Full Stack Developer",
    company: "CavinKare",
    description: [
      "Experienced professional with a proven track record in developing and maintaining complex web applications and data visualization systems.",
      "Specialized in both frontend and backend technologies, with expertise in ReactJS, Bootstrap, Spring Boot, and Python.",
      "Proficient in database management using MySQL and integration with enterprise systems like SAP."
    ],
    technologies: ["React Js", "SpringBoot", "Python-flask", "MySQL", "Mendix", "JS"],
  },
  {
    year: "June 2018 - July 2018",
    role: "Internship",
    company: "PRAGMATICSS",
    description: [
      "Developed a website for Train Roll Management, focusing on inventory management for items like bedsheets and pillows.",
      "Gained practical experience in MySQL and DBMS, and collaborated on frontend development using HTML, CSS, and JavaScript."
    ],
    technologies: ["DBMS", "MySQL", "HTML", "CSS", "Js"],
  }
];

export const PROJECTS = [
  {
    title: "CLMS",
    image: project1,
    description:
      "A fully functional Contract Labour Management website with features like Labour CheckIn CheckOut, and user authentication.",
    technologies: ["React JS", "Spring Boot", "MySQL"],
  },
  {
    title: "DRM KPI",
    image: project2,
    description:
      "An application for reviewing Key Parameter Index, with features such as Capturing Plan for Daily, Weekly and Monthly, Fetching Data from SAP and Displaying in Charts.",
    technologies: ["React JS", "Python Flask", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "MassBalance Application",
    image: project4,
    description:
      "A platform for Traceability of Dairy from Entry to Production of Finished Product Covering Various Sections and Workflows.",
    technologies: ["Mendix","HTML", "CSS"],
  },
];

export const CERTIFICATES = [
  {
    title: "Build Website from Scratch with HTML & CSS, Udemy ",
    image: project1,
    description:
      "Devloped a Website from Scratch Using HTML, CSS and BootStrap. Attended the Course in Udemy",
    technologies: ["HTML", "CSS", "BootStrap"],
  },
  {
    title: "Java Programming for Beginners, Udemy",
    image: project2,
    description:
      " Learnt Java from Scratch through this Course which was hosted by Udemy. Learnt Java Syntax, Object Oriented Programming, Exception Handling",
    technologies: ["Java"],
  },
  {
    title: "Mendix - Application Development, Udemy",
    image: project3,
    description:
      "A Dedicated Course on Mendix through which learnt about Microflows and Workflows.",
    technologies: ["Mendix"],
  },
  {
    title: "Database Management System, NPTEL",
    image: project4,
    description:
      "The course introduces relational data models, entity-relationship modeling, SQL, data normalization, and database design.",
    technologies: ["DBMS", "MySQL"],
  },
];

export const CONTACT = {
  address: "Vijayawada, Andhra Pradesh, India ",
  phoneNo: "+91 9493872148",
  email: "ganeshadapala27@gmail.com",
};
