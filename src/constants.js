// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import prismaLogo from './assets/tech_logo/prisma.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
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
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


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
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
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
import blognestLogo from './assets/work_logo/blognest2.png';
import echopayLogo from './assets/work_logo/echopay.png';
import structaquizlogo from './assets/work_logo/structaquiz.png';
import repotestLogo from './assets/work_logo/repotest.png';


  export const projects = [
    {
      id: 3,
      title: "Chit-Chat",
      description:
        "This is a simple, real-time web-based chat application built with Node.js, Express, and Socket.IO. It allows multiple users to join a chat room, set a username, and communicate instantly. The application features a clean user interface with both a light and a dark theme.",
      image: chitchatlogo,
      tags: ["HTML", "CSS", "JavaScript", "Socket.io","Node.js", "Express"],
      github: "https://github.com/Kp-Singh09/Chat-app",
      webapp: "https://chat-app-xsl9.onrender.com/",
    },
    {
      "id": 1,
      title: "BlogNest",
      description: "A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features user authentication with Clerk, allowing users to create, edit, and delete their own posts. The application includes features like post saving, comments, and a rich text editor. Admins have additional privileges, such as featuring posts, and a dedicated stats page provides analytics on top contributors and post performance.",
      image: blognestLogo,
      tags: ["React","Node.js","Express","MongoDB","Image-kit","Clerk","Tailwind CSS","React Query"],
      github: "https://github.com/Kp-Singh09/Blog-nest",
      webapp: "https://blognest-frontend.vercel.app/"
    },
    {
      id: 0,
      title: "EchoPay",
      description:
        "EchoPay is a full-stack digital wallet application built as a monorepo using Turborepo. It enables users to manage their funds, perform peer-to-peer (P2P) transfers, and view a detailed history of their transactions. The project simulates a real-world payment system with a user-facing application and a mock bank webhook service.",
      image: echopayLogo,
      tags: ["Next JS", "MongoDB","Typescript", "Mongoose", "Tailwind CSS","NextAuth.js","Turborepo"],
      github: "https://github.com/Kp-Singh09/Echo-Pay",
      webapp: "https://echo-pay.vercel.app/",
    },
    {
      id: 4 ,
      title: "StructaQuiz",
      description: "A full-stack MERN application for creating, sharing, and taking interactive quizzes with unique question formats like Comprehension, Categorize, and Cloze (Fill-in-the-Blanks). It features user authentication, a dashboard for managing forms, a form editor with image support, automated scoring, and detailed analytics with a user leaderboard.",
      image: structaquizlogo,
      tags: ["React","ImageKit","Framer Motion","Tailwind CSS","Axios","Node.js","Express.js","MongoDB","Mongoose","Clerk","Vite"],
      github: "https://github.com/Kp-Singh09/StructaQuiz",
      webapp: "https://structa-quiz.vercel.app/"
    },
    {
      id: 2,
      title: "RepoTest.AI",
      description: "RepoTest AI is a full-stack web application designed to streamline the software testing process. It integrates directly with your GitHub account, allowing you to select code files from your repositories and use the power of Google's Gemini AI to automatically generate test case summaries and full, runnable test code for multiple languages and frameworks.",
      image: repotestLogo,
      tags: [ "GitHub API","Gemini API", "OAuth","React", "Tailwind CSS", "Node.js", "Express", ],
      github: "https://github.com/Kp-Singh09/RepoTest.AI",
      webapp: "https://repo-test-ai.vercel.app/"
    }
  ];  