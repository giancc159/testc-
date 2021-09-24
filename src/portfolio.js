import emoji from 'react-easy-emoji';

import binariosLogo from './assets/img/icons/common/binarios.png'
import github from './assets/img/icons/common/github.svg'
import core from './assets/img/icons/common/core.jpg'
import resume from './assets/docs/ErickFarinas-Resume.pdf';
import project from './assets/img/binarios.PNG';

export const greetings = {
    "name": "Erick Fariñas",
    "headerName": "Erick Farinas",
    "title": "Hi, I'm Erick Fariñas",
    "subtitle": "I build software for the world.",
    "description": `I'm a Nicaragua-based software developer who specializes in building
    exceptional mobile apps and websites to improve digital experience for users.
    Currently, I'm an engineer at Binarios focused on building apps with flutter and firebase.`,
    "resumeLink": resume
}

export const openSource = {
  githubUserName: 'farinas09',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/farinas09",
    "instagram": "https://www.instagram.com/farinas09",
    "twitter": "https://twitter.com/efarinas99",
    "github": "https://github.com/farinas09",
    "linkedin": "https://www.linkedin.com/in/efarinas/"
}

export const skillsSection = {
    title: 'My Skills',
    description: `Here are a few technologies I've been working with recently and my skills:`,
    skills: [
      emoji(
        `⚡ I enjoy creating software solutions that help other people.
        My interest in software development began in 2016 when I decided to enter to study
        software engineering. Since then I have been passionate about making mobile applications!
                  `
      ),
      emoji(`⚡ I improved my skills, I finished my degree in software engineering.
      My main focus today is improving digital experiences at Binarios for a variety of clients.`),
      
    ],
    
    softwareSkills: [
      {
        skillName: 'Flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'Kotlin',
        fontAwesomeClassname: 'logos:kotlin',
      },
      {
        skillName: 'Java',
        fontAwesomeClassname: 'logos:java',
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
        skillName: 'Angular',
        fontAwesomeClassname: 'logos:angular-icon',
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
    role: 'Software Engineer',
    company: 'Binarios',
    companylogo: binariosLogo,
    date: 'Jan 2021 – Present',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'CoreSystems',
    companylogo: core,
    date: 'Mar 2020 – Jan 2021',
    desc:
      'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    role: 'Backend Developer',
    company: 'Ionica Source',
    companylogo: github,
    date: 'Jan 2020 – Present',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const projects = [
  {
    name: "CafeNica Recolección",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: project,
    link: {
      name: "Go",
      url: "http://cafenica.net/2021/04/21/uso-de-herramientas-tecnologicas-dentro-del-proceso-del-sistema-de-alerta-temprana-clima-y-cafe/"
    }
  },
  {
    name: "Binarios Web",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: project,
    link: {
      name: "Go",
      url: "https://www.binarios.io"
    }
  },
  {
    name: "Crypto Currency Web App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    image: project,
    link: {
      name: "Go",
      url: "https://www.google.com"
    }
  },
  {
    image: project,
    name: "Web Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }
  
]