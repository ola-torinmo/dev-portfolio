// src/data/ProjectData.jsx
import projectImage1 from '../components/assets/Nexant.jpg';
import projectImage2 from '../components/assets/ban.jpg';
import projectImage3 from '../components/assets/axel0.jpg';
import projectImage4 from '../components/assets/webflow2.jpg';
import projectImage5 from '../components/assets/kold.png';
import projectImage6 from '../components/assets/3D.png';
import nomadbg from '../components/assets/nomadbg.jpg';
import nexantbg from '../components/assets/nexantbg.jpg';
import koldbg from '../components/assets/koldbg.jpg';
import koldbg2 from '../components/assets/koldbg2.jpg';
import axelbg from '../components/assets/axelbg.jpg';
import financebg from '../components/assets/financebg.jpg';
import financebg2 from '../components/assets/financebg2.jpg';
import flowbg from '../components/assets/flowbg.jpg';

// Log when the module is loaded
console.log('ProjectData module loaded');

export const projects = [
  {
    id: 1,
    slug: "nexant-consult",
    title: "Nexant Consult",
    url: "https://nexantconsult.com/",
    industry: "Construction",
    image: projectImage1,
    projectType: "Website",
    client: "Nexant Consult",
    year: "2023",
    description: "A digital solution for Nexant Consulting - a Global infrastructure consulting firm specializing in complex engineering projects with 40+ years of combined leadership experience.",
    technologies: ["React.js, ", "  Tailwind CSS"],
    details: "Complete web development solution for Nexant Consult.",
    challenge: "Creating a professional and responsive website that reflects the company's expertise.",
    solution: "Implemented a modern tech stack with focus on performance and user experience.",
    abstractBg: nexantbg
  },
  {
    id: 2,
    slug: "bank-finance",
    title: "Hoo Bank",
    url: "https://bank-finance.vercel.app/",
    industry: "Finance",
    image: projectImage2,
    projectType: "Website",
    client: "Bank Finance",
    year: "2023",
    description: "Hoo Bank - Next-generation fintech platform offering intelligent payment solutions and credit card matching services through expert analysis of rates, fees, and personalized financial needs.",
    technologies: ["Next.js, ", "  Tailwind CSS"],
    details: "Modern banking platform development.",
    challenge: "Building a secure and user-friendly banking interface.",
    solution: "Created an intuitive design with robust security features.",
    abstractBg: financebg
  },
  {
    id: 3,
    slug: "kold-outreach",
    title: "Kold Outreach",
    url: "https://kold-outreach.vercel.app/",
    industry: "Marketing",
    image: projectImage5,
    projectType: "Website",
    client: "kold outreach",
    year: "2023",
    description: "KoldOutreach - B2B LinkedIn marketing platform that transforms LinkedIn into a primary sales channel through advanced personalization, authority building, and consistent lead generation.",
    technologies: ["Next.js,", "  Tailwind CSS"],
    details: "Personal portfolio website development.",
    challenge: "Creating a unique and engaging portfolio experience.",
    solution: "Developed a clean, modern design with smooth animations.",
    abstractBg: koldbg2
  },
  {
    id: 4,
    slug: "self-improvement app",
    title: "Flow State",
    url: "https://my-flow-state-app.vercel.app/",
    industry: "Self Improvement",
    image: projectImage6,
    projectType: "Website",
    client: "personal",
    year: "2023",
    description: "Flow State - Goal-tracking mobile app landing page designed to monitor progress, boost motivation, and celebrate achievements for enhanced productivity and personal accomplishment.",
    technologies: ["Next.js,  ", "  Tailwind CSS, ", "  Framer Motion"],
    details: "Personal portfolio website development.",
    challenge: "Creating a unique and engaging portfolio experience.",
    solution: "Developed a clean, modern design with smooth animations.",
    abstractBg: flowbg
  },
  {
    id: 5,
    slug: "axel-cyber-portfolio",
    title: "Axel Cyber Portfolio",
    url: "https://axel-cyber-portfolio.vercel.app/",
    industry: "Digital Agency",
    image: projectImage3,
    projectType: "Website",
    client: "Axel Cyber",
    year: "2023",
    description: "Axel Cyber - Web design agency specializing in high-converting websites for enterprise clients across real estate, healthcare, construction, digital agencies, and SaaS platforms.",
    technologies: ["React, ", "  Tailwind CSS"],
    details: "Personal portfolio website development.",
    challenge: "Creating a unique and engaging portfolio experience.",
    solution: "Developed a clean, modern design with smooth animations.",
    abstractBg: axelbg
  },
  {
    id: 6,
    slug: "nomad-digital-voyage",
    title: "Nomad Digital Voyage",
    url: "https://nomad-digital-voyage.webflow.io/",
    industry: "Tourism",
    image: projectImage4,
    projectType: "Website",
    client: "Nomad Digital",
    year: "2023",
    description: "Nomad Digital Voyage - Travel platform that curates personalized destination experiences, guiding wanderlust seekers from sun-kissed beaches to misty mountaintops with expertly crafted dream itineraries.",
    technologies: ["Webflow, ", "  Custom CSS"],
    details: "Digital agency website development.",
    challenge: "Building a highly customized Webflow website.",
    solution: "Leveraged Webflow's capabilities with custom code integration.",
    abstractBg: nomadbg
  }
];

console.log('Available projects:', projects.map(p => ({ slug: p.slug, title: p.title })));

// Updated to handle Promise-based params
export async function getProjectBySlug(slugPromise) {
  const slug = await Promise.resolve(slugPromise);
  console.log('getProjectBySlug called with slug:', slug);
  console.log('Available slugs:', projects.map((p) => p.slug));

  if (!slug) {
    console.error('No slug provided to getProjectBySlug.');
    return null;
  }

  const project = projects.find((project) => project.slug === slug);
  console.log('Found project:', project);
  return project;
}

// Updated to handle Promise-based params
export function getOtherProjects(currentSlug) {
  console.log('getOtherProjects called with slug:', currentSlug);
  if (!currentSlug) {
    console.warn('No slug provided to getOtherProjects, returning empty array');
    return [];
  }
  
  const filtered = projects.filter((project) => project.slug !== currentSlug);
  console.log('Filtered projects:', filtered);
  return filtered.slice(0, 3);
}
export function getAllProjects() {
  return projects;
}