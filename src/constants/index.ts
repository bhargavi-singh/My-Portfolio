import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  sarvagram,
  criodo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Engineer",
    companyName: "Sarvagram Fincare Pvt. Ltd.",
    icon: sarvagram,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Architected and developed a reusable ticketing and feedback library using React, Vite, and native JavaScript APIs.",
      "Spearheaded frontend integration of Credit Bureau APIs in a React lending platform, building optimized components to visualize structured credit data.",
      "Implemented a URN-based identity deduplication system to eliminate repeat lending fraud, standardizing identity mapping for 100K+ customers.",
      "Engineered a real-time Command Control Center using Leaflet.js to allow managers to track live employee locations and assign field tasks.",
    ],
  },
  {
    title: "Project Engineer",
    companyName: "Crio.Do",
    icon: criodo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2024",
    points: [
      "Developed a customizable resume builder using Next.js, TypeScript, and Redux based on an open-source project, reducing manual effort for the customer success team by 30%.",
      "Engineered a certification system using HTML, CSS, and Directus, enabling automated certificate generation and driving a 17% increase in social media engagement.",
      "Designed and implemented a modern profile module leveraging React Hook Form, RTK Query, and ShadCN UI, cutting user onboarding time from 20 minutes to 10 minutes.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "QKart Express",
    description:
      "A full-stack responsive e-commerce application offering a diverse product catalog with authentication, cart management, and checkout features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/bhargavi-singh",
    liveLink: "https://qkart-deliveryapp.netlify.app/",
  },
  {
    name: "QGenius - AI Interview Prep",
    description:
      "An AI-powered interview preparation platform focused on SDE roles, leveraging OpenAI APIs to generate guided learning paths for DSA, LLD, and HLD.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/bhargavi-singh/QGenius",
    liveLink: "https://qgenius.vercel.app/",
  },
  {
    name: "QTrip Dynamic",
    description:
      "A dynamic travel booking platform that allows users to explore various destinations, carefully review detailed adventure itineraries, and seamlessly book their travel experiences.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/bhargavi-singh",
    liveLink: "https://qtripdynamic-site.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
