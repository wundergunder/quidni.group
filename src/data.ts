import { Company, Project, SocialLink } from './types';

export const companies: Company[] = [
  {
    id: 'quidni',
    name: 'Quidni Group',
    description: 'A business innovation and technology consultant group focused on building sustainable, future-proof solutions.',
    role: 'Founder & CEO',
    logo: '/quidni-logo.png',
    url: '#'
  },
  {
    id: 'innovate',
    name: 'Innovate Solutions',
    description: 'Technology consulting firm specializing in digital transformation for enterprise clients.',
    role: 'Strategic Advisor',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#'
  },
  {
    id: 'techvision',
    name: 'TechVision Partners',
    description: 'Venture capital firm focusing on early-stage technology startups with disruptive potential.',
    role: 'Managing Partner',
    logo: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: '#'
  }
];

export const projects: Project[] = [
  {
    id: 'project1',
    name: 'Sustainable Energy Initiative',
    description: 'Leading the development of renewable energy solutions for corporate sustainability programs.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Sustainability', 'Energy', 'Innovation'],
    url: '#'
  },
  {
    id: 'project2',
    name: 'Digital Transformation Framework',
    description: 'A comprehensive methodology for organizations transitioning to digital-first operations.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Digital', 'Transformation', 'Enterprise'],
    url: '#'
  },
  {
    id: 'project3',
    name: 'AI Strategy Consortium',
    description: 'Collaborative initiative bringing together industry leaders to develop ethical AI implementation strategies.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'Ethics', 'Strategy'],
    url: '#'
  },
  {
    id: 'project4',
    name: 'Future of Work Initiative',
    description: 'Research and implementation program for next-generation workplace technologies and methodologies.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Future of Work', 'Innovation', 'Technology'],
    url: '#'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/martygunderson/',
    icon: 'Linkedin'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: '#',
    icon: 'Twitter'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: '#',
    icon: 'Github'
  },
  {
    id: 'medium',
    name: 'Medium',
    url: '#',
    icon: 'BookText'
  }
];

export const aboutInfo = {
  name: 'Marty Gunderson',
  title: 'Technology Entrepreneur & Business Innovator',
  bio: `With over 20 years of experience in technology innovation and business transformation, 
  I've helped organizations navigate the complex landscape of digital evolution. As the founder of Quidni Group, 
  I work with forward-thinking companies to develop sustainable, future-proof strategies that leverage emerging technologies.
  
  My approach combines technical expertise with business acumen, focusing on solutions that create lasting value 
  rather than following short-term trends. I believe in responsible innovation that considers environmental impact, 
  ethical implications, and long-term societal benefit.`,
  photo: '/marty-headshot.jpg',
  expertise: ['Digital Transformation', 'Strategic Innovation', 'Technology Consulting', 'Venture Capital', 'Sustainable Business Models']
};