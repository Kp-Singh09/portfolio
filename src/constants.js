// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import prismaLogo from './assets/tech_logo/prisma.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
//import angularLogo from './assets/tech_logo/angular.png';
//import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
//import gsapLogo from './assets/tech_logo/gsap.png';
//import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
//import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
//import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
//import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import gtbitlogo from './assets/education_logo/gtbit_logo.png';
import dspslogo from './assets/education_logo/dsps_logo.png';
import tglogo from './assets/education_logo/tg_logo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      //{ name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      //{ name: 'Angular', logo: angularLogo },
      //{ name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Prisma ORM',logo: prismaLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: gtbitlogo,
      school: "Guru Tegh Bahadur Institue of Technology, Delhi",
      date: "Oct 2022 - July 2026",
      grade: "9.19 CGPA",
      desc: "I am persuing my Bachelor's degree (B.Tech) in Artificial Intellignece and Data Science from Guru Gobind Singh Indraprastha University, Delhi. During my time at college, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Computer Networks, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Technology -B.Tech",
    },
    {
      id: 1,
      img: dspslogo,
      school: "Dyal Singh Public School, Panipat",
      date: "March 2021 - MArch 2022",
      grade: "90.2%",
      desc: "I completed my class 12 education from Dyal Singh Public School, Panipat, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: tglogo,
      school: "Tagore School, Panipat",
      date: "March 2019- March 2020",
      grade: "98.6%",
      desc: "I completed my class 10 education from Tagore School, Panipat, under the HBSE board, where I studied Science with Computer.",
      degree: "HBSE(X), Science with Computer",
    },
  ];
  


  // Project Section Logo's
import chitchatlogo from './assets/work_logo/chitchat.png';
import blognestLogo from './assets/work_logo/blognest.png';
import echopayLogo from './assets/work_logo/echopay.png';

  export const projects = [
    {
      id: 0,
      title: "Chit-Chat",
      description:
        "This is a simple, real-time web-based chat application built with Node.js, Express, and Socket.IO. It allows multiple users to join a chat room, set a username, and communicate instantly. The application features a clean user interface with both a light and a dark theme.",
      image: chitchatlogo,
      tags: ["HTML", "CSS", "JavaScript", "Socket.io","Node.js", "Express"],
      github: "https://github.com/Kp-Singh09/Chat-app",
      webapp: "https://chat-app-xsl9.onrender.com/",
    },
    {
      id: 1,
      title: "BlogNest",
      description:
        "BlogNest is a full-stack blogging platform where users can write, publish, update, delete, and explore blogs. It features user authentication, a beautiful UI, and a clean, responsive layout.",
      image: blognestLogo,
      tags: ["React.js", "Node.js", "JWT","Tailwind CSS", "Express", "TypeScript"],
      github: "https://github.com/Kp-Singh09/Blogging_Frontend",
      webapp: "https://blogging-frontend-six.vercel.app/",
    },
    {
      id: 2,
      title: "EchoPay",
      description:
        "EchoPay is a full-stack digital wallet application built as a monorepo using Turborepo. It enables users to manage their funds, perform peer-to-peer (P2P) transfers, and view a detailed history of their transactions. The project simulates a real-world payment system with a user-facing application and a mock bank webhook service.",
      image: echopayLogo,
      tags: ["Next JS", "PostgreSQL", "Prisma", "Tailwind CSS","NextAuth.js","Turborepo", "TypeScript"],
      github: "https://github.com/Kp-Singh09/Echo-Pay",
      webapp: "https://paytm-test-user-app.vercel.app/",
    },
  ];  