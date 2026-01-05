import Link from 'next/link';

import { buttonVariants } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Awards',
    hash: '#awards',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;


export const experiencesData = [
    {
    title: 'Software Engineer',
    company: 'Health Informatics Research Lab',
    description:
      'Architected and developed a real-time chat service using Next.js, TypeScript, and AWS Amplify GraphQL API, achieving sub-200ms message delivery latency through optimized GraphQL subscriptions.',
    period: 'May 2025 - July 2025',
    technologies: ['Next.js', 'AWS Amplify / AppSync', 'GraphQL', 'Typescript'],
  },
  {
    title: 'AI Engineering Intern',
    company: 'Amaris.AI',
    description:
      'Developed robust backend systems to automate AI-driven report generation, optimize API integration, and enable secure inter-service data exchange for streamlined knowledge delivery.',
    period: 'May 2025 - July 2025',
    technologies: ['Python', 'A2A', 'FastAPI', 'LlamaIndex', 'LangGraph'],
  },
  {
    title: 'Research Intern',
    company: 'Smart Systems Institute',
    description:
      'Enhanced robot vision and navigation by fine-tuning image segmentation, improving camera calibration, and optimizing trajectory selection using advanced algorithms.',
    period: 'March 2025 - May 2025',
    technologies: ['Python', 'Pytorch'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'GreatFrontEnd',
    description:
      'During my internship at GreatFrontEnd, I maintained an EdTech coding interview platform by developing core features, collaborating on content-driven growth, and authoring detailed DSA solutions to enhance stability, user engagement, and learning outcomes.',
    period: 'September 2024 – January 2025',
    technologies: ['Typescript', 'Next.js', 'Tailwind'],
  },
] as const;

export const skillsData = [
  {
    title: 'Programming',
    technologies: ['/python.svg', '/go.svg', '/javascript.svg', '/typescript.svg'],
  },
  {
    title: 'Web',
    technologies: ['/html.svg', '/css.svg'],
  },
  {
    title: 'Database',
    technologies: ['/postgresql.svg', '/firebase.svg'],
  },
  {
    title: 'Web Frameworks and Libraries',
    technologies: ['/fastapi.svg', '/react.svg', '/nextjs.svg', '/tailwind.svg'],
  },
  {
    title: 'AI/ML Frameworks and Libraries',
    technologies: ['/pytorch.svg', '/numpy.svg', '/pandas.svg', '/langchain.svg', '/langgraph.svg', '/llamaindex.jpeg', '/matplotlib.svg','/opencv.svg'],
  },
  {
    title: 'DevOps Tools',
    technologies: ['/dock.svg'],
  },
  {
    title: 'Tools',
    technologies: ['/github.svg'],
  },
] as const;


