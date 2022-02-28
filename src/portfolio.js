import emoji from 'react-easy-emoji';

import binariosLogo from './assets/img/icons/common/binarios.png'
import m6 from './assets/img/icons/common/m6.png'
import cloud from './assets/img/icons/common/cloudcreations.PNG'
import tecpat from './assets/img/icons/common/tecpat.png'
import up from './assets/img/icons/common/up.PNG'

import core from './assets/img/icons/common/core.jpg'
import resume from './assets/docs/ErickFarinas-Resume.pdf';
import binariosImg from './assets/img/binarios.PNG';
import technocarImg from './assets/img/technocar.PNG';
import fs1 from './assets/img/fullstack1.PNG';
import ccf from './assets/img/imagencarlos.PNG';
import c1 from './assets/img/clinica1.PNG';
import sanna from './assets/img/sanna.PNG';


export const greetings = {
    "name": "Gian",
    "headerName": "Gian",
    "title": "Hi, I'm Gian ",
    "subtitle": "I build software for the world.",
    "description": `I'm a software developer who specializes in building
    exceptional websites to improve digital experience for users.
   `,
    "resumeLink": resume
}

export const openSource = {
  githubUserName: 'giandd159',
};

export const contact = {
  
}

export const socialLinks = {
    //"facebook": "https://www.facebook.com/farinas09",
    //"instagram": "https://www.instagram.com/farinas09",
    //"twitter": "https://twitter.com/efarinas99",
    "github": "https://github.com/giandd159",
    "linkedin": "https://www.linkedin.com/in/giandd159/"
}

export const skillsSection = {
    title: 'My Skills',
    description: `Some technologies I've been working with recently and my skills:`,
    skills: [
      emoji(
        `⚡ I enjoy creating software solutions that help other people.
        My interest in software development began in 2014 when I decided to study
        software engineering. Since then I have been passionate about making mobile applications!
                  `
      ),
      emoji(`⚡ Currently, I have bachelor degree in System Engineering and a Cisco certificate.`),
      
    ],
    
    softwareSkills: [
      {
        skillName: 'Vue',
        fontAwesomeClassname: 'logos:vue',
      },
      {
        skillName: 'Laravel',
        fontAwesomeClassname: 'logos:laravel',
      },
      {
        skillName: 'AWS',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'Firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs',
      },
      {
        skillName: 'ReactJs',
        fontAwesomeClassname: 'logos:react',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker',
      },
      {
        skillName: 'MySQL',
        fontAwesomeClassname: 'logos:mysql',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'Git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Universidad Centroamericana',
      subHeader: 'Bachelor of Software Engineering',
      duration: '2016 - 2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Colegio Salesiano "San Juan Bosco"',
      subHeader: 'Bachelor Degree',
      duration: '2011 - 2015',
      desc: 'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
]

export const experience = [
  {
    role: 'Front-End Developer',
    company: 'M6 Connect',
    companylogo: m6,
    date: 'March 2021 – August 2021',
    desc: 'I developed applications related to  Video Merging and trimming for Marketing Area with Vue Js, MySQL, JavaScript, Laravel, Github, PHP,NodeJS.'
  },
  {
    role: 'Front-End Developer',
    company: 'Cloud Creations',
    companylogo: cloud,
    date: 'October 2020 – March 2021',
    desc: `I did development of new features and maintenance for client's in Salesforce Web applications, writing quality code and reports.`,
  },
  {
    role: 'Laravel / Javascript Dev',
    company: 'Tecnología Patrimonial',
    companylogo: tecpat,
    date: 'Nov 2019 – Nov 2020',
    desc: 'I have built  administrative web applications related to Inventory System written in JavaScript, Laravel and MySQL as database engine.',
  },
  {
    role: 'Web Developer ',
    company: 'University',
    companylogo: up,
    date: 'May 2019 – Nov 2019',
    desc: 'I  built  modules of a Virtual classroom web application written in JavaScript, Laravel and MySQL as database engine.Besides, some informative websites with Wordpress',
  }
]

export const projects = [
  {
    name: "Management of Blogs,Categories like a CMS",
    desc: "A web application to collect information for management of blogs,categories,posts created with VueJS and Laravel",
    image: fs1,
    link: {
      name: "Go",
      url: "https://fullstack1.xyz/"
    }
  },
  {
    name: "Institute Carlos F.",
    desc: "It's an institute which offers educational services to people created with Javascript,Wordpress and HTML/Bootstrap",
    image: ccf,
    link: {
      name: "Go",
      url: "https://instituteccueto.com/"
    }
  },
  {
    name: "Clinic Services",
    desc: "Web application created with JavaScript and HTML that allows you to view information related to medical services.",
    image: c1,
    link: {
      name: "Go",
      url: "https://clinicadeath1.xyz/"
    }
  },
  {
    image: sanna,
    name: "Medical Web",
    desc: "Medical Web System created with JavaScript/Laravel/HTML/Bootstrap for medical services .",
    link: {
      name: "Go",
      url: sanna
    }
  }
  
]