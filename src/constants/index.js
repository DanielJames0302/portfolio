import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  greatfrontend,
  nus,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fastapi,
  nextjs,
  go,
  postgresql,
  gestura,
  cryonixai,
  connectheart,
  foodie,
  football,
} from "../assets";


export const navLinks = [
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

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Entrepreneurship",
    icon: backend,
  },
  {
    title: "Startup",
    icon: creator,
  },
];

const technologies = [
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
    name: "nextjs",
    icon: nextjs
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  
  {
    name: "git",
    icon: git,
  },

 
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "GreatFrontEnd",
    icon: greatfrontend,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Scope, design, and develop new technical projects, laying the groundwork for early-stage products to iteratively evolve and scale.",
      "Partner with business, product and design to translate growth strategies into technical plans.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "National University Of Singapore",
    icon: nus,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - May 2024",
    points: [
      "Conducted weekly C programming lab sessions for 10 undergraduates, helping them with fundamental concepts of programming.",
      "Graded and provided feedback on students’ weekly programming assignments."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cryonix AI",
    description:
      "An innovative AI startup project focusing on developing cutting-edge solutions to empower businesses with their documents.",
    tags: [
      {
        name: "Natural Language Processing",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: cryonixai,
    source_code_link: "https://cryonixai.com/",
  },
  {
    name: "Gestura",
    description:
      "Short-video platform that allows deaf-mute content creators to upload their creative videos using sign language and translate content videos into sign language.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "medipipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
    ],
    image: gestura,
    source_code_link: "https://github.com/DanielJames0302/Gestura",
  },
  {
    name: "Foodie",
    description:
      "A social web application that enables foodies to search for recipes, share their cooking skills, and so on",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "go",
        color: "purple-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "webhooks",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/DanielJames0302/Foodie",
  },
  {
    name: "FootballAnalysis",
    description:
      "A machine learning pipeline to analyze football videos to extract key football strategies and players' information",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: football,
    source_code_link: "https://github.com/DanielJames0302/FootballAnalysis",
  },
  {
    name: "Connect@Heart",
    description:
      "A website that facilitated a cost-effective system, enabling around 1000 volunteers to enroll and manage activities while non-profit organizations can effortlessly handle administration task",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: connectheart,
    source_code_link: "https://github.com/DanielJames0302/ConnectHeart",
  },
];

export { services, technologies, experiences, testimonials, projects };
