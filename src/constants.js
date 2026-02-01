// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png'
import javaLogo from './assets/tech_logo/java.png'
import pythonLogo from './assets/tech_logo/python.png'
import cLogo from './assets/tech_logo/c.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import PowerBILogo from './assets/tech_logo/PowerBI.png'
import ExcelLogo from './assets/tech_logo/Excel.png'

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import appwriteLogo from './assets/tech_logo/appwritelogo.png'

// Education Section Logo's
import mpboardLogo from './assets/education_logo/MPBoardLogo.png'
import sirtLogo from './assets/education_logo/SIRT LOGO.png'

// Project Section Logo's
import theGYMLogo from './assets/work_logo/GYM.png'
import theCAFELOGO from './assets/work_logo/Cafe_web.png'
import theMEGABLOG from './assets/work_logo/MegaBlog.png'
import theSNAKEGAME from './assets/work_logo/Snake_Game.png'





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],

     
  },
  {
    title: 'Backend',
    skills: [
     // { name: 'Node JS', logo: nodejsLogo },
     // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      //{ name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      { name: 'Appwrite', logo: appwriteLogo },

     { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      //{ name: 'PHP', logo: PHPLogo },
       { name: 'Java', logo: javaLogo },
       { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Power BI', logo: PowerBILogo },
       { name: 'Excel', logo: ExcelLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
export const projects = [
    {
      id: 0,
      title: "The Gym Web Application",
      description:
      "Developed a responsive web application for a gym, providing members with a modern and interactive user experience.The site features a dynamic interface for viewing and booking class schedules, detailed trainer profiles, and a dedicated section for managing membership details. A key feature is the chatbot-enabled user support, powered by NLP and a Lyro AI-agent, which offers instant assistance for common queries.",
      image: theGYMLogo,
      tags: ["HTML", "CSS", "JavaScript","Lyro AI Agent"],
      github: "https://github.com/Anurag7694/The_gym_web",
      webapp: "https://anurag7694.github.io/The_gym_web/",
    },
    {
      id: 1,
      title: "The Cafe Web",
      description:
      "Developed a responsive and visually appealing café website to showcase the café’s ambience, brand identity, and services through a clean and modern user interface.Special focus was given to responsive design to ensure an optimal viewing experience across mobile and desktop devices. The project emphasizes user-friendly design, consistent UI styling, and effective presentation of the café’s atmosphere to enhance customer engagement.",
      image: theCAFELOGO,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anurag7694/Cafe_Website",
      webapp: "https://anurag7694.github.io/Cafe_Website/",
    },
    {
      id: 2,
      title: " The MegaBlog  🚀",
      description:
      "Developed a full-stack blogging platform offering users a personalized experience to create, edit, and manage their content. The application leverages Appwrite for secure authentication and efficient data handling, including robust database and storage services. The frontend is built with React.js and styled using Tailwind CSS, ensuring a modern, intuitive, and responsive design across all devices.",
      image: theMEGABLOG,
      tags: ["React JS", "Appwrite", "Tailwind CSS", "Auth","Redux"],
      github: "https://github.com/Anurag7694/MegaBlog_project",
      webapp: "https://mega-blog-project-one.vercel.app/",
    },
    {
      id: 3,
      title: "Snake Game",
      description:
      "This is a classic Snake game built with HTML, CSS, and JavaScript that runs directly in the web browser. The player controls the snake to eat food, grow longer, and avoid colliding with walls or itself to score high. It provides an interactive, fun, and nostalgic gaming experience inspired by the original arcade concept.",
      image: theSNAKEGAME,

      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Anurag7694/Snake-Game-Project",
      webapp: "https://anurag7694.github.io/Snake-Game-Project/",
    },
    
    
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
];  
export const education = [
    {
      id: 0,
      img: sirtLogo,
      school: "Sagar Institute Of Research And Technology, Bhopal",
      date: "july 2022 - july 2026",
      grade: "67.00%",
      desc: "I completed my Bachelor's degree in Computer Science (B-Tech - CSBS) from SIRT College, Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at B-Tech College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology (Computer Science And Business System)",
    },
    {
      id: 1,
      img: mpboardLogo,
      school: "Laxmibai Vidhya Mandir H.S School Timarni, Harda, Madhya Pradesh",
      date: "Apr 2021 - March 2022",
      grade: "76.80%",
      desc: "I completed my class 12 education from Laxmibai Vidhya Mandir H.S School Timarni, Harda under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "12th MPBSE - PCM",
    },
    {
      id: 2,
      img: mpboardLogo,
      school: "Laxmibai Vidhya Mandir H.S School Timarni, Harda, Madhya Pradesh",
      date: "Apr 2019 - March 2020",
      grade: "91.25%",
      desc: "I completed my class 10 education from Laxmibai Vidhya Mandir H.S School Timarni, Harda under the MP board.",
      degree: "10th MPBSE",
    },
];
