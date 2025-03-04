// src/data/ProjectData.jsx
import projectImage1 from '../components/assets/Nexant.jpg';
import projectImage2 from '../components/assets/ban.jpg';
import projectImage3 from '../components/assets/axel0.jpg';
import projectImage4 from '../components/assets/webflow2.jpg';

// Log when the module is loaded
console.log('ProjectData module loaded');

export const projects = [
  {
    id: 1,
    slug: "nexant-consult",
    title: "Nexant Consult",
    url: "https://nexantconsult.com/",
    image: projectImage1,
    projectType: "Web Development",
    client: "Nexant Consult",
    year: "2023",
    description: "A professional consulting firm website built with modern web technologies.",
    technologies: ["React.js  ", "  Tailwind CSS"],
    details: "Complete web development solution for Nexant Consult.",
    challenge: "Creating a professional and responsive website that reflects the company's expertise.",
    solution: "Implemented a modern tech stack with focus on performance and user experience."
  },
  {
    id: 2,
    slug: "bank-finance",
    title: "Bank Finance",
    url: "https://bank-finance.vercel.app/",
    image: projectImage2,
    projectType: "Web Development",
    client: "Bank Finance",
    year: "2023",
    description: "A modern banking and finance platform.",
    technologies: ["Next.js  ", "  Tailwind CSS"],
    details: "Modern banking platform development.",
    challenge: "Building a secure and user-friendly banking interface.",
    solution: "Created an intuitive design with robust security features."
  },
  {
    id: 3,
    slug: "axel-cyber-portfolio",
    title: "Axel Cyber Portfolio",
    url: "https://axel-cyber-portfolio.vercel.app/",
    image: projectImage3,
    projectType: "Web Development",
    client: "Axel Cyber",
    year: "2023",
    description: "A portfolio website showcasing cybersecurity expertise.",
    technologies: ["React  ", "  Tailwind CSS"],
    details: "Personal portfolio website development.",
    challenge: "Creating a unique and engaging portfolio experience.",
    solution: "Developed a clean, modern design with smooth animations."
  },
  {
    id: 4,
    slug: "nomad-digital-voyage",
    title: "Nomad Digital Voyage",
    url: "https://nomad-digital-voyage.webflow.io/",
    image: projectImage4,
    projectType: "Web Development",
    client: "Nomad Digital",
    year: "2023",
    description: "A digital agency website built with Webflow.",
    technologies: ["Webflow  ", "  Custom CSS"],
    details: "Digital agency website development.",
    challenge: "Building a highly customized Webflow website.",
    solution: "Leveraged Webflow's capabilities with custom code integration."
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